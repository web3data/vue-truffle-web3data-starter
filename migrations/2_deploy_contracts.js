const fs = require('fs')
const path = require('path')
const cfg = require('../src/store/config.json')

const Example = artifacts.require('./Example.sol')

module.exports = async deployer => {
	
  // Deploy main
  const example = await deployer.deploy(Example)
  console.log('Contract address:', example.address)

  // update to use deployed address
  cfg.address = example.address
  
  await fs.writeFileSync(path.join(__dirname, '../src/store/config.json'), JSON.stringify(cfg), 'utf8')
}
