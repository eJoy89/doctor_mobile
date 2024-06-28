<template>
    <nav class="detail-page_nav">
        <ol class="detail-page_nav-wrap">
            <li v-for="(list, index) in this.detailTabList" :key="list" :index="index" 
                :class="{['nav-li']:true, ['active-nav-li']:index === selectedTab}"
                @click="selectTab(list, index)"
            >
                {{ list.name }}
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: 'DetailTabMenu',
    emits: [
        'tabList'
    ],
    data() {
        return {
            detailTabList: [
                { name: '내 환자', index: 0 },
                { name: '상세검색', index: 1 },
                { name: '병동검색', index: 2 },
                { name: '의사검색', index: 3 },
            ],
            selectedTab: 0,
        }
    },
    mounted() {
        this.$emit('tabList', this.detailTabList[0]);
    },
    unmounted() {
        this.selectedTab = 0;
    },
    methods: {
        selectTab(list, index) {
            this.selectedTab = index;
            this.$emit('tabList', list);
        }
    }
}
</script>

<style lang="scss" scoped>
.detail-page_nav{
    .detail-page_nav-wrap{
        background-color: rgba(66, 64, 64, 0.377);
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .nav-li{
            font-size: 15px;
            color: #ffff;
        }
        .active-nav-li{
            font-weight: 600;
            color: purple;
        }
    }
}

</style>