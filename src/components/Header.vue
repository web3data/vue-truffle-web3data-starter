<template>
  <div class="header">
    <div class="logo">
      <img src="../../static/logo.svg">
    </div>
    <!-- TODO: This will display loading at first -->
    <AccountPill :address="acct"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AccountPill from '@/components/AccountPill'

export default {
  name: 'Header',
  components: {
    AccountPill
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['metamask', 'account']),
    acct() {
      if (this.metamask) {
        return this.account
      }
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
  min-height: 50px
  .logo
    img
      width: 200px
      position: absolute
      left: 40px
      top: 10px
.rotate
  transform: rotate(180deg)

</style>
