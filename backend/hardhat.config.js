require("@nomiclabs/hardhat-ethers")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: ["819e6393e5916df1f102ee885e2fb71720e72cc230ba53e6bbaabca9f7ed0b03"]
    }
  }
};
