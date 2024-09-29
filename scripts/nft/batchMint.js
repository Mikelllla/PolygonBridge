const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const MetaTokenNFTFactory = await hre.ethers.getContractFactory(
    "MetaTokenNFT"
  );
  const metaTokenNft = await MetaTokenNFTFactory.attach(
    process.env.CONTRACT_ADDRESS
  );

  const mintTx = await metaTokenNft.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await metaTokenNft.balanceOf(process.env.WALLET_ADDRESS)) +
      " MetaToken NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await metaTokenNft.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
