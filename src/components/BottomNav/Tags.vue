<template>
    <div class="tagsSection"> 
        <Layout>
            <p>tags.vue</p>
        </Layout>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Nav from '../Nav.vue'
import Layout from './Layout.vue'
export default Vue.extend({
    name: "Tags",
    components: { Nav, Layout }
})
</script>