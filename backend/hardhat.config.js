require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        "ddf08d7f860763045b4703efc5bf963bf8e61b0482bf7856e109d19ac7f769db",
      ],
    },
  },
};
