
const hre = require("hardhat")


async function main() {
  const SCM = await hre.ethers.getContractFactory("SCM")
  const scm = await SCM.deploy()
  await scm.deployed()

  console.log("Deployed contract at ", scm.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1)
  })