<template>
  
  <main class="app-main">
    <div class="main-wrap">
      <HeaderComponent 
        @activeSideMenu="activeSideMenu"
      />
      <MenuTab />
      <section class="main-section">
        <SwiperComponent />
      </section>
      <DocumentList />

      <SideMenu 
        style="position: absolute; top: 0; z-index: 9999; transition: .5s;"
        :style="{left: isSideMenu ? '0' : '-350px'}"
        @deactiveSideMenu="deactiveSideMenu"
      />

    </div>

  
  </main>
</template>

<script>
import DocumentList from './components/DocumentList.vue';
import HeaderComponent from './components/HeaderComponent.vue'
import MenuTab from './components/MenuTab.vue'
import SideMenu from './components/SideMenu.vue';
import SwiperComponent from './components/SwiperComponent.vue';
// import SwiperJs from './components/SwiperJs.vue'



export default {
  name: 'App',
  components: {
    SwiperComponent,
    HeaderComponent,
    MenuTab,
    DocumentList,
    SideMenu
  },
  data() {
    return {
      isSideMenu: false
    }
  },
  mounted() {

  },
  methods: {
    deactiveSideMenu(data) {
      this.isSideMenu = !data;
    },
    activeSideMenu(data) {
      this.isSideMenu = data;
    }
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
  .main-wrap{
    width: 350px;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    border: 1px solid black;
    position: relative;
    overflow: hidden;
    .main-section{
      width: 100%;
    }
  }
}
</style>
