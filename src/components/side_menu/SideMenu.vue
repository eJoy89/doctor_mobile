<template>
    <main class="side-menu-main">
        <div class="side-menu-container" >
            <div class="fixed-container">
                <section class="side-menu-header-section">
                    <p class="icon-wrap" @click="closeSideMenu">
                        <angleSmallLeft />
                    </p>
                    <h3 style="font-size: 17px;">내 정보</h3>
                </section>
                <section class="user-card-section">
                    <UserCard />
                </section>
            </div>
            <section >
                <div v-for="(list, index) in this.sideMenuLists" :key="list" :index="index">
                    <SideMenuList 
                        :menuList="list" 
                        :lastChild="this.sideMenuLists.length - 1 === index"
                    />
                </div>
            </section>
        
        </div>
    </main>
</template>

<script>
import UserCard from '@/components/side_menu/components/UserCard.vue';
import SideMenuList from '@/components/side_menu/components/SideMenuList.vue';
import angleSmallLeft from '@/imgs/icons/angle-small-left.vue';

export default {
    name: 'SideMenu',
    emits: ['closeSideMenu'],
    components: {
        UserCard,
        SideMenuList,
        angleSmallLeft
    },
    mounted() {
        document.body.style.overflow = 'hidden';
    },
    beforeUnmount() {
        document.body.style.overflow = 'unset';
    },
    data() {
        return {
            sideMenuLists: [
                { name: '기타설정', 
                    lists: [
                        { name: '기타설정1', link: '' },
                        { name: '기타설정2', link: '' },
                    ] 
                },
                { name: '이용안내', 
                    lists: [
                        { name: '이용약관', link: '' },
                        { name: '개인정보 처리 방침', link: '' },
                    ] 
                },

                { name: '기타설정', 
                    lists: [
                        { name: '기타설정1', link: '' },
                        { name: '기타설정2', link: '' },
                    ] 
                },
                { name: '이용안내', 
                    lists: [
                        { name: '이용약관', link: '' },
                        { name: '개인정보 처리 방침', link: '' },
                    ] 
                },
                { name: '기타설정', 
                    lists: [
                        { name: '기타설정1', link: '' },
                        { name: '기타설정2', link: '' },
                    ] 
                },
                { name: '이용안내', 
                    lists: [
                        { name: '이용약관', link: '' },
                        { name: '개인정보 처리 방침', link: '' },
                    ] 
                },
            ]
        }
    },
    methods: {
        closeSideMenu() {
            this.$emit( 'closeSideMenu', true )
        }
    }
}
</script>

<style lang="scss" scoped>
.side-menu-main{
    width: 100%; 
    height: calc(var(--vh, 1vh) * 100);
    background: #ffff;
    position: fixed; 
    top: 0; 
    left: 0; 
    z-index: 999999;
    overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    .side-menu-container{
        background: #ffff;
        position: relative;
        .fixed-container{
            background: #ffff;
            position: sticky;
            top: 0;
            z-index: 9999;
            .side-menu-header-section{
                width: 100%; 
                display: flex; 
                align-items: center; 
                column-gap: 10px; 
                padding: 20px 10px;
                .icon-wrap{
                    width: 24px;
                }
            }
        }

        
    }
}
.user-card-section{
    background: seashell;
    border-bottom: 5px solid rgba(66, 64, 64, 0.377);

}

</style>