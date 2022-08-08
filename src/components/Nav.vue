<template>
    <div class="nav">
      <router-link to="/tags">标签<svg><use x-href="x"></use></svg></router-link>
      <router-link to="/change">记账</router-link>
      <router-link to="/money">统计</router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import chart from '@/assets/icons/chart.svg'

console.log(chart)
export default Vue.extend({
    name : 'Nav'
    
})

</script>

<style lang="scss" scoped>
</style>