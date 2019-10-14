<template>
  <div>
  	<h2>通过main.js注入jxzj-ui所引入的自定义组件</h2>
    <jxzj-button typeSwitch display></jxzj-button>
  </div>
</template>

<script>
  import { fenToYuan, yuanToFen} from '../jxzj-ui/utils/unitConversion.js'
  export default {
    name:'customizeComponent',
    data() {
      return {}
    },
    mounted:function() {
      // 直接当前文件引入的局部方法
      console.log(fenToYuan(2980))
      console.log(yuanToFen(29.80))
      // 通过main.js注入jxzj-ui所引入的全局方法
      // 1.格式化时间
      console.log(this.$formatDateTime(new Date(),'yyyy-MM-dd HH:mm:ss'))
      // 2.分转元
      console.log(this.$fenToYuan(3980))
      // 3.元转分
      console.log(this.$yuanToFen(39.80))
      // 4.去前后空格
      console.log(this.$trim('  我前后都有空格  '))
      // 5.深度拷贝
      let obj = {name:'Andy'}
      let newObj = this.$DeepCopy(obj)
      newObj.age = 30
      console.log(obj)
      console.log(newObj)
      // 6.价格保留两位小数
      console.log(this.$price(5))

      // 通过main.js引入的静态方法库
      console.log(this.JxzjUtils.formatDateTime(new Date(),'yyyy-MM-dd HH:mm:ss'))
    }
  }
</script>

<style>
</style>
