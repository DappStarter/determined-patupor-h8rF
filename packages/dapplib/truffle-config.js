require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad idea arm bubble then'; 
let testAccounts = [
"0x353af06118e3f276737145ab0f1feba249ff92cabee8db8801abf1de6e9fdbe0",
"0xca588d6890566b5df19985e7451f512a284403927c715bba1ea3d835b379c8b4",
"0xeb848c7d2b4370dea1fbcae9762ba8322cc57bd5765e684c8dcfb049e85d3c99",
"0x2845556bc39d079f0d401175826cc0a22d4ee02cdd939ab3322dfd1be35aff33",
"0x13cff380bb1d111e2cb2115f6769eef8f8fea47c727f21f73670409b8a0ae6ae",
"0xfba16b78fddd7b8a567a6e0041233e6768f2e66040dc27c3a02db47e35934ab7",
"0x1733f4f35bdc11fb7b4937072417758cdb71ca133723b053ffa330093a29668e",
"0xd570673b685614d593dc509ad415a071a71f1bc71040f8c410819db77f98c492",
"0x572186a7df4ffcfa74905b89e76bc3a11289941d019427df6e8af98410c47bbc",
"0x1a055e1ac91c8a1fd1e9c42969bfd5efde8767417ee6055002028d2c8cbbc111"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


