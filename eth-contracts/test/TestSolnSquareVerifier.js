// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
var solnSquareContract = artifacts.require('SolnSquareVerifier');
var verifierContract = artifacts.require("Verifier.sol");
var json = require("../../zokrates/code/square/proof.json");

contract('Verifier', accounts => {
//contract('SolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];
    const symbol = "IRET721";
    const name = "IndianRealEstateToken721";
    //const uri = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";



    describe('Test verification', function () {
        beforeEach(async function () {
	    try{
            const verifier = await verifierContract.new({from: account_one});
            this.contract = await solnSquareContract.new(verifier.address, name, symbol, {from: account_one});
		}
		catch(e){
			console.log(e);
		}

        });

  //});


        it('mintERC721', async function () {
		let revert = false;

	try{
          await this.contract.mintNewNFT(account_three,1,json.proof.a,json.proof.a_p,json.proof.b,json.proof.b_p,json.proof.c,json.proof.c_p,json.proof.h,json.proof.k,json.inputs,{from:account_one});
          }
	catch(e){
		revert = true;
		console.log(e);
	}
	assert.equal(revert, false,  'Cannot mint token');
	});



	   it('Mint token with same solution', async function () {
            await this.contract.mintNewNFT(account_three,
                1,
                json.proof.a,
                json.proof.a_p,
                json.proof.b,
                json.proof.b_p,
                json.proof.c,
                json.proof.c_p,
                json.proof.h,
                json.proof.k,
                json.inputs,
                {from: account_one});
            //Second time miniting again with the same solution
            let revert = false;
            try {
                await this.contract.mintVerified(account_three,
                    1,
                    json.proof.a,
                    json.proof.a_p,
                    json.proof.b,
                    json.proof.b_p,
                    json.proof.c,
                    json.proof.c_p,
                    json.proof.h,
                    json.proof.k,
                    json.inputs,
                    {from: account_one});
            } catch (e) {
                revert = true;
            }
            assert.equal(revert, true, "Solution already exists");
      });
    });

});
