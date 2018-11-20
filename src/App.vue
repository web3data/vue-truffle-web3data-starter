<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from './components/Header.vue'

export default {
  name: 'App',

  components: {
    Header
  },

  methods: {
    ...mapActions(['connect'])
  },

  mounted() {
    this.connect()
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

body {
  background: $white;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #616161;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}
</style>
