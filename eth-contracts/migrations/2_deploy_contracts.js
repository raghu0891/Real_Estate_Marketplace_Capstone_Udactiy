// migrating the appropriate contracts
//var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier");
var verifier = artifacts.require('./Verifier');

module.exports = function(deployer){
  //deployer.deploy(SquareVerifier);
  deployer.deploy(verifier)
	.then(() => {
		return deployer.deploy(SolnSquareVerifier, verifier.address, "IRET_ERC721MintableToken", "IRET_721");
	});
  //deployer.deploy(verifier);
  //deployer.deploy(SolnSquareVerifier, verifier.address, "IRET_ERC721MintableToken", "IRET_721");
};
