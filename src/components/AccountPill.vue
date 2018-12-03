<template>
  <div class="account-pill">
    <img class="account-image" src="../../static/profile.svg">
    <p><a :class="{clickable: address}" target="_blank" :href="link">{{ acct }}</a></p>
  </div>
</template>
<script>
export default {
  name: 'AccountPill',
  data() {
    return {}
  },
  props: ['address'],
  computed: {
    link() {
      return this.address ? `http://wb3.io/${this.address}` : ''
    },
    acct() {
      return this.address ? this.address : 'Connect Account'
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
@import '../scss/main.scss'

.account-pill
  display: grid
  grid-template-columns: 20% 70%
  background-color: #EFEFEF
  width: 160px
  border-radius: 30px
  align-items: center
  justify-items: center
  p
    color: $black
    font-size: 14px
    width: 100%
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    text-align: center
    a
      text-decoration: none
      color: $black
      pointer-events: none
  img
    width: 28px
  .clickable
    pointer-events: inherit
</style>
