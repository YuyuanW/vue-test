<template>
    <Layout>
        <span>编辑标签</span>
        
    </Layout>
</template>

<script lang="ts">
import tagModel from '@/model/tagModel';
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class TagsEditor extends Vue{
    created(){
        const id = (this.$route.params.id)
        tagModel.fetch()
        const tags = tagModel.data
        const tag = tags.filter(t=>t.id===id)[0]
        if(tag){
            console.log(tag)
        }else{
            this.$router.replace('/404')
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>