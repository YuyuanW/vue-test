<template>
    <div class="cateNum">
        <button :class="type==='-' ? 'cateSelected' :''" @click="selectType('-')">
            支出
        </button>
        <button :class="type==='+' ? 'cateSelected' : ''" @click="selectType('+')">
            收入
        </button>
    </div>
</template>

<script lang="ts">
// lang="ts"
// Vue.extend
import Component from 'vue-class-component';
import Vue from 'vue'
@Component
export default class CateChange extends Vue{
    type='-';
    selectType(type:string){
        if(type!=='-' && type!=='+'){
            throw new Error('type is unKnow!')
        }
        this.type = type
        console.log(this.type)
    }

    // data(){
    //     return(
    //         {type:'-'}
    //     )
    // },
    // methods:{
    //     selectType(type){
    //         if(type!=='-' && type!=='+'){
    //             throw new Error('type is unKnow!')
    //         }
    //         this.type = type
    //     }
    // }
}
</script>

<style lang="scss" scoped>
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
            border:none;
            border-bottom: 3px solid #333333;
        }
        
    }
</style>