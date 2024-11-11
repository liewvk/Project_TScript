import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "ltxhjI8dt0IH5y_XcfYUW_iJvWloQY2g";
 
// Replace this private key with your Goerli account private key.
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key.
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "184259097c8abd5962d0d9a61850165bd48f8804e64cf67f5cb3fb9214b390aa";
 
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: "UK1AZDMMKJXNHXTB53KHJUQB71E4BTIRV8",
  },
  networks: {
    goerli: {
      url:  `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
export default config;
