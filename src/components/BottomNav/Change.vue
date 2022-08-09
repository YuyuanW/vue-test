<template>
    <div class="changeSection">
        <Layout>
            <div class="changeLayout">
                <TagChange/>
                <NoteChange/>
                <div class="numberChange">
                    <div class="cateNum">
                        支出
                    </div>
                    <div class="numPad">
                        123
                    </div>
                </div>
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

// import Nav from '@/components/Nav.vue'
export default Vue.extend({
    name: "Change",
    components: { Nav, Layout, TagChange, NoteChange }
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
