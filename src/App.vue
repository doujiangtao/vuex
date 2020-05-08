<template>
  <div id="app">
    用户名：{{this.$store.state.userinfo.name}}
    <img src="./assets/logo.png">
     <button @click="add">点我</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    add(){
      var userinfo={"name":"admin"};
      localStorage.setItem('userinfo',JSON.stringify(userinfo));
      userinfo=JSON.parse(localStorage.getItem('userinfo'));
      this.$store.commit('SAVE_USERINFO',userinfo);
      
      console.log(this.$store.state.userinfo)
    }
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
