import { ethers } from 'ethers';
import contractData from './abi/CarbonOffset.json'; 

class CarbonOffset {

  constructor() {
    this.initializeContract();
  }

  async initializeContract() {
    try {
      // Ensure MetaMask is available
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed.");
      }

      // Initialize provider, signer, and contract
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      // Retrieve contract address and ABI from contractData
      const contractAddress = contractData.address;
      const contractABI = contractData.abi;

      // Create the contract instance
      this.contract = new ethers.Contract(contractAddress, contractABI, signer);

    } catch (error) {
      console.error("Failed to initialize contract:", error);
    }
  }

  async registerDeveloper() {   // call this function to register a developer
    try {
      // Ensure the contract is initialized
      if (!this.contract) {
        throw new Error("Contract is not initialized.");
      }

      // Call the smart contract's registerDeveloper method
      const transaction = await this.contract.registerDeveloper();

      // Wait for the transaction to be confirmed
    //   await transaction.wait();

    console.log("Metamask says ,Transaction sent: "+transaction) ;

      return {
        success: true,
        message: 'Developer registered successfully',
      };
    } catch (error) {
      console.error("Error in registerDeveloper in CarbonOffset", error);
      return {
        success: false,
        message: 'Failed to register developer',
      };
    }
  }
}

export default CarbonOffset;
