<template>
    <div class="changeSection">
        <Layout>
            <div class="changeLayout">
                <div class="tagChange">
                    <ul class="tagsList">
                        <li>衣</li>
                        <li>食</li>
                        <li>住</li>
                        <li>行</li>
                    </ul>
                    <button class="new">
                        新增标签
                    </button>
                </div>
                <div class="noteChange">
                    备注
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

// import Nav from '@/components/Nav.vue'
export default Vue.extend({
    name: "Change",
    components: { Nav, Layout }
})
</script>

<style lang="scss" scoped>
    ul,ol{
        list-style: none;
    }
    .changeLayout{
        border:1px solid blue;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .tagChange{
        border:1px solid red;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        > .tagsList{
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            >li{
                border:1px solid #333;
            }   
        }
        button{
                border:none;
                background-color: white;
                outline:none;
                border-bottom: 1px solid #999999;

                font-family: 'Source Han Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: #999999;

                /* display: inline-flex; */
                width:fit-content;
                margin-left: 16px;
                margin-bottom: 12px;

        }
    }

</style>
