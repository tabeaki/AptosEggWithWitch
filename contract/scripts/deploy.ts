import hre from "hardhat";
import { getEnvVariable } from "./helpers";

async function main() {
  const AstarSignWitch = await hre.ethers.getContractFactory("AstarSignWitch");
  console.log('Deploying AstarSignWitch ERC721 token...');
  const token = await AstarSignWitch.deploy(getEnvVariable("CONTRACT_NAME"), getEnvVariable("CONTRACT_SYMBOL"), getEnvVariable("IPFS_JSON"));

  await token.deployed();
  console.log("AstarSignWitch deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });