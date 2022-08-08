<template>
    <div>
      <router-link to="/tags">标签</router-link>
      <router-link to="/change">记账</router-link>
      <router-link to="/money">统计</router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name : 'Nav'
})
</script>