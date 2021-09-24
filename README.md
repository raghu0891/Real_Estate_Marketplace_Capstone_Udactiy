# Capstone: Real Estate Marketplace 

## Concept and explanation
Capstone Project for Blockchain NanoDegree, it requires to mint own tokens to represent the title of the properties. Before minting the token, the owner needs to verify she/she owns the property. A zk-SNARKs (zoKrates) mechanism will be used to create a verification system which can prove the ownership of title to the property without revealing that specific information on the property.
Once the token has been verified it will be placed on a blockchain market place (OpenSea) for others to purchase.

### Prerequisites (also for for generating the proof.json)

* [NodeJS](https://nodejs.org/en/download/current/) (The install will also include the npm node package manager)
* [ganache-cli](https://github.com/trufflesuite/ganache-cli) Fast Ethereum RPC client for testing and development
* [truffle](https://www.npmjs.com/package/truffle) Development environment, testing framework and asset pipeline for Ethereum
* MetaMask extension installed in your browser and few ethers on Rinkeby Test Network.
* [Docker](https://www.docker.com/) Enterprise Container Platform for High-Velocity Innovation

## Install
Clone this repository:

```
git clone https://github.com/raghu0891/Blockchain-Capstone-Real-Estate-Marketplace.git
cd eth-contracts
npm init
```
## Instantiate Ganache
1. Start a local ganache-cli instance in a different terminal
```
ganache-cli
```

## Compile
1. Compile the contracts
```
cd eth-contracts
truffle compile -all
```

## Running the tests
1. Run the test command
```
cd eth-contracts
truffle test
```
All 11 test should pass


2. Migrate the contract, before migrating the contract change the mnemonic to your wallet passphrase
```
cd eth-contracts
truffle migrate --reset
```


## Generating the proof from zokrates
1. Run the zokrates docker image
`docker run -v <path_to_zokrates_code>:/home/zokrates/code -ti zokrates/zokrates /bin/bash`

2. Compile the program 
```
cd code
~/zokrates compile -i square/square.code
```

3. Generate the trusted setup
`~/zokrates setup -s pghr13 -b libsnark`

4. Compute witness for your desired pair of number and it's square 
`~/zokrates compute-witness -a number square`

5. Generate proof
`~/zokrates generate-proof -s pghr13 -b libsnark`

6. Generate verifier.sol
`~/zokrates export-verifier -s pghr13	`


## Built With
```
Truffle v5.4.7 (core: 5.4.7)
Solidity v0.5.16 (solc-js)
Node v14.17.5
Web3.js v1.5.2
zokrates 0.7.6
```

## Special Thanks
* Thanks to Stackoverflow, gitter.im, other fellow course mates for sharing their helpful knowledge
* Udacity Blockchain ND very helpful mentors Alvaro and DanielA 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
