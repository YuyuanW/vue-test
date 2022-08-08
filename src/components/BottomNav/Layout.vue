<template>
    <div class="navLayout">
        <div class="content"><slot></slot> </div>
        <Nav></Nav>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'Layout'
})
</script>


<style lang="scss" scoped>
    .navLayout{
       display: flex;
       flex-direction: column;
       height: 100vh;
    }
    .content{
       
        flex-grow: 1;
        overflow: auto;
    }
</style>