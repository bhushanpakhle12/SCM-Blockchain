require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        "aab861b3287df0fb1a5151cafe6e30222992d036a7b18ae49e4e76b70c4b2944",
      ],
    },
  },
};
