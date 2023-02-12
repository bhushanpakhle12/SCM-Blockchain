require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-ganache")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    // ganache: {
    //   url: "HTTP://127.0.0.1:7545",
    //   chainId: "31337",
    //   accounts: ["4a524a9a1f2ce35f6894300c24a04590e5616072f58a368f971f107bb3108186"]
    // }
  }
};
