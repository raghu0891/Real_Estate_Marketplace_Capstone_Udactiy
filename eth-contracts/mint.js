/**
 * This file was based on OpenSea Tutorial:
 * https://docs.opensea.io/docs/1-structuring-your-smart-contract
 * https://github.com/ProjectOpenSea/opensea-creatures/blob/master/scripts/mint.js
 */
const HDWalletProvider = require("@truffle/hdwallet-provider")
const zokratesProof = [
//const proof = [
    require("../zokrates/code/square/proof1.json"),
    require("../zokrates/code/square/proof2.json"),
    require("../zokrates/code/square/proof3.json"),
    require("../zokrates/code/square/proof4.json"),
    require("../zokrates/code/square/proof5.json"),
    require("../zokrates/code/square/proof6.json"),
    require("../zokrates/code/square/proof7.json"),
    require("../zokrates/code/square/proof8.json"),
    require("../zokrates/code/square/proof9.json"),
    require("../zokrates/code/square/proof10.json")
];
const web3 = require('web3')
const OWNER_ADDRESS = "";
const CONTRACT_ADDRESS = "";
const NETWORK = 'rinkeby';
const MNEMONIC = "";
const INFURA_KEY = "";
if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}
const contract = require('../eth-contracts/build/contracts/SolnSquareVerifier.json'); 
const ABI = contract.abi;
async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`)
    const web3Instance = new web3(
        provider
    )
    if (CONTRACT_ADDRESS) {
        const r2token = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, { gasLimit: "45000000000000" })
        for (let i = 1; i < zokratesProof.length ; i++) {
            try {
                const proofs = Object.values(zokratesProof[i].proof);
		const a = zokratesProof[i].proof.a;
		const a_p = zokratesProof[i].proof.a_p;
		const b = zokratesProof[i].proof.b;
		const b_p = zokratesProof[i].proof.b_p;
		const c = zokratesProof[i].proof.c;
		const c_p = zokratesProof[i].proof.c_p;
		const h = zokratesProof[i].proof.h;
		const k = zokratesProof[i].proof.k;
                const inputs = zokratesProof[i].inputs;
                console.log("OWNER_ADDRESS "+ OWNER_ADDRESS + "\n");
                console.log("i "+i+ "\n");
                console.log("proofs "+ proofs+ "\n");
                console.log("inputs "+ inputs+ "\n");
                let tx2 = await r2token.methods.mintNewNFT(OWNER_ADDRESS, i, a, a_p, b, b_p, c, c_p, h, k, inputs).send({ "from": OWNER_ADDRESS, "gas":4712388, "gasPrice": 1000000000000 });
                console.log("Minted item. Transaction: " + tx2.transactionHash);
            } catch (e) {
                console.log(e);
            }
        }
    }
}
main()
