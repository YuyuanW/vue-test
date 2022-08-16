<template>
    <div class="moneySection">
        <Layout>
            <div class="cateNum">
                <button :class="cate==='-' ? 'cateSelected' :''" @click="selectType('-')">
                支出
                </button>
                <button :class="cate==='+' ? 'cateSelected' : ''" @click="selectType('+')">
                收入
                </button>
            </div>
            <div class="conOrder">
                <ol class="date">
                    <li v-for="item in result" :key="item.title">
                        <h3>{{item.title}}</h3>
                        <ol class="moneySta">
                            <li v-for="i in item.items" :key="i.time"><span>{{i.tag}}</span><span>{{i.num}}</span></li>
                        </ol>
                    </li>
                </ol>
            </div>
        </Layout>

    </div>  
</template>
<script lang="ts">
import Vue from 'vue'
import Nav from '../Nav.vue'
import TagChange from '../../views/changeSection/TagChange.vue'
import CateChange from '../../views/changeSection/CateChange.vue'

import Component from 'vue-class-component'
@Component({
    components: { Nav, TagChange, CateChange },
    computed : {
    }
})


export default class Money extends  Vue{
    created(){
        this.$store.commit('initRecordList')
        this.$store.commit('initTag')
    }
    get RecordList(){
        return this.$store.state.recordList
    }
    get result(){
        // console.log(this.RecordList)
        type Items = RecordItem[]
        type HashValue = {title:string,items:Items}
        const hashTable:{[key:string]:HashValue} = {}
        for(let i=0;i<this.RecordList.length;i++){
            const [date] = (this.RecordList[i].time!).split('T')
            hashTable[date] = hashTable[date] || {title:date,items:[]}
            hashTable[date].items.push(this.RecordList[i])
        }
        return hashTable
    }
    get tagHash(){
        const hash = JSON.parse(JSON.stringify(this.result))
        for(let i=0;i<hash.length;i++){
            console.log('fuck',hash[i])
        }
        return hash
        //卧槽nm，老子数据结构要映射起来好麻烦！！！！！难道是数据结构最开始就用错了？？？
    }

   
    


    cate:'+'|'-' = '-'
    selectType(type:string){
        if(type!=='-' && type!=='+'){
            throw new Error('type is unKnow!')
        }
        this.cate = type
        // console.log(this.RecordList)
    }; 
}
</script>

<style lang="scss" scoped>
    .cateNum{
        /* border:1px solid red;   */
        /* background: #C4C4C4;  */
        background: #FFFFFF;
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
    ol{
        padding:0;
        margin:0;
        list-style: none;
    }
</style>