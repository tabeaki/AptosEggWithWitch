import 'dotenv/config';
import "@nomiclabs/hardhat-waffle";
import type { HardhatUserConfig } from "hardhat/config";
require('./scripts/tasks');
import { getEnvVariable } from "./scripts/helpers";
import "@nomiclabs/hardhat-etherscan";
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");


const config: HardhatUserConfig = {

  defaultNetwork: "astar",
  solidity: "0.8.9",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
      accounts: { mnemonic: "test test test test test test test test test test test junk" }
    },
    astar: {
      url: "https://rpc.astar.network:8545",
      chainId: 592,
      accounts: [getEnvVariable("ACCOUNT_PRIVATE_KEY")],
    },
    shibuya: {
      url: "https://rpc.shibuya.astar.network:8545",
      chainId: 81,
      accounts: [getEnvVariable("ACCOUNT_PRIVATE_KEY")],
    },
    polygon: {
      url: "https://polygon-rpc.com",
      chainId: 137,
      accounts: [getEnvVariable("ACCOUNT_PRIVATE_KEY")],
    }
  }
};

export default config;
