require("@nomicfoundation/hardhat-toolbox")
import fs from "fs"

const metaMaskKey = fs.readFileSync('.Metamask').toString

const alchemyMumbaiId = "OkoP54k0IbjC18MZsgxEqTYBaJUPOQWE"
const alchemyGoerlitId = "XOmAdIOj8kcLV4a5s2O2-pUBgYf0I34L"


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    harhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${alchemyMumbaiId}`,
      accounts: [metaMaskKey]
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${alchemyGoerlitId}`,
      accounts: [metaMaskKey]
    }
  },
  solidity: "0.8.18",
}
