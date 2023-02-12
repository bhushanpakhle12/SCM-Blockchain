const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("SCM Contract", function () {
  let scm, deployer, buyer
  beforeEach(async () => {
    [deployer, buyer] = await ethers.getSigners();
    console.log(`Deployer: ${deployer.address} | Buyer: ${buyer.address}`);

    const SCM = await ethers.getContractFactory("SCM");
    scm = await SCM.deploy()
  })

  describe("Upload Products", () => {
    let transaction, identifier

    it("Upload Products", async () => {
      transaction = await scm.connect(deployer).uploadProduct(
        "Bottle",
        new Date().getTime(),
        new Date().getTime() + 1000000000,
        "123/23/56",
        542367,
        ethers.utils.parseEther("1"),
        100
      )

      transaction.wait()

      identifier = transaction.data

      const transactionReceipt = await transaction.wait()

      // console.log(`Transaction: ${transaction.data}`)
      console.log(transaction)
    })

    it("Buys Products", async () => {
      transaction = await scm.buyProduct(identifier, 0, { value: ethers.utils.parseEther("1") })

      expect(await scm.connect(deployer).getProductQuantity(identifier)).to.be(99);
    })
  })

})

// 0x48ae837900000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000001864000832400000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000006426f74746c650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001268747470733a2f2f676f6f676c652e636f6d0000000000000000000000000000