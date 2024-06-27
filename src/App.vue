<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
nav {
    margin-bottom: 20px;
}
nav a {
    margin-right: 10px;
}
</style>