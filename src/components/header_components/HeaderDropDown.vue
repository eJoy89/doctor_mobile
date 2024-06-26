<template>
    <nav class="header-nav">
        <ol class="main-ol" @click="toggleDropdown">
            <li class="main-li">
                {{ selectedHeaderList.name }}
            </li>
            <p class="icon-wrap">
                <angleCircleDown />
            </p>
        </ol>
        <ol v-if="dropdownVisible" class="drop-down-ol">
            <li v-for="(list, index) in headerLists" :key="list.name" :index="index" @click="selectHeader(list)"
                class="drop-down-li"
            >
                {{ list.name }}
            </li>
        </ol>
    </nav>
</template>

<script>
import angleCircleDown from '@/imgs/icons/angle-circle-down.vue'

export default {
    name: 'HeaderDropDown',
    components: {
        angleCircleDown
    },
    data() {
        return {
            headerLists: [
                { name: '환자동의서', link: '', selected: true },
                { name: '전자차트', link: '', selected: false },
                { name: '처방', link: '', selected: false },
                { name: '카덱스', link: '', selected: false },
                { name: '임상관찰기록', link: '', selected: false },
                { name: '환자안전관리', link: '', selected: false },
                { name: 'QPS', link: '', selected: false },
                { name: '이미지 업로드', link: '', selected: false },
            ],

            selectedHeaderList: { name: null, link: null, selected: null },
            dropdownVisible: false
        }
    },
    mounted() {
        this.headerLists.forEach((element) => {
            if(element.selected === true) {
                this.selectedHeaderList = element;
            }
        })
    },
    methods: {
        selectHeader(list) {
            this.selectedHeaderList = list;
            this.headerLists.forEach((element) => {
                element.selected = false;
            });
            list.selected = true;
            this.dropdownVisible = false;
        },
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        }
    }
}
</script>

<style lang="scss" scoped>
.header-nav{
    min-width: 70%;
    width: fit-content;
    user-select: none;
    padding-right: 10px;
    position: relative;

    .main-ol{
        display: flex;
        align-items: center;
        column-gap: 5px;

        .main-li{
            font-size: 20px;
        }
        .icon-wrap{
            width: 20px; 
            height: 20px;
        }
    }

    .drop-down-ol{
        width: 150px;
        background: rgba(40, 40, 40, 1);
        color: #ffff;
        border: 1px solid gray;
        position: absolute;
        top: calc(100% + 10px);
        padding: 20px 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        z-index: 99999;
        .drop-down-li{
            padding: 5px 0;
            font-size: 15px;
            font-weight: 600;
        }
    }
}
</style>
