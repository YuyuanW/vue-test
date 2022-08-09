<template>
    <div class="changeSection">
        <Layout>
            <div class="changeLayout">
                <TagChange/>
                <NoteChange/>
                <div class="numberChange">
                    <div class="cateNum">
                        <button class="cateSelected">
                            支出
                        </button>
                        <button>
                            收入
                        </button>
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

    .cateNum{
        /* border:1px solid red;   */
        background: #C4C4C4; 
        display: flex;
        flex-direction: row;
         
        /* justify-content: space-around; */
        > button{
            background: none;
            border:none;
            color:none;

            font-family: 'Source Han Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 22px;
            letter-spacing: -0.41px;
            color: #000000;

            width:50%;
            padding:20px;
        }
        .cateSelected{
            border-bottom: 3px solid #333333;
        }
        
    }
    

</style>
