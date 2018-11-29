import Web3Data from 'web3data-js'
import {fetch, Headers} from 'node-fetch'

let address_Y = '0x521db06bf657ed1d6c98553a70319a8ddbac75a3'

const w3d = new Web3Data({
  apiKey: process.env.API_KEY || 'UAK5e4cae75f484a9c8e3cd19a41b3fa977',
  blockchainId: '1c9c969065fcd1cf' /* Ethereum-mainnet */
})

w3d.addresses(address_Y).transactions().retrieve().then( (txs) => {
  console.log(txs)
})
