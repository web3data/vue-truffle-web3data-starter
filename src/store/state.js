import config from './config.json'
import abi from '../../build/contracts/Example.json'

const constants = {
  apiKey: '9bb279c9b9444bf0a94ead7a3768409a',
  blockchainId: '1b3f7a72b3e99c13', //ethereum-rinkeby
  testingAccount: '0xd797d5784f43de300ec0d6bc34fc86023c5d71ce',
  contractAddress: config.address,
  rpcUrl: `https://rinkeby.infura.io`
}

export default {
  retried: false,
  metamask: false,
  account: null,
  connected: false,
  Contract: null,
  abi,
  constants
}
