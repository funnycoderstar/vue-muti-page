<template>
  <div id="app">
    哈哈哈， 这是M站
    <button @click="handleClick">跳转About页面</button>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
      handleClick() {
          this.$router.push({
              name: 'about'
          })
      }
  },
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
