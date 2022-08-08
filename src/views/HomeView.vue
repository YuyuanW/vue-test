<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Nav from '@/components/Nav.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
