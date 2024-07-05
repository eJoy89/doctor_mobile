<template>
    <div class="main-menu-container">
        <section class="main-menu-dnd-section">
            <header style="display: flex; align-items: center; column-gap: 15px; padding: 10px;">
                <p style="width: 12px;">
                <crossIcon />
                </p>
                <h3 style="font-size: 20px;">환자 정보</h3>
            </header>
            <drop-list
            :items="menuList"
            class="dnd-list"
            @insert="onInsert"
            @reorder="$event.apply(menuList)"
            >
            <template v-slot:item="{ item }">
                <drag class="item" :key="item.name" handle=".drag-handle" 
                style="padding: 15px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid gray;">
                <div style="display: flex; align-items: center;">
                    <span class="drag-handle" style="width: 12px; padding: 5px 0; cursor: grab; display: flex; flex-direction: column; row-gap: 2px; margin-right: 10px;">
                        <p style="width: 100%; height: 1px; background: #000000;"></p>
                        <p style="width: 100%; height: 1px; background: #000000;"></p>
                    </span>
                    <p>
                    {{ item.name }}
                    </p>
                </div>
                <input type="checkbox" v-model="item.ug">
                </drag>
            </template>
            <template v-slot:feedback="{ data }">
                <div class="item feedback" :key="data">{{ `여기 ${data}` }}</div>
            </template>
            </drop-list>
        </section>

        <section style="width: 100%; padding: 20px; border-top: 1px solid gray;">
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
name: 'PatientInfoMenu',
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
    this.updateLocalArr();
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
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

    .main-menu-dnd-section {
        display: flex;
        flex-direction: column;
        padding: 20px;
        .dnd-list {
        column-gap: 10px;
        }
    }

}
</style>
