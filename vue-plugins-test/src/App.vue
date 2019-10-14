<template>
  <div id="app">
    <header>vue 强化练习</header>
    <div class="nav">
      <ul>
        <li v-for='item in navs' :key='item.id'>
          <router-link :to='item.path'>{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navs:[
        {name:'图片查看器',path:'/viewer',id:'nav1'},
        {name:'全局过滤器',path:'/filter',id:'nav2'},
        {name:'自定义组件',path:'/customizeComponent',id:'nav3'},
        {name:'自定义指令',path:'/directives',id:'nav4'},
      ]
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
  color: #2c3e50;
  position:absolute;
  top:0;
  bottom:0;
}
header{
  width:100%;
  height: 80px;
  line-height: 80px;
  background:#004444;
  color:#fff;
  font-size: 24px;
}
a{
  text-decoration: none;
  color:#fff;
  font-size: 18px;
}
.flex{
  display:flex;
  justify-content: space-between;
}
.nav{
  width:20%;
  background:lightblue;
  float: left;
}
.container{
  width:70%;
  float: right;
  overflow: hidden;
}
img{
  width:100%;
}
ul,li{
  list-style: none;
}
</style>
