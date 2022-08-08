<template>
    <div class="changeSection">
        <Layout>
            <p>change.vue</p>
        </Layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '../Nav.vue'
import Layout from './Layout.vue'

// import Nav from '@/components/Nav.vue'
export default Vue.extend({
    name: "Change",
    components: { Nav, Layout }
})
</script>

<style lang="scss" scoped>
    
</style>
