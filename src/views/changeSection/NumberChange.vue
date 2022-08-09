<template>
    <div class="numberChange">
                    <div class="numberOut">
                        <span>100</span>
                    </div>
                    <div class="numPad">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>删除</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>清空</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button class="okButton">OK</button>
                        <button></button>
                        <button>0</button>
                        <button>00</button>
                        <button>.</button>
                    </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'NumberChange'
})
</script>

<style lang="scss" scoped>
    .numberChange{
        
        >.numberOut{
            font-family: 'Consolas';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 22px;
            color: #333333;

            background: #FFFFFF;
            text-align: right;
            /* float:right; */

            padding-top:22px;
            padding-bottom: 24px;
            padding-right:16px;
            /* border-bottom:2px solid black; */
            box-shadow: inset 0px -2px 3px rgba(0, 0, 0, 0.25);
        }
        >.numPad{
            position: relative;
            >button{
                border:none;
                background:none;
                width:25%;
                height:25%;

                font-family: 'Source Han Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
                text-align: center;
                color: #000000;

                padding-top:20px;
                padding-bottom: 20px;
            }
            >.okButton{
                position: absolute;
                height:50%;
            }
            >button:nth-child(12){
                background: #9A9A9A;
            }
            >button:nth-child(1){
                background: #F2F2F2;
            }
            >button:nth-child(2),button:nth-child(5){
                background: #E0E0E0;
            }
            >button:nth-child(3),button:nth-child(6),button:nth-child(9){
                background: #D3D3D3;
            }
            >button:nth-child(4),button:nth-child(7),button:nth-child(10),button:nth-child(14){
                background: #C1C1C1;
            }
            >button:nth-child(8),button:nth-child(11),button:nth-child(15){
                background: #B8B8B8;
            }
            >button:nth-child(16){
                background: #A9A9A9;
            }

        }
    }
</style>
