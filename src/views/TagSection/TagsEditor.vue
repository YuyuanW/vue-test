<template>
    <Layout>
        <div class="editLay">
            <div class="eTar">
                <Icon iconName = 'left'/>
                <div class="barNote">编辑标签</div>
            </div>
            <!-- <NoteChange></NoteChange> -->
            <Input name="标签名" ></Input>
        </div>
    </Layout>
</template>

<script lang="ts">
import tagModel from '@/model/tagModel';
import Vue from 'vue'
import Component from 'vue-class-component';
// import NoteChange from '../changeSection/NoteChange.vue';
import Input from '@/components/Input.vue'
// import Input from '../../components/BottomNav/Input.vue'
@Component({
    components: { Input }
})
export default class TagsEditor extends Vue{
    created(){
        tagModel.fetch()
        const id = (this.$route.params.id);
        const tags = tagModel.data
        const tag = tags.filter(t=>t.id===id)[0] 
        if(tag){
            console.log(tag)
        }else{
            this.$router.replace('/404')
        }
        
    
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
}


</style>