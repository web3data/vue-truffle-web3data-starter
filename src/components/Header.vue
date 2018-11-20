<template>
  <div class="header">
    <div class="logo">
      <img src="../../static/placeholder-logo-2.png">
    </div>
    <!-- TODO: This will display loading at first -->
    <div class="address">
      <img class="account-image" src="../../static/profile.svg">
      <p >{{ acct }}</p>
      <img @click="toggled = !toggled" :class="{rotate: toggled}" src="../../static/drop_down.svg" alt="">
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      toggled: false
    }
  },
  computed: {
    ...mapGetters(['metamask', 'account']),
    acct() {
      return this.metamask && this.account ? this.account : 'No account'
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
@import '../scss/main.scss'
.header
  width: 100%
  height: 7vh
  display: flex
  background-color: $white
  justify-content: space-between
  position: relative
  .logo
    img
      // max-width: 100%;
      max-height: 100%
  .address
    display: grid
    grid-template-columns: 20% 70% 14px
    background-color: gainsboro
    position: absolute
    right: 40px
    top: 10px
    width: 172px
    padding: 10px
    border-radius: 30px
    align-items: center
    justify-items: center
    p
      color: #0e1c36
      font-size: 1vw
      width: 100%
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      text-align: center
    img
      width: 100%
    .account-image
      padding: 0 5px
      box-sizing: border-box
.rotate
  transform: rotate(180deg)

</style>
