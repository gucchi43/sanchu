<template>
  <div id="app">
    <router-link to="/">Go to Feed</router-link>
    <router-link to="/list">Go to List</router-link>
    <router-link to="/post">Go to Post</router-link>
    <!-- <router-link v-bind:to="{ name : 'post', params : { id: 1 }}">Go to Post</router-link> -->
    <router-view></router-view>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {

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
