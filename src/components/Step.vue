<template>
  <div class="card">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 236 247">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Group" class="cls-1">
            <rect id="Rectangle-4" class="cls-2" width="236" height="247" rx="22.5"/>
            <path :style="{fill: color}" d="M213.5,0H22.5A22.5,22.5,0,0,0,0,22.5V141.41c18,10.49,47.05,9.76,94-13.23,75.89-37.16,120.21-26.12,142-30V22.5A22.5,22.5,0,0,0,213.5,0Z"/>
          </g>
        </g>
      </g>
    </svg>
    <div class="content">
      <slot name="header"/>
      <slot/>
      <slot name="image"/>

      <!-- <h2>{{ title }}</h2>
      <div class="content-text" v-html="text"/>
      <img :src="imgSrc"> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  data() {
    return {}
  },
  props: ['title', 'text', 'imgSrc', 'color'],
  computed: {},
  methods: {}
}
</script>
<style lang="sass" scoped>
@import '../scss/main.scss'
.card
  border-radius: 48px
  box-shadow: 0px 2px 12px -1px #b9b9b938
  position: relative
  transition: all 220ms ease-in-out
  color: $black
  svg
    z-index: -1
    fill: $white
    position: absolute
    top: 0
    left: 0
  .content
    text-align: left
    pointer-events: none
    z-index: 1
    display: grid
    grid-template-rows: 50px 100px auto
    padding: 40px
    img
      width: 100%
      align-self: center
    h2
      margin: 0
    .content-text
      a
        text-decoration: none
        color: $black
        pointer-events: all
  &:hover
    box-shadow: 0px 22px 24px 10px #b9b9b938

</style>
