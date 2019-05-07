<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <header class="header">

            <router-link to="/home">首页</router-link>
            <router-link to="/news">新闻</router-link>
             <router-link to="/user">用户</router-link>
          </header>
      
          <hr>
          <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
