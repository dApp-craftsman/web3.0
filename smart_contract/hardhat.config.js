//https://eth-rinkeby.alchemyapi.io/v2/l7p8LGwqY88zaOGoMKQC-eqLg_O1dttX

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/l7p8LGwqY88zaOGoMKQC-eqLg_O1dttX",
      accounts: [
        "30e086f04b7b5e437560a95bf22019f49c5dd6d382769ad74f84a83895e5fe57",
      ],
    },
  },
};
