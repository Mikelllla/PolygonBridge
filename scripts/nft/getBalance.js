const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const MetaTokenNFT = await hre.ethers.getContractFactory("MetaTokenNFT");

  const metaTokenNft = await MetaTokenNFT.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await metaTokenNft.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
