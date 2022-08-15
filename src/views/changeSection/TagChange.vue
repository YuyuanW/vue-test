<template>
    <div class="tagChange">
                    <ul class="tagsList">
                        <li v-for="tag in tagList" :key="tag.id" 
                        :class="{light:light.indexOf(tag.id)>=0}" 
                        @click="setLight(tag.id)" >{{tag.name}}</li>
                    </ul>
                    <button class="new" @click="addTag">
                        新增标签  
                    </button>
                </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import createId from '@/lib/idCreator'
import Component from 'vue-class-component' 
// import tagModel from '@/model/tagModel'
// const TagProps = Vue.extend({
//   props: {
//     tagId : [String]
//   }
// })

@Component({
    computed:{
        tagList(){
            this.$store.commit('initTag')
            return this.$store.state.tagList
        }
    }
})

export default class TagChange extends Vue{
    // tagList:[{id:string,name:string}] =  tagList  

    light:string[] = []
    setLight(tagId:string){
        const index = this.light.indexOf(tagId)
        if(index>=0){
            this.light.splice(index,1)
        }else{
            this.light.push(tagId)
        }
        this.$emit('update:tag',this.light)
    }
    addTag(){
        const tagName = window.prompt('请输入新增标签名：') || ''
        if(tagName === ''){
            window.alert('标签名不能为空')
        }else if(this.$store.state.tagList){
            this.$store.commit('addTag',tagName)
            location.reload()
        }
        
    }
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
            .light{
                background: #333;
                color:#D9D9D9
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