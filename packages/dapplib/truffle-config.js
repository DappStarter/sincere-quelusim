require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note shift protect hockey process surge surround'; 
let testAccounts = [
"0x79080b1cdceaa59bac05565fa282a002a6d0e28e61f91bdbac8e872319df1178",
"0xd15eaefaab4a4c61a0123fc2caeae9a3ae319132ef24d234b77f7df9df66f2e0",
"0x0d5285a9fb7383dfc9c242a7d83093d983b8f2c1e17cebd0f51ef9316b1e7020",
"0xfc0a674b6960d035d3ccf6cbf6f2ad8b1486078788ea685dbd0127667571f32e",
"0x4a398687d8abffa0215f05fcd5e43670d502e1db95747a3af267c99ba1fb9fd6",
"0x954fa550dab8ae0a3cb1458ac40c7a1baef8cca77aaf3efa1b0b1ffd58dfc754",
"0xd831e021e06c149e4f5ed176665e690458a42b90c7e5b59c6eb75bbb09a0d986",
"0x8dd39f22ee8a536627be3466e087ef77ef20a2213b0a071119a89b5b430c8e87",
"0xb7d586bf25a93e92ad31577fe4afac0d24870e127a534e7f19d36f4a547ac503",
"0x32d5476233171ebb18727bef9ad7e350bfe57898e3009618c4e3c14564d2f547"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
