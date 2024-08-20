require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url : process.env.SEPOLIA_RPC_URL,
      accounts :[process.env.SUHAS_PRIVATE_KEY],
      chainId:11155111
    }
  }
};