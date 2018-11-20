<template>
  <svg :class="step" class="step" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 236 247">
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <g id="Group" class="cls-1">
          <rect id="Rectangle-4" class="cls-2" width="236" height="247" rx="22.5"/>
          <path :style="{fill: color}" d="M213.5,0H22.5A22.5,22.5,0,0,0,0,22.5V141.41c18,10.49,47.05,9.76,94-13.23,75.89-37.16,120.21-26.12,142-30V22.5A22.5,22.5,0,0,0,213.5,0Z"/>
        </g>
      </g>
    </g>
  </svg>
</template>
<script>
export default {
  name: 'Step',
  data() {
    return {}
  },
  props: ['step', 'color'],
  computed: {},
  methods: {}
}
</script>
<style lang="sass" scoped>
svg
  width: 100%
  .cls-2
    fill: #fff
  filter: drop-shadow(0 2px 24px rgba(0,0,0,0.17))
  &:hover
    filter: drop-shadow(0 22px 24px rgba(0,0,0,0.17))
</style>
