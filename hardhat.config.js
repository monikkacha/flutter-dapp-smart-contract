require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "227098c890ed489c8c0600f6b526c6b6";
const ROPSTEN_PRIVATE_KEY =
  "9e44b839acef2e5e16ba9d62b0190edc93e6cdfd748d6d4c5ffa6789a2f80e73";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
