<template>
    <div class="tagsSection"> 
        <Layout>
            <div class="tagLay">
                <ol>
                    <li v-for="tag in tags" :key="tag.id">
                        <router-link :to="'/tags/editor/'+tag.id">
                            <div class="liStyle">
                                <span>{{tag.name}}</span>
                                <Icon iconName="right"></Icon>
                            </div>
                        </router-link>
                    </li>
                    <!-- <li><div class="liStyle"><span>食</span><Icon iconName="right"></Icon></div></li>
                    <li><div class="liStyle"><span>住</span><Icon iconName="right"></Icon></div></li>
                    <li><div class="liStyle"><span>行</span><Icon iconName="right"></Icon></div></li> -->
                </ol>
                <Button @click.native="addTag">新建标签</Button>
            </div>
        </Layout>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Nav from '../Nav.vue'
import Layout from './Layout.vue'
import Icon from '../Icon.vue';

// import tagModel from '@/model/tagModel'
// tagModel.fetch()
import Component from 'vue-class-component';
import Button from '../Button.vue';

@Component({
    components: { Nav, Layout, Icon ,Button },
    computed:{
        tags(){
            this.$store.commit('initTag')
            return this.$store.state.tagList
        }
    }
})

export default class Tags extends Vue{
    addTag(){
        const tagName = window.prompt('请输入标签名')
        if(tagName){
            this.$store.commit('addTag',tagName)
        }else{
            window.alert('标签名不能为空')
        }
    }
}
</script>

<style lang="scss" scoped>
    .tagsSection{
        box-sizing: border-box;
        margin: 0;
        padding:0;    
        background: rgb(245,245,245);   
    }
    .tagLay{
        display: flex;
        flex-direction: column;

        height: 100%;
        /* border:1px solid red; */
        >ol{
            /* border:1px solid green; */
            list-style: none;
            margin: 0;
            padding:0;

            flex-grow: 1;
            overflow: auto;

            

            > li{
                background: #FFFFFF;
                > a{
                    text-decoration: none;
                    color:#000000;
                    >.liStyle{
                        font-family: 'Source Han Sans';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 16px;
                        /* identical to box height, or 100% */
                        color: #000000;
                        
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;

                        margin-left:16px;
                        padding:12px 16px 16px 0;
                        border-bottom:1px solid #C4C3C9;

                        
                        > svg{
                            width:24px;
                            height:24px;
                        }
                    }
                } 
                
            }
        }
    }
    


</style>