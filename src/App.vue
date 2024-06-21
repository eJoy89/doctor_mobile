<template>
  <main class="app-main">
    <RouterView />
  </main>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted() {
    console.log('open')
  }
}
</script>

<style lang="scss" scoped>
body{
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-main{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
