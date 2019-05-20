const HelloWorld = require('../build/contracts/HelloWorld.json')

const config = require('./config')
const sdk = require('./sdk')

const contracts = {}
contracts.HelloWorld = new sdk.base.Contract(HelloWorld.abi, HelloWorld.networks.appchain0xca812def6446350c7e8d.address)


module.exports = contracts