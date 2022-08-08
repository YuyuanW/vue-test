<template>
    <div class="nav">
      <router-link to="/tags" class="routerItems" active-class="highLight"><Icon iconName="tags" /><p>标签</p></router-link>
      <router-link to="/change" class="routerItems" active-class="highLight"><Icon iconName='money'/><p>记账</p></router-link>
      <router-link to="/money" class="routerItems" active-class="highLight"><Icon iconName='chart'/><p>统计</p></router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from './Icon.vue'

export default Vue.extend({
    name: "Nav",
    components: { Icon }
})

</script>

<style lang="scss" scoped>
  .nav{
    box-shadow: 0px 0px 2px rgb(0,0,0,0.25);

    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    >a{
      text-decoration: none;
    }
    
    > .routerItems{
      flex-grow:1;

      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      >svg{
        
        width:30px;
        height: 30px;
        padding-top:4px;

        fill:#999999 ;
      }
      >p{
        font-family: 'Source Han Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: #BFBFBF;

        padding :2px 0px 6px 0px;
        margin:0px;
      }

    }

    >.highLight{
      >svg{
        fill:red;
      }
      >p{
        color:red;
      }
    }
  }
</style>