<template>
  <div class="main-menu-container">
    <section class="main-menu-dnd-section">
      <header style="display: flex; align-items: center; column-gap: 15px; padding: 10px;">
        <p style="width: 12px;">
          <crossIcon />
        </p>
        <h3 style="font-size: 20px;">메뉴</h3>
      </header>
      <drop-list
        :items="menuList"
        class="dnd-list"
        @insert="onInsert"
        @reorder="$event.apply(menuList)"
      >
        <template v-slot:item="{item}">
          <drag class="dnd-item" :key="item" >
            <p>
              {{item.name}}
            </p>
            <input type="checkbox" v-model="item.ug">
          </drag>
        </template>
        <template v-slot:feedback="{data}">
          <div class="item feedback" :key="data">{{data}}</div>
        </template>
      </drop-list>
    </section>

    <section class="configured-menu-section">
      <div style="margin-bottom: 10px;">
        <h4 style="font-weight: 800; font-size: 17px; margin-bottom: 5px">설정된 메뉴</h4>
        <p style="font-size: 12px;">길게 선택 후 드래그하여 순서를 변경할 수 있습니다.</p>
      </div>
      <div class="scrollable-menu">
        <div v-for="(list, index) in localArr" :key="index" :index="index" class="menu-item">
          <p>
            {{ list.name }}
          </p>
          <p style="width: 12px;" @click="dismiss(list)">
            <crossIcon />
          </p>
        </div>
      </div>

      <div style="width: 100%; padding: 10px 0; display: flex; justify-content: space-between; column-gap: 5px;">
        <button style="width: 50%; padding: 10px 0; display: flex; align-items: center; justify-content: center; background: #ffff; border: 1px solid black;">취소</button>
        <button style="width: 50%; padding: 10px 0; display: flex; align-items: center; justify-content: center; background: #ffff; border: 1px solid black;">확인</button>
      </div>
    </section>
  </div>
</template>

<script>
import { Drag, DropList } from "vue-easy-dnd";
import 'vue-easy-dnd/dist/dnd.css';
import crossIcon from '@/imgs/icons/cross-icon.vue';

export default {
  name: 'MainMenu',
  components: {
    Drag,
    DropList,
    crossIcon
  },
  data() {
    return {
      menuList: [
        { name: '동의서', ug: true },
        { name: '전자차트', ug: true },
        { name: '처방', ug: true },
        { name: '경과기록', ug: true },
        { name: '진료정보', ug: true },
        { name: 'I/O', ug: true },
        { name: '검사결과', ug: true },
        { name: 'V/S', ug: true }
      ],
      localArr: []
    };
  },
  mounted() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    this.updateLocalArr();
  },
  watch: {
    menuList: {
      deep: true,
      handler() {
        this.updateLocalArr();
      }
    }
  },
  methods: {
    onInsert(event) {
      this.menuList.splice(event.index, 0, event.data);
    },
    updateLocalArr() {
      this.localArr = this.menuList.filter(item => item.ug);
    },
    dismiss(list) {
      list.ug = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-menu-container {
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ::-webkit-scrollbar{
    display: none;
  }
  .main-menu-dnd-section {
    display: flex;
    flex-direction: column;

    padding: 20px;
    .dnd-list {
      column-gap: 10px;
      .dnd-item{
        font-weight: 600;
        padding: 15px; 
        display: flex; 
        justify-content: space-between; 
        margin-bottom: 10px; 
        border-bottom: 1px solid gray;
      }
    }
  }

  .configured-menu-section {
    border-top: 1px solid gray;
    padding: 20px;
    .scrollable-menu {
      display: flex;
      column-gap: 10px;
      overflow-x: auto; 
      white-space: nowrap; 
      
      .menu-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0; 
        column-gap: 10px;
        padding: 10px;
        border: 1px dotted black;
        border-radius: 3px;
      }
    }
  }
}
</style>
