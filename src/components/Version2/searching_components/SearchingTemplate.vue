<template>
  <div class="searching-template-bg-wrap">
    <div class="searching-template-container">
      <header class="searching-template-header">
        <h2 class="header-title">환자 조회</h2>
        <p class="searching-template-close" @click="closeSearching">닫기</p>
      </header>
      <section class="searching-section">
        <SearchingTabMenu />
        <div class="searching-input-wrap">
          <SearchingInput />
        </div>
      </section>
      <div class="searching-main">
        <SearchingResult />
      </div>
    </div>
  </div>
</template>

<script>
import SearchingTabMenu from '@/components/Version2/searching_components/SearchingTabMenu.vue';
import SearchingInput from '@/components/Version2/searching_components/SearchingInput.vue';
import SearchingResult from '@/components/Version2/searching_components/SearchingResult.vue';

export default {
  name: 'SearchingTemplate',
  emits: ['closeSearching'],
  components: {
    SearchingTabMenu,
    SearchingInput,
    SearchingResult,
  },
  mounted() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.body.style.overflow = 'hidden';
  },
  methods: {
    closeSearching() {
      this.$emit('closeSearching', true)
    }
  },
  unmounted() {
    document.body.style.overflow = 'unset';
  }
}
</script>

<style lang="scss" scoped>
.searching-template-bg-wrap {
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  // background-color: gray;
  position: relative;
  .searching-template-container {
    width: 98%;
    height: 98%;
    border-radius: 30px 0 0 30px;
    background-color: #ffff;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    overflow: hidden;
    ::-webkit-scrollbar{
      display: none;
    }
    .searching-template-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      .header-title {
        font-size: 20px;
      }
      .searching-template-close {
        font-size: 15px;
        color: blue;
      }
    }
    .searching-section {
      width: 100%;
      padding: 0 20px 10px 20px;
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      background: lightgray;
      
      .searching-input-wrap {
        width: 100%;
      }
    }
    .searching-main {
      width: 100%;
      height: calc(100% - 100px); 
      overflow: auto;
    

    }
  }
}
</style>
