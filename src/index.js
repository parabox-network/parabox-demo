
const config = require('./config')
const sdk = require('./sdk')
const contracts = require('./contracts')



console.log("start")

const transaction = require('./transaction')

const addr = "0xb2f806996ad34e0a8d429bd5bdc9c54c178b14fe"

const transfer = () => {
    sdk.base.getBlockNumber()
        .then(current => {
            transaction.validUntilBlock = current + 99
            transaction.value = 100
            transaction.to = addr

            return sdk.base.sendTransaction(transaction)
        })
        .then(res => {
            return sdk.listeners.listenToTransactionReceipt(res.hash)
        })
        .then(receipt => {
            console.log(receipt)
            setTimeout(() => {
                getBalance()
            }, 5000);
        })
        .catch(err => {
            console.log(err)
        })
}

const getBalance = () => {
    sdk.base.getBalance(addr)
    .then(balance => {
        console.log(balance)
    })

}

const sayHi = () => {
    contracts.HelloWorld.methods
        .sayHi()
        .call()
        .then((res) => console.log('call method sayHi:\n', res))

}

const changeName = () => {
    sdk.base
        .getBlockNumber()
        .then(current => {
            transaction.validUntilBlock = current + 99
            transaction.value = 0
            transaction.to = "0xb2f806996ad34e0a8d429bd5bdc9c54c178b14fe"

            let num = Math.round(Math.random() * 100)
            let name = 'Parabox' + num
            console.log("name:", name)
            return contracts.HelloWorld.methods.changeName(name).send(transaction)
        })
        .then(res => {
            return sdk.listeners.listenToTransactionReceipt(res.hash)
        })
        .then(receipt => {
            // console.log(receipt)
            setTimeout(() => {
                sayHi()
            }, 5000);
        })
        .catch(console.log)

}

function run() {
    // transfer()
    // sayHi()
    changeName()

}

run()


