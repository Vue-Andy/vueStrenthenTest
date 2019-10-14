<template>
  <div>
    <div>指令的使用</div>
    <div v-fontBold>全局指令--my weight is bold</div>
    <div v-changeColor>局部指令(无参数)--my color should be red!</div>
    <div v-changeColor="{color:'green'}">局部指令(有参数)--my color should be green!</div>
  </div>
</template>

<script>
  export default {
    name:'directives',
    directives:{
      changeColor:{
        bind(el,binding){
          console.log(binding)
          if(!binding.value){
            el.style.color = 'red'
          }else{
            el.style.color = binding.value.color
          }
        }
      }
    }
  }
</script>

<style>
</style>
