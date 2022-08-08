<template>
    <div class="nav">
      <router-link to="/tags"><Icon iconName="tags" />标签</router-link>
      <router-link to="/change"><Icon iconName='money'/>记账</router-link>
      <router-link to="/money"><Icon iconName='chart'/>统计</router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from './Icon.vue'

export default Vue.extend({
    name: "Nav",
    components: { Icon }
})

</script>

<style lang="scss" scoped>
</style>