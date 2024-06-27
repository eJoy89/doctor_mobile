<template>
    <nav class="header-nav">
        <ol class="main-ol" @click="toggleDropdown">
            <li class="main-li">
                {{ selectedHeaderList.name }}
            </li>
            <p class="icon-wrap" :style="{transform: dropdownVisible ? 'rotate(-180deg)' : '' }" >
                <angleSmallDown :arrowColor="'#ffffff'" />
            </p>
        </ol>
        <transition name="fade">
            <ol v-if="dropdownVisible" class="drop-down-ol">
                <li v-for="(list, index) in dropDownList" :key="list.name" :index="index" @click="selectHeader(list)"
                    class="drop-down-li"
                >
                    {{ list.name }}
                </li>
            </ol>
        </transition>
    </nav>
</template>

<script>
import angleSmallDown from '@/imgs/icons/angle-small-down.vue'


export default {
    name: 'HeaderDropDown',
    components: {
        angleSmallDown
    },
    props: {
        dropDownList: {
            type: Array,
            default() {
                return [
                    { name: '1병동', link: '', selected: true },
                    { name: '2병동', link: '', selected: false },
                    { name: '3병동', link: '', selected: false },
                    { name: '4병동', link: '', selected: false },
                    { name: '5병동', link: '', selected: false },
                ]
            }
        }
    },
    data() {
        return {

            selectedHeaderList: { name: null, link: null, },
            dropdownVisible: false
        }
    },
    mounted() {
        this.dropDownList.forEach((element) => {
            if(element.selected === true) {
                this.selectedHeaderList = element;
            }
        })
    },
    methods: {
        selectHeader(list) {
            this.selectedHeaderList = list;
            this.dropDownList.forEach((element) => {
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
    width: 100%;
    user-select: none;
    position: relative;

    .main-ol{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 5px;
        background: rgba(66, 64, 64, 0.377);

        .main-li{
            font-size: 16px;
            font-weight: 600;
            color: #ffff;
        }
        .icon-wrap{
            width: 20px; 
            height: 20px;
            transition: .2s;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }


    .drop-down-ol{
        width: 100%;
        background: rgb(175, 170, 170);
        color: #ffff;
        position: absolute;
        top: calc(100% + 10px);
        padding: 20px 10px;
        border-radius: 5px;
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
