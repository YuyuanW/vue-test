<template>
    <Layout>
        <div class="editLay">
            <div class="eTar">
                <Icon iconName = 'left'/>
                <div class="barNote">编辑标签</div>
                <Icon></Icon>
            </div>
            <!-- <NoteChange></NoteChange> -->
            <Input name="标签名" :node="tag ? tag.name : ''" @update="editTag"></Input>
            
            <Button>删除标签</Button>

            
        </div>
    </Layout>
</template>

<script lang="ts">
import tagModel from '@/model/tagModel';
import Vue from 'vue'
import Component from 'vue-class-component';
// import NoteChange from '../changeSection/NoteChange.vue';
import Input from '@/components/Input.vue'
import Button from '../../components/Button.vue'
// import Input from '../../components/BottomNav/Input.vue'
@Component({
    components: { Input ,Button}
})
export default class TagsEditor extends Vue{
    tag?:{id:string,name:string} = undefined;
    created(){
        tagModel.fetch()
        const id = (this.$route.params.id);
        const tags = tagModel.data
        const tag = tags.filter(t=>t.id===id)[0] 
        if(tag){
            this.tag = tag
        }else{
            this.$router.replace('/404')
        } 
    }
    editTag(name:string){
        if(this.tag){
            tagModel.edit(this.tag.id,name)
        }else{
            throw new Error('unKnow word')
        }
        
    }
    remove(){

    }
    onUpdateNote(){
        console.log('hi')
    }
    
}
</script>

<style lang="scss" scoped>
.editLay{
    background: #F5F5F5;
    height: 100%;
    margin-bottom: 4px;
    display: flex;
    flex-direction: column;
    >.eTar{
        background: #FFFFFF;

        display:flex;
        flex-direction: row;
        justify-content: space-between;
        
        >svg{
            margin:16px auto 16px 16px;
        }
        >.barNote{

            font-family: 'Source Han Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            /* identical to box height, or 100% */
            color: #333333;
            padding-top: 16px;
            padding-bottom: 16px;

        }
    }
    >.noteChange{
        background: #FFFFFF;
        margin-top:20px;
        
        padding: 12px 12px;

    }
    
}


</style>