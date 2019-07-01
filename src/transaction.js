
const config = require('./config')
const transaction = {
    from: config.address,
    privateKey: config.privateKey,
    nonce: 999999,
    quota: 1000000,
    chainId: '0xca812def6446350c7e8d',
    version: 2,
    validUntilBlock: 999999,
    value: '0x0',
}

module.exports = transaction