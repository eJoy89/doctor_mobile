<template>
    <main class="side-menu-main">
        <div class="side-menu-container">
            <section style="width: 100%; display: flex; align-items: center; column-gap: 10px; padding: 20px 10px">
                <p style="width: 24px;">
                    <angleSmallLeft />
                </p>
                <h3 style="font-size: 17px;">내 정보</h3>
            </section>

            <div class="content-container">
                <section class="user-card-section">
                    <UserCard />
                </section>

                <section>
                    <div v-for="(list, index) in this.sideMenuLists" :key="list" :index="index">
                        <SideMenuList 
                            :menuList="list" 
                            :lastChild="this.sideMenuLists.length - 1 === index"
                        />
                    </div>
                </section>
            </div>
            
        </div>
    </main>
</template>

<script>
import UserCard from '@/components/side_menu/components/UserCard.vue'
import SideMenuList from '@/components/side_menu/components/SideMenuList.vue'
import angleSmallLeft from '@/imgs/icons/angle-small-left.vue'


export default {
    name: 'SideMenu',
    components: {
        UserCard,
        SideMenuList,
        angleSmallLeft
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.user-card-section{
    background: seashell;
    border-bottom: 5px solid rgba(66, 64, 64, 0.377);

}

</style>