<template>
    <div class="changeSection">
        <Layout>
            <div class="changeLayout">
                <TagChange/>
                <NoteChange/>
                <CateChange name='yuyuan'/>
                <NumberChange/>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '../Nav.vue'
import Layout from './Layout.vue'
import TagChange from '@/views/changeSection/TagChange.vue'
import NoteChange from '../../views/changeSection/NoteChange.vue'
import CateChange from '../../views/changeSection/CateChange.vue'
import NumberChange from '../../views/changeSection/NumberChange.vue'

// import Nav from '@/components/Nav.vue'
export default Vue.extend({
    name: "Change",
    components: { Nav, Layout, TagChange, NoteChange, CateChange, NumberChange }
})
</script>

<style lang="scss" scoped>
    
    .changeLayout{
        /* border:1px solid blue;    */
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    

   
    

</style>
