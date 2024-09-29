const hre = require("hardhat");

async function main() {
  const MetaTokenNFT = await hre.ethers.getContractFactory("MetaTokenNFT");

  const metaTokenNft = await MetaTokenNFT.deploy();

  console.log("MetaToken NFT deployed to: ", metaTokenNft.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
