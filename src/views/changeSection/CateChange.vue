<template>
    <div class="cateNum">
                        <button class="cateSelected">
                            支出
                        </button>
                        <button>
                            收入
                        </button>
                    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'CateChange'
})
</script>

<style lang="scss" scoped>
 .cateNum{
        /* border:1px solid red;   */
        background: #C4C4C4; 
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
            border-bottom: 3px solid #333333;
        }
        
    }
</style>