let ethers = require("ethers")
let url = "HTTP://127.0.0.1:7545"

let customHttpProvider = new ethers.providers.JsonRpcProvider(url)
customHttpProvider.getBlockNumber()
  .then((result) => {
    console.log(`Current block number: ${result}`)
  })

