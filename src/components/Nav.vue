<template>
    <div class="nav">
      <router-link to="/tags"><svg><use xlink:href="#tags" /></svg>标签</router-link>
      <router-link to="/change"><svg><use xlink:href="#money" /></svg>记账</router-link>
      <router-link to="/money"><svg><use xlink:href="#chart" /></svg>统计</router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import chart from '@/assets/icons/chart.svg'
import tags from '@/assets/icons/tags.svg'
import money from '@/assets/icons/money.svg'
console.log(chart,tags,money)
export default Vue.extend({
    name : 'Nav'
    
})

</script>

<style lang="scss" scoped>
</style>