<template>
  <main class="app-main">
    <SwiperComponent/>
    <RouterView />
  </main>
</template>

<script>
import SwiperComponent from './components/SwiperComponent.vue'


export default {
  name: 'App',
  components: {
    SwiperComponent
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
