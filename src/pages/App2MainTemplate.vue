<template>
  <div class="app2-container">
    
    <main class="app2-main">
      <section class="header-section">
        <HeaderComponent />
      </section>

      <section class="main-section" >
        <div style="width: 100%;">
          <TabNav></TabNav>
        </div>
        <router-view></router-view>
      </section>

      <section class="nav-section">
        <FootNav 
          @openSideMenu="openSideMenu"
        />
      </section>

      <div style="width: 100%; position: absolute; top: 0; z-index: 99999; transition: .5s;" :style="{right: this.activeSideMenu ? '0%' : '100%'}">
        <SideMenu1 
          @closeSideMenu="closeSideMenu"
        />
      </div>
    </main>

  </div>
</template>

<script>
import HeaderComponent from '@/components/Version2/header_components/HeaderTemplate.vue';
import TabNav from '@/components/Version2/nav_component/TabNav.vue';
import FootNav from '@/components/Version2/nav_component/FootNav.vue';
import SideMenu1 from '@/components/Version2/sideMenu1.vue';


export default {
  name: 'App2MainTemplate',
  components: {
    HeaderComponent,
    TabNav,
    FootNav,
    SideMenu1
  },
  data() {
    return {
      activeSideMenu: false,
    }
  },
  mounted() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

  },
  methods: {
    openSideMenu(data) {
      this.activeSideMenu = data;
    },
    closeSideMenu(data) {
      this.activeSideMenu = !data;
    }
  }
}
</script>

<style lang="scss" scoped>
.app2-container{
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);;
  background: lightcoral;
  display: flex;
  align-items: center;
  justify-content: center;
  .app2-main{
    width: 100%;
    height: 100%;
    background: lawngreen;
    position: relative;
    overflow: hidden;

    .nav-section{
      width: 100%;
      position: absolute;
      overflow: hidden;
      bottom: 0;
    }
  }
}
</style>