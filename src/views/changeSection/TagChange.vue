<template>
    <div class="tagChange">
                    <ul class="tagsList">
                        <li>衣1</li>
                        <li>食2</li>
                        <li>住3</li>
                        <li>行4</li>
                        <li>衣5</li>
                        <li>食6</li>
                        <li>住7</li>
                        <li>行8</li>
                    </ul>
                    <button class="new">
                        新增标签
                    </button>
                </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'TagChange'
})
</script>

<style lang="scss" scoped>
    .tagChange{
        /* border:1px solid red;    */
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding-left: 16px;
        background: white;
        > .tagsList{
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap-reverse;
            justify-content:flex-start ;
            text-align: center  ;
            align-content: flex-start;

            padding-left: 0px;

            >li{
                font-family: 'Arial';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: #484848;

                text-align: center;

                /* padding-right:16px; */
                margin: 10px 24px 0px 0px;

                background: #D9D9D9;

                border-radius: 18px;
                padding:1px 18px;


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
                /* margin-left: 16px; */
                margin-bottom: 12px;

        }
    }
</style>