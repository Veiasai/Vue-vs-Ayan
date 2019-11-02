<template>
  <div id="app">
    <a-button type="primary">Button></a-button>
    <InlineMenu/>
  </div>
</template>

<script>
import InlineMenu from './components/InlineMenu.vue'

export default {
  name: 'app',
  components: {
    InlineMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
