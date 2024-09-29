# Overview

---
This project involves the creation and deployment of an ERC721A-compliant NFT (Non-Fungible Token)
contract named MetaTokenNFT on Goerli Ethereum testnet then approve and deposit the NFT to Polygon
Mumbai using their fxPortal bridge. The NFTs represent a collection of futuristic electric car with glowing accents, flying through a neon-lit city, each featuring
a distinct artistic style and angle.

## Getting Started

---
### Prerequisites

- Install [nvm](http://nvm.sh).
- Use **Node.js version 16** or higher.
```shell
nvm install 16
nvm use 16
```

## Project Initialization

---
```shell
git clone <this-repo-url>
```
```shell
cd <the-repo>
```
```shell
npm install
```

## Configuration

---
### Deploy contract
First compile the contract using `npx hardhat compile` then deploy the contract onto
Goerli Ethereum testnet using the following command:
```shell
npx hardhat run --network goerli scripts/nft/deploy.js
```

Then, if everything is set up right, you get a console response like this:
```
MetaToken NFT deployed to: <CONTRACT-ADDRESS>
```
### Batch mint NFTs
To batch mint NFTs to the deployed contract, update the contract address in the
`.env.example.` file and rename the file to `.env`. Also, subsequently update
the required variables in the `.env` file.  

Then run the `batchMint.js` script with this hardhat command:
```shell
npx hardhat run --network goerli scripts/nft/batchMint.js
```
The response log will look like:
```
Successfully minted: <number> MetaToken NFTs to <WALLET-ADDRESS>
```
### Approve transfer and deposit the NFTs to Polygon bridge
Pass in the Polygon Mumbai bridged address of your contract to `BRIDGE-ADDRESS` in
`.env`, then run the `approveTransfer.js` script with hardhat:
```shell
npx hardhat run --network goerli scripts/nft/approveTransfer.js
```
The response should look like this:
```
NFT approval confirmed
NFT deposited on Polygon Mumbai
```


## Author

David Dada 
[@DadaAyo5](https://twitter.com/DadaAyo5)
# PolygonBridge
