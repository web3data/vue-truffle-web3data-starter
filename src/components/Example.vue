<template>
  <div class="container">
    <div class="nav-back">
      <router-link to="/">&#9001; BACK</router-link>
    </div>
    <InputField :value="address" />
    <div class="example-selector">
      <div class="drop-down">
        <select>
          <option value="info">Info</option>
          <option value="statistics">Statistics</option>
          <option value="logs">Logs</option>
          <option value="transactions">Transactions</option>
        </select>
      </div>
      <div class="go-btn">
        <button @click="getResults" type="button" name="button">Go</button>
      </div>
    </div>
    <div class="results">
      <pre>{{ results }}</pre>
    </div>
  </div>
</template>
<script>
import InputField from './InputField'

export default {
  name: 'Example',
  components: {
    InputField
  },
  data() {
    return {
      address: '0x873029fead9cc9c05860557576ca1577f420a801', // example address
      results: {}
    }
  },
  props: [],
  computed: {},
  methods: {
    getResults() {
      this.results = ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/main.scss';

.container {
  margin: 12vh 30% 0 30%;
  background-color: #fafffd;
  .nav-back {
    a {
      text-decoration: none;
      color: black;
      font-size: 1.25vw;
      padding: 10px 20px;
      transition: 0.3s;
    }
  }
  .input-field {
    margin-top: 30px;
  }
  .example-selector {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    select {
      width: 100%;
      outline: none;
      width: 100%;
      outline: none;
      padding: 10px;
      border-radius: $border-radius 0 0 $border-radius;
      border-right: none;
      &,
      option {
        -webkit-appearance: none;
        -moz-appearance: none;
      }
      &::-ms-expand {
        display: none;
      }
    }
    .go-btn {
      button {
        color: $lightgrey;
        height: 100%;
        width: 100%;
        border: 1px solid;
        /* border-left: none; */
        background-color: white;
        border-color: $lightgrey;
        border-radius: 0 $border-radius $border-radius 0;
        outline: none;
        transition: 0.2s;
        cursor: pointer;
        &:hover {
          border-color: $black;
          color: $black;
        }
      }
    }
  }
  .results {
    margin-top: 40px;
    min-height: 60vh;
    background-color: #d3d3d35c;
    border-radius: $border-radius;
  }
}
</style>
