<template>
  <div>
  	<h2>通过main.js注入jxzj-ui所引入的自定义组件</h2>
    <jxzj-button typeSwitch display @change='handleSwitch' :activeValue='1' :inactiveValue='0' size='medium'></jxzj-button>  <!--开关-->
    <jxzj-button :iconSrc='iconSrc' display></jxzj-button>  <!--图标按钮-->
    <jxzj-button display>文字按钮1</jxzj-button>  <!--文字按钮-->
    <jxzj-button display plain>文字按钮2</jxzj-button>  <!--白色文字按钮-->
    <jxzj-button display plain addIcon>文字按钮3</jxzj-button>  <!--白色文字按钮带图标-->
    <jxzj-button display type='text'>文字按钮4</jxzj-button>  <!--纯文字文本，可点击-->
  </div>
</template>

<script>
  import iconSrc from '../assets/images/index/home_icon_jiazg.png'
  import { fenToYuan, yuanToFen} from '../jxzj-ui/utils/unitConversion.js'
  export default {
    name:'customizeComponent',
    data() {
      return {
        iconSrc
      }
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
    },
    methods:{
      handleSwitch(val) {
        console.log(val)
      }
    }
  }
</script>

<style>
  img{width:25px;}
</style>
