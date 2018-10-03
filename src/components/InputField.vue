<template>
  <div class="input-field">
    <input :value="value">
  </div>
</template>
<script>
export default {
  name: 'InputField',
  props: ['value']
}
</script>
<style lang="scss" scoped>
@import '../scss/main.scss';
.input-field {
  input {
    width: 100%;
    border-radius: $border-radius;
    background-color: #d3d3d35c;
    padding: 10px;
    border: 0;
    box-sizing: border-box;
    text-align: center;
    transition: 0.3s;
    &:focus {
      box-shadow: inset 0 0 0 1px black;
    }
  }
}
</style>
