<template>
    <div class="noteChange">
                    <p class="noteInfo">{{name}}</p>
                    <label class="labelInfo">
                        <input type="text" 
                        :value="node"
                        @input="onNodeChanged($event.target.value)"
                        :placeholder="placeHolder"
                        >
                    </label>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator';
const InputProps = Vue.extend({
  props: {
    name: {type:String,default:'标签名'},
    placeHolder :{type:String,default:'请输入备注'},
    node !: {type:String,default:''}
  }
})
@Component
export default class NoteChange extends InputProps{
    @Watch('node')
    onNodeChanged(val: string) {
        this.$emit('update',val)
    }
}
</script>

<style lang="scss" scoped>
.noteChange{
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
            padding-right: 16px;
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