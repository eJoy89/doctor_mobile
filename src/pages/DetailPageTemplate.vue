<template>
    <main class="detail-page-main" style="position: relative;">
        <div style="position: sticky; top: 0; z-index: 9999;" ref="fixedInfo">
            <section class="detail-page_header-section">
                <DetailPageHeaderTemplate />
            </section>
            <section class="detail-page_tab-menu-section">
                <DetailTabMenu />
            </section>
            <section class="detail-page_filter-section">
                <DetailFilterTemplate />
            </section>
        </div>
    
        <section :style="{ overflow: 'scroll', position: 'absolute', width: '100%', height: `calc(${screenHeight * 100}px - ${headerSectionHeight}px)` }">
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
    },
};
</script>

<style lang="scss" scoped>
.detail-page-main {
min-height: calc(var(--vh, 1vh) * 100);
}
</style>
