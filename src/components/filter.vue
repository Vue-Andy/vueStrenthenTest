<template>
  <div>
    <h2>通过mian.js全局注册的过滤器，全局过滤器</h2>
    <div>全局过滤器--  {{198 | fty}}</div>
    <div>全局过滤器--  {{3.55 | ytf}}</div>
    <div>局部过滤器--  {{25 | formatMoney}}</div>
  </div>
</template>

<script>
  export default {
    name:'Gfilter',

    // 局部过滤器
    filters:{
      formatMoney(val) {
        return '￥'+val
      }
    },
  }
</script>

<style>
</style>
