require("@nomiclabs/hardhat-ethers")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: ["c9d1026ef32198e55ebb28d11e77199fd61815ed180cf3fcf59b6a28d0df4c6e"]
    }
  }
};
