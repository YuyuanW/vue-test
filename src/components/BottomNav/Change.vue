<template>
    <div class="changeSection">
        <Layout>
            <div class="changeLayout">
                <TagChange :tag-item.sync="tags" @update='onUpdateTag'/>
                <!-- <NoteChange /> -->
                <Input name="备注" placeHolder="请输入备注信息"  @update='onUpdateNote'/>
                <CateChange :cate.sync="record.cate"/>
                <NumberChange @update='onUpdateNum' @submit='submit'/>
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
import CateChange from '../../views/changeSection/CateChange.vue'
import NumberChange from '../../views/changeSection/NumberChange.vue'

// import Nav from '@/components/Nav.vue'
import Component from 'vue-class-component'
import model from '@/model/changeModel'
import Input from '../Input.vue'

type RecordItem = {
    tag? : string[],
    node : string,
    cate : string,
    num : number,
    time? : Date
}

window.localStorage.setItem('version','0.0.1')


@Component({
    components: { Nav, Layout, TagChange, Input, CateChange, NumberChange }
})
export default class Change extends Vue{
    tags=['衣','食','住','行'];
    recordList:RecordItem[] = model.fetch()
    record:RecordItem = {tag:[],node:'',cate:'-',num:0}
    onUpdateTag(tag:string[]){
        this.record.tag = tag
    };
    onUpdateNote(node:string){
        this.record.node = node
    };
    onUpdateCate(cate:string){
        this.record.cate = cate
    };
    onUpdateNum(num:string){
        this.record.num = parseFloat(num)
    };
    submit(){
        const records:RecordItem = model.clone(this.record)
        records.time = new Date()
        this.recordList.push(records)
        model.save(this.recordList)
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


