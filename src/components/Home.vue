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
        <img src="static/android-chrome-512x512.png" alt="">
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
        <Step color="d8fbd4" step="step-1"/>
        <div class="step step-1 step-content">
          <h2>1. Get Started</h2>
          <p>First setup an account to get fast &amp; easy contract data, via web3data API.
            <br>
            Go to amberdata.io to obtain your api key:</p>
          <img src="../../static/sigin.gif">
        </div>
        <Step color="ded4fb" step="step-2"/>
        <div class="step step-2 step-content">
          <h2>2. Connect dApp Starter</h2>
          <p>Using your shiny new api key 🗝️✨ create a web3data instance:</p>
          <img src="../../static/web3data_example.svg">
        </div>
        <Step color="fbe8d4" step="step-3"/>
        <div class="step step-3 step-content">
          <h2>3. Test Locally</h2>
          <p>First setup an account to get fast &amp; easy contract data, via web3data API.<br>
            Go to amberdata.io to obtain your api key:</p>
          <router-link to="/example">Try it now!</router-link>
        </div>
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
  grid-template-rows: 15% 5% 15% 10% 1fr
  justify-items: center
  align-items: center
  text-align: center
  .header-image
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
      grid-template-columns: 1fr 1fr 1fr
      justify-items: center
      .step
        width: 75%
      .step-content
        width: 63%
        text-align: left
        pointer-events: none
        z-index: 1
        display: grid
        grid-template-rows: auto 1fr 70%
        img
          width: 100%
          align-self: center

      .step-1
        grid-column-start: 1
        grid-row-start: 1
      .step-2
        grid-column-start: 2
        grid-row-start: 1
      .step-3
        grid-column-start: 3
        grid-row-start: 1
        grid-template-rows: auto 1fr 1fr
        a
          color: black
          text-decoration: none
          align-self: center
          justify-self: center
          padding: 7.75px 61.4px
          border-radius: 17px
          background-color: #ff915f
          box-shadow: 1px 2px 14px 1px #69696959
          pointer-events: all
          &:hover
            box-shadow: 2px 3px 14px 3px #69696959

</style>
