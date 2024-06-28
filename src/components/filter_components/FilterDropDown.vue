<template>
    <section class="filter-drop-down-section">
        <h3 class="drop-down-title" v-if="!this.noLabel">{{ label }}</h3>
        <nav class="header-nav" :style="{width: !this.noLabel ? '80%' : '100%'}" ref="filterDropDownComponent">
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
    </section>
</template>

<script>
import angleSmallDown from '@/imgs/icons/angle-small-down.vue';


export default {
    name: 'HeaderDropDown',
    components: {
        angleSmallDown
    },
    props: {
        noLabel: {
            type: Boolean,
            default() {
                return false;
            }
        },
        label: {
            type: String,
            default() {
                return 'label'
            }
        },
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
        });
        document.addEventListener('click', this.filterHandleClickOutside);

    },
    beforeUnmount() {
        document.removeEventListener('click', this.filterHandleClickOutside);

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
        },
        filterHandleClickOutside(event) {
            const dropDownComponent = this.$refs.filterDropDownComponent;
            if (dropDownComponent && !dropDownComponent.contains(event.target)) {
                this.dropdownVisible = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-drop-down-section{
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 10px;
    .drop-down-title{
        width: 12%;
        font-size: 14px;
        font-weight: 600;
        text-align: right;
    }
    
    .header-nav{
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
}
</style>
