<template>
    <div class="tagChange">
                    <ul class="tagsList">
                        <li v-for="tag in tagItem" :key="tag">{{tag}}</li>
                    </ul>
                    <button class="new">
                        新增标签   
                    </button>
                </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Component from 'vue-class-component' 
const TagProps = Vue.extend({
  props: {
    tagItem : [String]
  }
})

@Component

export default class TagChange extends TagProps{
    mounted(){
       console.log(this.tagItem) 
    }
    // tagsItem = this.tagItem
    // light = []
    // setLight(){

    // }
}
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