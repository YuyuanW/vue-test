<template>
    <button class="button"  ><slot></slot></button>
    <!-- @click="$emit('click',$event)" -->
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class Button extends Vue{
    
}
</script>

<style lang="scss" scoped>
    .button{
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