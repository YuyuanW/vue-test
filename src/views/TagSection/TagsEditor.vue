<template>
    <Layout>
        <div class="editLay">
            <div class="eTar">
                <Icon iconName = 'left' @click.native='back'/>
                <div class="barNote">编辑标签</div>
                <Icon></Icon>
            </div>
            <!-- <NoteChange></NoteChange> -->
            <Input name="标签名" :node="tag ? tag.name : 'fuck'" @update="editTag"></Input>
            
            <Button @click.native="removeTag">删除标签</Button>

            
        </div>
    </Layout>
</template>

<script lang="ts">
// import tagModel from '@/model/tagModel';
import Vue from 'vue'
import Component from 'vue-class-component';
import Input from '@/components/Input.vue'
import Button from '../../components/Button.vue'
@Component({
    components: { Input ,Button},
    computed:{
        tags(){
            this.$store.commit('initTag')
            return this.$store.state.tagList
        }
    }
})
export default class TagsEditor extends Vue{
    tag?:{id:string,name:string} = undefined;
    created(){
        const urlId = (this.$route.params.id);
        const tags = this.$store.state.tagList as [{id:string,name:string}] 
        const tag = tags.filter(t=>t.id===urlId)[0]
        if(tag){
            this.tag = tag
        }else{
            this.$router.replace('/404')
        } 
    }
    editTag(name:string){
        if(this.tag){
            const newTag = {...this.tag,name:name}
            this.$store.commit('editTag',newTag)
            // tagModel.edit(this.tag.id,name)
        }else{
            throw new Error('unKnow word')
        }
        
    }
    removeTag(){
        if(this.tag){
            this.$store.commit('removeTag',this.tag.id)
            this.$router.back()
        }else{
            throw new Error('unKnow word')
        } 
    }
    back(){
        this.$router.back()
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