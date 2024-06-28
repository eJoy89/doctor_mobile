<template>
    <main class="detail-page-main">
        <div class="fixed-wrap" ref="fixedInfo">
            <section class="detail-page_header-section">
                <DetailPageHeaderTemplate />
            </section>
            <section class="detail-page_tab-menu-section">
                <DetailTabMenu 
                    @tabList="tabList"
                />
            </section>
            <section class="detail-page_filter-section">
                <DetailFilterTemplate 
                    :filterComponentSet="this.filterComponentSet"
                />
            </section>
        </div>
    
        <section class="detail-list-section" 
            :style="{ 
                overflow: 'scroll', position: 'absolute', width: '100%', background: '#ffff', zIndex: '999', 
                height: `calc(${screenHeight * 100}px - ${headerSectionHeight}px)` 
            }"
        >
            <DetailPageList />
        </section>
        </main>
</template>

<script>
import { nextTick } from 'vue';
import DetailPageHeaderTemplate from '@/components/header_components/DetailPageHeaderTemplate.vue';
import DetailTabMenu from '@/components/tab_menu_components/DetailTabMenu.vue';
import DetailFilterTemplate from '@/components/filter_components/DetailFilterTemplate.vue';
import DetailPageList from '@/components/list_components/DetailPageList.vue';

export default {
    name: 'DetailPageTemplate',
    components: {
        DetailPageHeaderTemplate,
        DetailTabMenu,
        DetailFilterTemplate,
        DetailPageList,
    },
    data() {
        return {
            screenHeight: null,
            headerSectionHeight: null,
            resizeObserver: null,

            // 초기 셋팅 값
            filterComponentSet: { name: '내 환자', index: 0 },
        };
    },
    mounted() {
        nextTick(() => {
            this.updateHeaderHeight();
            this.updateScreenHeight();
            window.addEventListener('resize', this.updateScreenHeight);
            this.resizeObserver = new ResizeObserver(this.updateHeaderHeight);
            this.resizeObserver.observe(this.$refs.fixedInfo);
        });
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateScreenHeight);
        if (this.resizeObserver && this.$refs.fixedInfo) {
            this.resizeObserver.unobserve(this.$refs.fixedInfo);
        }
    },
    methods: {
        updateHeaderHeight() {
            if (this.$refs.fixedInfo) {
            this.headerSectionHeight = this.$refs.fixedInfo.offsetHeight;
            }
        },
        updateScreenHeight() {
            let vh = window.innerHeight * 0.01;
            this.screenHeight = vh;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        },
        tabList(data) {
            this.filterComponentSet = data;
        } 
    },
};
</script>

<style lang="scss" scoped>
.detail-page-main {
    min-height: calc(var(--vh, 1vh) * 100);
    position: relative;
    .fixed-wrap{
        position: sticky; 
        top: 0; 
        z-index: 9999;
    }
    .detail-list-section{
        &::-webkit-scrollbar{
            display: none;
        }
    }
}
</style>
