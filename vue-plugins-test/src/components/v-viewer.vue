<template>
  <div class="hello" @click='out(inner,10)'>
    <h2>vue 图片放大查看器v-viewer插件使用</h2>
    <div>
      <viewer :images="images">
        <img v-for="src in images" :src="src" :key="src">
      </viewer>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/images/index/about.jpg'
import img2 from '../assets/images/index/dynamic.jpg'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      images:[img1,img2]
    }
  },
  methods:{
    out(inner,num) {
      if(typeof(inner) === 'function') {
        inner(num)
      }else{
        alert('缺少回调函数！')
      }
    },
    inner(num) {
      console.log(num+20)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
