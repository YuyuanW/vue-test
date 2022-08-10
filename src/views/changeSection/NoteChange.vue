<template>
    <div class="noteChange">
                    <p class="noteInfo">备注</p>
                    <label class="labelInfo">
                        <input type="text" 
                        v-model="node"
                        placeholder="在这里添加备注">
                    </label>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class NoteChange extends Vue{
    node = '';
}
</script>

<style lang="scss" scoped>
.noteChange{
        /* border:1px solid yellow; */
    background: #F5F5F5;
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content:flex-start;
        align-content: center;
        text-align: center;
        > .noteInfo{
            font-family: 'Source Han Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #333333;
            margin:0;
            padding: 25px 16px;
        }
        > .labelInfo{
            /* border:1px solid yellow; */  
            flex-grow: 1;
            display: flex;
            
            >input{
                width:100%;
                border:none;
                background: inherit;
                
            }

        }
}
</style>