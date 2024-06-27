<template>
    <header class="main-header">
        <HeaderDropDown />
        <p class="icon-wrap" @click="openSideMenu">
            <circleUser />
        </p>
    </header>
    <transition name="fade" mode="out-in">
        <component 
            :is="isSideMenu" 
            @closeSideMenu="closeSideMenu" 
        />
    </transition>
</template>

<script>
import HeaderDropDown from '@/components/header_components/HeaderDropDown.vue';
import circleUser from '@/imgs/icons/circle-user.vue';
import SideMenu from '@/components/side_menu/SideMenu.vue';

export default {
    name: 'HeaderTemplate',
    components: {
        HeaderDropDown,
        circleUser,
        SideMenu
    },
    data() {
        return {
            isSideMenu: null,
        }
    },
    methods: {
        openSideMenu() {
            this.isSideMenu = 'SideMenu';
        },
        closeSideMenu(data) {
            if (data === true) {
                this.isSideMenu = null;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 0;

    .icon-wrap {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>


