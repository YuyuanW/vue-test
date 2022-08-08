<template>
    <svg><use v-bind:xlink:href="'#'+iconName" /></svg>
</template>

<script lang="ts">
import Vue from 'vue'

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

export default Vue.extend({
    name:'Icon',
    props:['iconName']
})
</script>

<style lang="scss" scoped>

</style>