<template>
    <Layout>
        <div class="editLay">
            <div class="eTar">
                <Icon iconName = 'left'/>
                <div class="barNote">编辑标签</div>
            </div>
            <!-- <NoteChange></NoteChange> -->
            <Input name="标签名" :value="tag.name" ></Input>
            
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
    tag:{id:string,name:string} = undefined
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
    /* position: relative; */
    margin-bottom: 4px;
    display: flex;
    flex-direction: column;
    >.eTar{
        
        position:relative;
        background: #FFFFFF;
        /* border:1px solid red; */
        
        >svg{
            float: left;
            margin:16px auto 16px 16px;
        }
        >.barNote{
            text-align:center;
            /* border:1px solid red; */

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
    }
    /* >.button{
        position: absolute;
        text-align-last: center;
        width:100%;
        bottom: 40px;
        >.removeTag{
            
            border:none;

            font-family: 'Source Han Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 22px;

            letter-spacing: -0.41px;
            color: #FFFFFF;

            background: #767676;
            border-radius: 4px;

            width:fit-content;
            padding:10px 16px;
    }
    } */
    
}


</style>