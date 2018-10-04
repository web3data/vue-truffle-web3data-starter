<template>
  <div class="container">
    <div class="intro-header">
      <h1>Welcome!</h1>
    </div>
    <div class="intro-body">
      <div class="step one">
        <div class="num">
          <span>1</span>
        </div>
        <div class="content">
          Go to
          <a href="https://amberdata.io/authenticate?section=signup" _target="blank">amberdata.io</a>
          to obtain your api key: <br><br>
          <img src="../../static/sigin.gif">
        </div>
      </div>
      <div class="step two">
        <div class="num">
          <span>2</span>
        </div>
        <div class="content">
          Using your shiny new api key 🗝️✨ create
          a <code>web3data</code> instance:<br><br>
          <img src="../../static/web3data_example.svg">
        </div>
      </div>
      <div class="step three">
        <div class="num">
          <span>3</span>
        </div>
        <div class="content">
          Finally, you're almost ready to rock and roll.<br>
          Deploy your contract and then it's time to get some
          live data from rinkeby, using <code>web3data</code>. <br><br>Hit 'Test' to continue...
        </div>
      </div>
    </div>
    <div class="btn">
      <router-link to="/example">TEST</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang="scss" scoped>
$font-size: 3vw;
$bg-color-main: #fafffd;
// $color-primary: ;
// $color-secondary: ;
// $color-ternary: ;

.container {
  background-color: $bg-color-main;
  min-height: 100vh;
  .intro-header {
    display: flex;
    height: 50vh;
    h1 {
      margin: auto;
      font-size: 5vw;
    }
  }
  .intro-body {
    display: grid;
    padding: 0 24px;
    @media (min-width: 500px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 700px) {
      grid-template-columns: repeat(3, 1fr);
    }
    .step {
      height: 40vh;
      .num {
        span {
          display: block;
          font-size: $font-size;
          height: $font-size;
          width: $font-size;
          text-align: center;
          border-radius: 8px;
        }
      }
      .content {
        font-size: 1.25vw;
        padding: 20px;
        padding-left: 3vw;
        a {
          text-decoration: none;
          color: inherit;
          border-bottom: solid 1.75px rgb(221, 221, 221);
        }
        a:hover {
          border-bottom: solid 1.75px black;
        }
        img {
          width: 100%;
        }
        // width: auto;
        // height: -webkit-fill-available;
      }
    }
  }
  .btn {
    text-align: end;
    margin-right: 5%;
    a {
      text-decoration: none;
      color: black;
      font-size: 1.25vw;
      padding: 10px 20px;
      border-color: rgb(221, 221, 221);
      border-style: solid;
      border-width: 1px;
      transition: 0.3s;
    }
    a:hover {
      border: solid 1px black;
    }
  }
}
</style>
