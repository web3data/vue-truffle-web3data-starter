step-content<template>
  <div class="home">
    <div class="grid header-image">
      <img src="static/beaker@2x.png" alt="">
    </div>
    <div class="grid title">
      <h1>dApp Starter 1.0</h1>
    </div>
    <div class="grid logos">
      <div class="subgrid">
        <img src="static/vue.png" alt="">
        <h3>+</h3>
        <img src="static/truffle.png" alt="">
        <h3>+</h3>
        <img src="static/web3.png" alt="">
        <h3>+</h3>
        <img src="static/web3data_logo_bug_color_v1.svg" alt="">
      </div>
    </div>
    <div class="grid subtitle">
      <p>
        Get started with the latest &amp; greatest in Ethereum dApp development workflows!<br>
        This repository is your shortcut past the configuration, setup &amp; main painpoints
        of dApp development. Easy as these steps:
      </p>
    </div>
    <div class="grid steps">
      <div class="subgrid">
        <Step color="d8fbd4">
          <h2 slot="header">1. Get Started</h2>
          <p>First setup an account to get fast &amp; easy contract data, via web3data API. Go to <a class="clickable" target="_blank" href="https://amberdata.io/">Amberdata.io</a> to obtain your api key:</p>
          <img src="../../static/sigin.gif" slot="image">
        </Step>
        <Step color="ded4fb">
          <h2 slot="header">2. Connect dApp Starter</h2>
          <p>Using your shiny new api key 🗝️✨ create a web3data instance:</p>
          <img src="../../static/web3data_example.svg" slot="image">
        </Step>
        <Step color="fbe8d4">
          <h2 slot="header">3. Test Locally</h2>
          <p>Finally, you're almost ready to rock and roll. Deploy your contract and then it's time to get some	live data from rinkeby, using <a class="clickable" href="https://github.com/web3data/web3data-js"><code>web3data-js</code></a>: </p>
          <router-link class="testButton clickable" to="/example">Try it now!</router-link>
        </Step>
      </div>
    </div>
  </div>
</template>
<script>
import Step from '@/components/Step'

export default {
  components: {
    Step
  },
  data() {
    return {}
  },
  props: [],
  computed: {},
  methods: {}
}
</script>
<style lang="sass" scoped>
.home
  display: grid
  height: 93vh 
  // height: 100vh
  // min-height: 960px
  margin-top: -68px
  grid-template-rows: 15% 5% 15% 10% 1fr
  justify-items: center
  align-items: center
  text-align: center
  a
    color: black
  .header-image
    align-self: baseline
    img
      width: 55%
  .title
    h1
      margin: 0
      color: #6BBCD6
      font-size: 36px
      font-weight: normal
  .logos
    width: 35%
    img
      width: 100%
    .subgrid
      display: grid
      grid-template-columns: 1fr 45px 1fr 45px 1fr 45px 1fr
      align-items: center
      justify-items: center
  .subtitle
    width: 50%
    p
      font-size: 19px
      text-align: center
  .steps
    .subgrid
      display: grid
      grid-template-columns: repeat(3, 1fr)
      justify-items: center
      grid-column-gap: 40px
      padding: 0 10%
.testButton
    margin-top: 195px
    color: black
    text-decoration: none
    align-self: center
    justify-self: center
    padding: 7.75px 61.4px
    border-radius: 17px
    background-color: #FDC991
    box-shadow: 1px 2px 14px 1px #69696959
    &:hover
      box-shadow: 2px 3px 14px 3px #69696959
.clickable
  pointer-events: all

</style>
