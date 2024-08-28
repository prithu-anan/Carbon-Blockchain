// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CarbonOffset is Ownable, ERC20 {

    //token exchange rate
    uint256 tokenPrice = 100000;

    // Constants
    uint8 constant SPECIALIZATION_ENVIRONMENTAL = 0;
    uint8 constant SPECIALIZATION_LICENSE = 1;
    uint8 constant SPECIALIZATION_SITE_VISIT = 2;

    struct Auditor {
        address auditorAddress;
        mapping(uint8 => bool) specializations;
    }

    struct Project {
        bool isActive;
        uint256 fundsReceived;
        string[] projectIpfsHashes; // Array to store multiple IPFS hashes for project documents
        mapping(address => Investment) investments; // Investors and their investment plans
        uint256 lastAuditTime;
    }

    struct Developer {
        address developerAddress;
        string[] projectIds; // Array of project IDs associated with the developer
    }

    struct Investor {
        address investorAddress;
        string[] documentsIpfsHashes; // Array to store multiple IPFS hashes for investor documents
        bool isApproved;
    }

    struct Investment {
        uint256 amount;
        uint256 startTime;
        uint256 endTime;
        uint256 totalTransferred;
    }

    struct AuditRecord {
        address auditor;
        uint8 specialization;
        string auditIpfsHash; // Hash of the audit document stored on IPFS
        bool isApproved;
    }

    // Mappings
    mapping(address => Developer) public developers;
    mapping(address => Investor) public investors;
    mapping(string => Project) public projects;
    mapping(address => Auditor) public auditors;
    mapping(string => AuditRecord[]) public auditRecords; // projectId => audit records

    // Events
    event DeveloperRegistered(address developer);
    event ProjectCreated(string projectId, address developer);
    event DocumentAdded(string projectId, address developer, string ipfsHash);
    event InvestorRegistered(address investor);
    event DocumentAdded(address investor, string ipfsHash);
    event AuditorRegistered(address auditor, uint8[] specializations);
    event SpecializationAdded(address auditor, uint8 specialization);
    event InvestmentMade(string projectId, address investor, uint256 amount, uint256 startTime, uint256 endTime);
    event AuditPerformed(string projectId, address auditor, string ipfsHash, bool isApproved);
    event FundsWithdrawn(string projectId, address developer, uint256 amount);

    // Constructor with initial supply and exchange rate
    constructor(uint256 initialSupply, uint _tokenPrice) 
        ERC20("CarbonToken", "CTK")
        Ownable(msg.sender)
    {
        tokenPrice = _tokenPrice;
        _mint(msg.sender, initialSupply);
    }

    // Mint new tokens
    function mint(address to) public payable onlyOwner {
        require(msg.value > 0, "No ETH sent");
        uint amount = msg.value * tokenPrice;
        _mint(to, amount);
    }

    // Register a Developer
    function registerDeveloper() external {
        require(developers[msg.sender].developerAddress == address(0), "Developer already registered");
        developers[msg.sender].developerAddress = msg.sender;
        emit DeveloperRegistered(msg.sender);
    }

    function createProject(string memory projectId) public {
        require(developers[msg.sender].developerAddress != address(0), "Developer not registered");
        projects[projectId].isActive = true;
        projects[projectId].lastAuditTime = block.timestamp;
        developers[msg.sender].projectIds.push(projectId); 
        emit ProjectCreated(projectId, msg.sender);
    }
    function addProjectDocument(string memory projectId, string memory ipfsHash) external {
        require(developers[msg.sender].developerAddress != address(0), "Developer not registered");
        require(projects[projectId].isActive, "Project is not active");

        projects[projectId].projectIpfsHashes.push(ipfsHash);
        emit DocumentAdded(projectId, msg.sender, ipfsHash); // Emit an event to notify that a document has been added
    }
    function addProjectDocuments(string memory projectId, string[] memory ipfsHashes) external {
        require(developers[msg.sender].developerAddress != address(0), "Developer not registered");
        require(projects[projectId].isActive, "Project is not active");
        for (uint i = 0; i < ipfsHashes.length; i++) {  
            projects[projectId].projectIpfsHashes.push(ipfsHashes[i]); 
            emit DocumentAdded(projectId, msg.sender, ipfsHashes[i]);  // Emit an event to notify that a document has been added to the project's documents array
         }
    }
    function registerInvestor() external {
        require(investors[msg.sender].investorAddress == address(0), "Investor already registered");
        investors[msg.sender].investorAddress = msg.sender;
        investors[msg.sender].isApproved = false;
        emit InvestorRegistered(msg.sender);
    }

    function addInvestorDocument(string memory ipfsHash) external {
        require(investors[msg.sender].investorAddress != address(0), "Investor not registered");
        investors[msg.sender].documentsIpfsHashes.push(ipfsHash); 
        emit DocumentAdded(msg.sender, ipfsHash); 
    }
    function addInvestorDocuments(string[] memory ipfsHashes) external {
        require(investors[msg.sender].investorAddress != address(0), "Investor not registered");
        for (uint i = 0; i < ipfsHashes.length; i++) {
            investors[msg.sender].documentsIpfsHashes.push(ipfsHashes[i]); 
            emit DocumentAdded(msg.sender, ipfsHashes[i]);  // Emit an event to notify that a document has been added to the investor's documents array
         }
    }
    function registerAuditor(uint8[] memory specializations) external {
        require(auditors[msg.sender].auditorAddress == address(0), "Auditor already registered");

        auditors[msg.sender].auditorAddress = msg.sender;

        for (uint i = 0; i < specializations.length; i++) {
            auditors[msg.sender].specializations[specializations[i]] = true;
        }

        emit AuditorRegistered(msg.sender, specializations);
    }

    function addAuditorSpecialization(uint8 specialization) external {
        require(auditors[msg.sender].auditorAddress == msg.sender, "Not authorized to add specialization");
        auditors[msg.sender].specializations[specialization] = true;
        emit SpecializationAdded(msg.sender, specialization);
    }

    function investInProject(string memory projectId, uint256 amount, uint256 duration) external {
        require(investors[msg.sender].investorAddress != address(0), "Investor not registered");
        require(projects[projectId].isActive, "Project is not active");

        _transfer(msg.sender, address(this), amount);

        projects[projectId].investments[msg.sender].amount += amount;
        projects[projectId].investments[msg.sender].startTime = block.timestamp;
        projects[projectId].investments[msg.sender].endTime = block.timestamp + duration;
        projects[projectId].investments[msg.sender].totalTransferred = 0;

        emit InvestmentMade(projectId, msg.sender, amount, projects[projectId].investments[msg.sender].startTime, projects[projectId].investments[msg.sender].endTime);
    }

    function uploadAuditRecord(string memory projectId, uint8 specialization, string memory ipfsHash, bool isApproved) external {
        Auditor storage auditor = auditors[msg.sender];
        require(auditor.auditorAddress == msg.sender && auditor.specializations[specialization], "Not authorized to audit");

        Project storage project = projects[projectId];
        require(project.isActive, "Project is not active");

        AuditRecord memory newAuditRecord = AuditRecord({
            auditor: msg.sender,
            specialization: specialization,
            auditIpfsHash: ipfsHash,
            isApproved: isApproved
        });

        auditRecords[projectId].push(newAuditRecord);
        emit AuditPerformed(projectId, msg.sender, ipfsHash, isApproved);
    }

    // Withdraw funds by the developer
    function withdrawFunds(string memory projectId) external {
        Project storage project = projects[projectId];
        require(developers[msg.sender].developerAddress != address(0), "Developer not registered");
        bool isOwner = false;
        for (uint i = 0; i < developers[msg.sender].projectIds.length; i++) {
            if (keccak256(abi.encodePacked(developers[msg.sender].projectIds[i])) == keccak256(abi.encodePacked(projectId))) {
                isOwner = true;
                break;
            }
        }
        require(isOwner, "Caller is not the owner of the project");

        
        require(project.isActive, "Project is not active");

        uint256 totalInvestment = project.fundsReceived;
        require(totalInvestment > 0, "No funds available for withdrawal");

        
        uint256 ethAmount = totalInvestment / tokenPrice;
        
       
        require(address(this).balance >= ethAmount, "Insufficient ETH in contract");
        project.fundsReceived = 0;

        // Transfer ETH to the developer
        payable(msg.sender).transfer(ethAmount);

        emit FundsWithdrawn(projectId, msg.sender, ethAmount);
    }


    receive() external payable { }

}
