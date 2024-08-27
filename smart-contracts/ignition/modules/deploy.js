const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

async function main() {
  const contractName = process.env.CONTRACT_NAME;

  if (!contractName) {
    console.log("please provide a contract name");
    return;
  }

  console.log("deploying contract " + contractName);

  const contractFactory = await ethers.getContractFactory(contractName);

  const contract = await contractFactory.deploy(1000,10);  // constructor arguments

  await contract.waitForDeployment();

  console.log("Deployment address: " + (await contract.getAddress()));

  const contractData = {
    address: await contract.getAddress(),
    abi: contract.interface.format("json"),
  };

  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "src/abi",
    `${contractName}.json`
  );

  // Write the contract data (address and ABI) to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(contractData, null, 2), "utf-8");
}

main()
  .then(() => process.exit(0))
  .catch((error) => console.error(error));
