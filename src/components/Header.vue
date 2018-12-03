<template>
  <div class="header">
    <div class="logo">
      LOGO
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
  padding: 5px 40px
  display: flex
  background-color: $white
  justify-content: space-between
  max-height: 48px
  .logo
    display: flex
    font-weight: bold
    text-align: center
    justify-content: center
    align-content: center
    padding: 7px
    border-radius: 3px
    width: 100px
    background-color: #d8d8d8
</style>
