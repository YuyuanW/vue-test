<template>
    <div class="changeSection">
        <Layout>
            <div class="changeLayout">
                <TagChange/>
                <div class="noteChange">
                    <p class="noteInfo">备注</p>
                    <label class="labelInfo">
                        <input type="text" placeholder="在这里添加备注">
                    </label>
                </div>
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

// import Nav from '@/components/Nav.vue'
export default Vue.extend({
    name: "Change",
    components: { Nav, Layout, TagChange }
})
</script>

<style lang="scss" scoped>
    
    .changeLayout{
        /* border:1px solid blue;    */
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .noteChange{
        /* border:1px solid yellow; */
        background: #F5F5F5;
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content:flex-start;
        align-content: center;
        text-align: center;
        > .noteInfo{
            font-family: 'Source Han Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #333333;
            margin:0;
            padding: 25px 16px;
        }
        > .labelInfo{
            /* border:1px solid yellow; */  
            flex-grow: 1;
            display: flex;
            
            >input{
                width:100%;
                border:none;
                background: inherit;
                
            }

        }
    }
    

</style>
