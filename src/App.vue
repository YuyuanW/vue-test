<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '@/components/Nav.vue'
export default Vue.extend({
    name: "App",
    // components: { Nav }
})
</script>

<style lang="scss">
/* @import '~@/assets/styles/test.scss';
body{
  background: $color;
} */

body{
  box-sizing: border-box;
  margin:0;
  padding: 0;
}
ul,ol{
        list-style: none;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
