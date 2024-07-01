<template>
    <nav class="foot-menu-nav">
        <ol class="hamburger-ol-wrap" @click="openSideMenu">
            <li class="icon-wrap">
                <menuBurger />
            </li>
        </ol>
        <ol class="foot-menu-nav-wrap">
            <li v-for="(list, index) in this.footList" :key="list" :index="index" class="li-wrap">
                {{ list.name }}
            </li>
        </ol>
    </nav>
</template>

<script>
import menuBurger from '@/imgs/icons/menu-burger.vue'


export default {
    name: 'FootNav',
    emits: [ 'openSideMenu' ],
    components: {
        menuBurger
    },
    props: {
        footList: {
            type: Array,
            default() {
                return [
                    { name: '동의서' },
                    { name: '전자차트' },
                    { name: '처방' },
                    { name: '경과기록' },
                    { name: '진료정보' },
                    { name: 'I/O' },
                    { name: '검사결과' },
                    { name: 'V/S' },
                    { name: '*' },
                ]
            }
        }
    },
    data() {
        return {

        }
    },
    mounted() {
    
    },
    methods: {
        openSideMenu() {
            this.$emit('openSideMenu', true);
        }
    }
}
</script>

<style lang="scss" scoped>
.foot-menu-nav {
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
    position: relative;
    background: #000000;
    &::-webkit-scrollbar{
        display: none;
    }

    .hamburger-ol-wrap{
        padding: 20px;
        background: #ffff;
        position: sticky;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon-wrap{
            width: 15px;
            height: 15px;
        }
    }

    .foot-menu-nav-wrap {    
        display: flex;
        align-items: center;
        .li-wrap {
            color: #ffff;
            display: inline-block;
            text-align: center;
            padding: 10px 20px; 
            white-space: nowrap; 
            flex-shrink: 0;
        }
    }
}
</style>
