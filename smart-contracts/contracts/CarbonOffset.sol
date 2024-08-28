// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CarbonOffset is Ownable, ERC20 {

    uint256 tokenPrice = 100000;

    uint8 constant SPECIALIZATION_ENVIRONMENTAL = 0;
    uint8 constant SPECIALIZATION_LICENSE = 1;
    uint8 constant SPECIALIZATION_SITE_VISIT = 2;

    struct Auditor {
        bool isRegistered;
        mapping(uint8 => bool) specializations;
    }

    struct Project {
        bool isActive;
        uint256 fundsReceived;
        bytes32 documentsHash;
        mapping(address => Investment) investments;
        uint256 lastAuditTime;
        address developerAddress;
    }

    struct Developer {
        bool isRegistered;
        mapping(string => bool) projectIds;
    }

    struct Investor {
        bool isRegistered;
        bytes32 documentsHash;
        bool isApproved;
    }

    struct Investment {
        uint256 amount;
        uint256 startTime;
        uint256 endTime;
        bool isWithdrawn;
        bool isApproved;
    }

    struct AuditRecord {
        address auditor;
        uint8 specialization;
        string auditIpfsHash;
        bool isApproved;
    }

    mapping(address => Developer) public developers;
    mapping(address => Investor) public investors;
    mapping(string => Project) public projects;
    mapping(address => Auditor) public auditors;
    mapping(string => AuditRecord[]) public auditRecords;

    event DeveloperRegistered(address developer);
    event ProjectCreated(string projectId);
    event InvestmentMade(string projectId, address investor, uint256 amount);
    event InvestmentAudited(string projectId, address investor, bool isApproved);
    event FundsWithdrawn(string projectId, address investor, uint256 amount);
    event InvestorRegistered(address investor);

    constructor(uint256 initialSupply, uint _tokenPrice) 
        ERC20("CarbonToken", "CTK")
        Ownable(msg.sender)
    {
        tokenPrice = _tokenPrice;
        _mint(msg.sender, initialSupply);
    }

    function mint() public payable {
        require(msg.value > 0, "No ETH sent");
        uint256 amount = msg.value * tokenPrice;
        _mint(msg.sender, amount);
    }

    function registerDeveloper() external {
        require(!developers[msg.sender].isRegistered, "Developer already registered");
        developers[msg.sender].isRegistered = true;
        emit DeveloperRegistered(msg.sender);
    }

    function createProject(string memory projectId, bytes32 documentsHash) external {
        require(developers[msg.sender].isRegistered, "Developer not registered");
        require(!developers[msg.sender].projectIds[projectId], "Project ID already exists");

        Project storage project = projects[projectId];
        project.isActive = true;
        project.lastAuditTime = block.timestamp;
        project.developerAddress = msg.sender;
        project.documentsHash = documentsHash;
        developers[msg.sender].projectIds[projectId] = true;

        emit ProjectCreated(projectId);
    }

    function registerInvestor(bytes32 documentsHash) external {
        require(!investors[msg.sender].isRegistered, "Investor already registered");
        investors[msg.sender].isRegistered = true;
        investors[msg.sender].documentsHash = documentsHash;
        emit InvestorRegistered(msg.sender);
    }

    function registerAuditor() external {
        require(!auditors[msg.sender].isRegistered, "Auditor already registered");
        auditors[msg.sender].isRegistered = true;
    }

    function addAuditorSpecialization(uint8 specialization) external {
        require(auditors[msg.sender].isRegistered, "Auditor not registered");
        require(!auditors[msg.sender].specializations[specialization], "Specialization already added");
        auditors[msg.sender].specializations[specialization] = true;
    }

    function investInProject(string memory projectId, uint256 amount, uint256 duration) external {
        require(investors[msg.sender].isRegistered, "Investor not registered");
        require(projects[projectId].isActive, "Project is not active");

        Investment storage investment = projects[projectId].investments[msg.sender];
        require(block.timestamp >= investment.endTime, "Previous investment period is still active");

        _transfer(msg.sender, address(this), amount);
        investment.amount += amount;
        investment.startTime = block.timestamp;
        investment.endTime = block.timestamp + duration;
        investment.isWithdrawn = false;
        investment.isApproved = false;
        projects[projectId].fundsReceived += amount;

        emit InvestmentMade(projectId, msg.sender, amount);
    }

    function auditInvestment(string memory projectId, address investor, uint8 specialization, string memory ipfsHash, bool isApproved) external {
        require(auditors[msg.sender].isRegistered, "Auditor not registered");
        require(auditors[msg.sender].specializations[specialization], "Not authorized to audit");
        require(projects[projectId].isActive, "Project is not active");

        Investment storage investment = projects[projectId].investments[investor];
        require(investment.amount > 0, "No investment found for this investor");

        investment.isApproved = isApproved;

        auditRecords[projectId].push(AuditRecord({
            auditor: msg.sender,
            specialization: specialization,
            auditIpfsHash: ipfsHash,
            isApproved: isApproved
        }));

        emit InvestmentAudited(projectId, investor, isApproved);
    }

    function withdrawFunds(string memory projectId, address investor) external {
        Project storage project = projects[projectId];
        require(project.developerAddress == msg.sender, "Caller is not the owner of the project");

        Investment storage investment = project.investments[investor];
        require(investment.isApproved, "Investment is not approved for withdrawal");
        require(!investment.isWithdrawn, "Investment funds already withdrawn");

        uint256 amount = investment.amount;
        require(amount > 0, "No funds available for withdrawal");

        investment.isWithdrawn = true;
        project.fundsReceived -= amount;

        uint256 ethAmount = amount / tokenPrice;
        require(address(this).balance >= ethAmount, "Insufficient ETH in contract");

        payable(msg.sender).transfer(ethAmount);

        emit FundsWithdrawn(projectId, investor, ethAmount);
    }

    receive() external payable { }
}
