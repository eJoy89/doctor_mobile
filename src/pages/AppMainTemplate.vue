<template>
    <div class="app-main">
        <div class="app-main-container">
            <section class="main-header-section">
                <HeaderTemplate />
            </section>

            <section class="menu-tab-section">
                <MenuTab />
            </section>

            <section class="user-card-section">
                <SwiperComponent />
            </section>

            <section class="main-list-section">
                <DocumentList />
            </section>

        </div>
    </div>
</template>

<script>
import HeaderTemplate from '@/components/header_components/HeaderTemplate.vue'
import MenuTab from '@/components/MenuTab.vue';
import SwiperComponent from '@/components/SwiperComponent.vue';
import DocumentList from '@/components/DocumentList.vue';


export default {
    name: 'AppMainTemplate',
    components: {
        HeaderTemplate,
        MenuTab,
        SwiperComponent,
        DocumentList
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.app-main{
    width: 100%;
    height: 100vh;
    padding: 0 10px;
    .app-main-container{
        position: relative;
        .main-header-section{
            padding: 10px;
        }
        .user-card-section{
            position: sticky;
            top: 0;
        }
        .main-list-section{
            padding: 0 ;
        }
    }
}
</style>