<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '@/components/Nav.vue'
// import x from '@/components/Test.vue'
export default Vue.extend({
    components: { Nav }
})
</script>


