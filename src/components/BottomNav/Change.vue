<template>
    <div class="changeSection">
        <Layout>
            <div class="changeLayout">
                <TagChange :tag.sync="record.tag"/>
                <!-- <NoteChange /> -->
                <Input name="备注" placeHolder="请输入备注信息"  @update='onUpdateNote'/>
                <CateChange :cate.sync="record.cate"/>
                <NumberChange :num.sync = 'record.num' @submit='saveRecord'/>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '../Nav.vue'
import Layout from './Layout.vue'
import TagChange from '@/views/changeSection/TagChange.vue'
// import NoteChange from '../../views/changeSection/NoteChange.vue'
import CateChange from '../../views/changeSection/CateChange.vue'
import NumberChange from '../../views/changeSection/NumberChange.vue'

// import Nav from '@/components/Nav.vue'
import Component from 'vue-class-component'
import model from '@/model/changeModel'
import Input from '../Input.vue'
import store from '@/store/index'

import tagModel from '@/model/tagModel'
import { Watch } from 'vue-property-decorator'

type RecordItem = {
    tag? : string[],
    node : string,
    cate : string, 
    num : number,
    time? : Date
}

window.localStorage.setItem('version','0.0.1')
tagModel.fetch()

@Component({
    components: { Nav, Layout, TagChange, Input, CateChange, NumberChange },
    computed:{
        recordList(){
            return this.$store.state.recordList
            // return store.state.count
        }
    }
})
export default class Change extends Vue{
    record:RecordItem = {tag:[],node:'',cate:'-',num:0}
    created(){
        this.$store.commit('initRecordList')
    }
    onUpdateNote(node:string){
        this.record.node = node
    };
    saveRecord(){
        // console.log(this.record.tag)
        this.$store.commit('createRecord',this.record)  
    }
    

}
</script>

<style lang="scss" scoped> 
    .changeLayout{
        /* border:1px solid blue;    */
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .noteChange{
        padding: 25px 16px;
    }
    
</style>


