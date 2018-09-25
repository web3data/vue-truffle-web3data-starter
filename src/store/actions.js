import axios from 'axios'
import BN from 'bignumber.js'
import Web3 from 'web3'

const getHeaderOptions = state => {
  return {
    headers: {
      'x-api-key': state.constants.opensea
    }
  }
}

export default {
  // Connect to either a known web3 provider, or fallback to rinkeby
  connect({ commit, state, dispatch }) {
    let web3Provider = false
    if (typeof window.web3 !== 'undefined') {
      web3Provider = window.web3.currentProvider
      commit('SET_METAMASK', true)
    } else if (!state.retried) {
      commit('SET_RETRY', true)
      setTimeout(() => {
        dispatch('connect')
      }, 1000)
    }
    if (state.retried && !web3Provider) {
      web3Provider = new Web3.providers.HttpProvider(state.constants.rpcUrl)
    }
    if (web3Provider) {
      window.web3 = new Web3(web3Provider)
      commit('SET_CONNECTED', true)
      dispatch('setAccountInterval')
      dispatch('mountContract')
    }
  },

  setAccountInterval({ dispatch }) {
    dispatch('checkAccount')
    setInterval(() => {
      dispatch('checkAccount')
    }, 3000)
  },

  checkAccount({ commit, state }) {
    window.web3.eth.getAccounts((error, accounts) => {
      if (error) console.error(error)
      if (state.account !== accounts[0]) {
        commit('USE_ACCOUNT', accounts[0])
      } else if (!accounts.length) {
        commit('USE_ACCOUNT', null)
      }
    })
  },

  mountContract({ dispatch, commit, state }) {
    if (state.connected) {
      commit('CLEAR_CONTRACT')
      commit('USE_CONTRACT', {
        contract: window.web3.eth.contract(state.abi.abi),
        address: state.constants.contractAddress
      })
      setTimeout(() => {
        dispatch('myExample')
      }, 500)
    } else {
      setTimeout(() => {
        dispatch('mountContract')
      }, 500)
    }
  }
}
