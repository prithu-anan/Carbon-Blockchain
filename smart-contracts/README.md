# Hardhat Project Setup Guide

This guide will help you set up the Hardhat environment for our project. Follow the steps below to install the necessary dependencies and start working with Hardhat.

## Prerequisites

Before getting started, ensure that you have the following installed on your machine:

- **Node.js** (version 16.x or later)
- **Yarn** (version 1.x or later)

If you don't have Yarn installed, you can install it globally by running:

```bash
npm install -g yarn
```
## Install dependencies

```bash
yarn install
```

## Setup Environment variables

```bash
SEPOLIA_RPC_URL="https://eth-sepolia.g.alchemy.com/v2/gyfGaBjotyR770lY6atYSsb-ZwDyiS13"
SEPOLIA_PRIVATE_KEY="YOUR_PRIVATE_KEY"
```

## Compile the contracts

```bash
yarn hardhat compile
```

## Deploy the contract UPDATED

```bash
$env:CONTRACT_NAME="contract-to-be-deployed" ; yarn deploy
```
## If the contract has parameterized contructor you need to put the arguments in deploy.js file

```bash
const contract = await contractFactory.deploy(constructor-arguments);

```
