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
                <ol class="list">
                    <li class="oneGroup" v-for="item in data" :key="item.title">
                        <div class="date">{{item.title}}</div>
                        <ol class="moreInfo">
                            <li class="oneRecord" v-for="i in item.items" :key="i.time">
                                
                                    <span v-if="!i.tag.name" class="tag">空</span>
                                    <span v-for="j in i.tag.name" :key="j.id" class="tag">
                                        <span>{{j}}</span>                                  
                                    </span>
                                    <span class="node">{{i.node}}</span>
                                    <span class="num">￥{{i.num}}</span>
                                
                            </li>
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
        this.data = this.result0
    }
    get RecordList(){
        const list = this.$store.state.recordList
        let list0 = []
        let list1 = [] 
        for(let i =0;i<list.length;i++){
            if(list[i].cate === '-'){
                list0.push(list[i])
            }else if(list[i].cate === '+'){
                list1.push(list[i])
            }
        }
        return  {'-':list0,'+':list1}
    }
    get result0(){
        // console.log(this.RecordList)
        type Items = RecordItem[]
        type HashValue = {title:string,items:Items}
        const hashTable:{[key:string]:HashValue} = {}
        for(let i=0;i<this.RecordList['-'].length;i++){
            const [date] = (this.RecordList['-'][i].time!).split('T')
            hashTable[date] = hashTable[date] || {title:date,items:[]}
            hashTable[date].items.push(this.RecordList['-'][i])
        }
        return hashTable
    }
    get result1(){
        // console.log(this.RecordList)
        type Items = RecordItem[]
        type HashValue = {title:string,items:Items}
        const hashTable:{[key:string]:HashValue} = {}
        for(let i=0;i<this.RecordList['+'].length;i++){
            const [date] = (this.RecordList['+'][i].time!).split('T')
            hashTable[date] = hashTable[date] || {title:date,items:[]}
            hashTable[date].items.push(this.RecordList['+'][i])
        }
        return hashTable
    }

    
    
    cate:'+'|'-' = '-'
    data = this.result0
    
    selectType(type:string){
        if(type!=='-' && type!=='+'){
            throw new Error('type is unKnow!')
        }
        this.cate = type
        if(this.cate==='-'){
            this.data = this.result0
        }else{
            this.data = this.result1
        }
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
    ol,ul{
        padding:0;
        margin:0;
        list-style: none;
    }
    .oneGroup{
        
        >.date{
            font-family: 'Source Han Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 22px;
            letter-spacing: -0.41px;
            color: #000000;

            background: #F5F5F5;
            padding:10px 0px 10px 16px;
            
        }

        >.moreInfo{
            background: #FFFFFF;
            padding:0px 16px 0px 16px;
            > .oneRecord{
                display:flex;
                flex-direction: row; 
                justify-content: space-between;
                padding-top:10px;
                padding-bottom: 10px;
                
            
                >.tag{
                    /* padding: 10px 4px 10px 0px; */
                    padding-right: 4px;
                    /* border:1px solid red */
                    font-family: 'Source Han Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 17px;
                    line-height: 22px;
                    letter-spacing: -0.41px;
                    color: #000000;
                }
                >.node{
                    flex-grow: 1;
                    padding-left: 10px;

                    font-family: 'Source Han Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 17px;
                    line-height: 22px;
                    letter-spacing: -0.41px;
                    color: #999999;

                    white-space: nowrap;  //不换行
                    overflow: hidden; // 超过的文字就隐藏
                    text-overflow:ellipsis; //隐藏的用省略号表示
                }
                >.num{
                    font-family: 'Source Han Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 17px;
                    line-height: 22px;
                    text-align: right;
                    letter-spacing: -0.41px;
                    color: #000000;
                }
            }
            
        }
    }
</style>