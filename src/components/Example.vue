<template>
  <div class="container">
    <div class="nav-back">
      <router-link to="/">&#9001; BACK</router-link>
    </div>
    <InputField :value="address" />
    <div class="example-selector">
      <div class="drop-down">
        <select v-model="options" :class="{'error-class': hasError}">
          <option disabled value="" v-if="hasError">Please select one</option>
          <option value="info">Info</option>
          <option value="stats">Statistics</option>
          <option value="logs">Logs</option>
          <option value="trans">Transactions</option>
        </select>
      </div>
      <div class="go-btn">
        <button @click="getResults" type="button" name="button">Go</button>
      </div>
    </div>
    <div class="results" :class="{'loading': isLoading}">
      <div v-if="isLoading">
        {{ results }}
      </div>
      <pre v-else >{{ results }}</pre>
    </div>
  </div>
</template>
<script>
import InputField from './InputField'
import { mapActions } from 'vuex'
const YAML = require('json-to-pretty-yaml')

export default {
  name: 'Example',
  components: {
    InputField
  },
  data() {
    return {
      address: '0x873029fead9cc9c05860557576ca1577f420a801', // example address
      results: '',
      options: '',
      hasError: false,
      isLoading: false
    }
  },
  props: [],
  computed: {},
  methods: {
    ...mapActions(['getAddress']),
    async getResults() {
      if (!this.options) {
        this.hasError = true
        console.log('error no option selected')
      } else {
        this.isLoading = true
        this.results = 'Loading...'
        this.hasError = false
        let results = await this.getAddress({
          query: this.options,
          address: this.address
        })
        this.isLoading = false
        this.results = YAML.stringify(results)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/main.scss';

.container {
  margin: 12vh 30% 0 30%;
  background-color: #fafffd;
  padding: 20px;
  box-sizing: border-box;
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
    pre {
      white-space: pre-wrap;
      word-break: break-word;
      line-height: 1.6;
    }
  }
}

.error-class {
  border-color: red;
}
.loading {
  text-align: center;
}
</style>
