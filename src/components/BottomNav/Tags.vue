<template>
    <div class="tagsSection"> 
        <Layout>
            <div class="tagLay">
                <ol>
                    <li><div class="liStyle"><span>衣</span><Icon iconName="right"></Icon></div></li>
                    <li><div class="liStyle"><span>食</span><Icon iconName="right"></Icon></div></li>
                    <li><div class="liStyle"><span>住</span><Icon iconName="right"></Icon></div></li>
                    <li><div class="liStyle"><span>行</span><Icon iconName="right"></Icon></div></li>
                </ol>
            <button class="addTag">新增标签</button>
            </div>
        </Layout>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Nav from '../Nav.vue'
import Layout from './Layout.vue'
import Icon from '../Icon.vue';
export default Vue.extend({
    name: "Tags",
    components: { Nav, Layout, Icon }
})
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
    
    .addTag{
        border:none;

        font-family: 'Source Han Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;
        /* identical to box height, or 129% */
        letter-spacing: -0.41px;
        color: #FFFFFF;

        background: #767676;
        border-radius: 4px;

        width:fit-content;
        padding:10px 16px;
        margin: 20px auto;
        margin-bottom:40px;
    }

</style>