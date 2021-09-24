var HDWalletProvider = require("@truffle/hdwallet-provider");
//var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
//var mnemonic = "hybrid voyage range jewel draw magnet cake trap turn wisdom resist chalk";
//var mnemonic = "cloth north resource purity differ cactus rose forget rug invite parrot knock";
//var mnemonic = "educate track siege mystery crawl capital motion caution sock mechanic reject abandon"
var mnemonic = "amused forget miss shell live magic jump trash action obey example keep";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      network_id: '*',
      gas: 6721975
      //gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: "^0.5.17"
      //version: "^0.8.0"
    }
  }
};
