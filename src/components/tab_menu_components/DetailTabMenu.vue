<template>
    <nav class="detail-page_nav">
        <ol class="detail-page_nav-wrap">
            <li v-for="(list, index) in this.detailTabList" :key="list" :index="index" 
                :class="{['nav-li']:true, ['active-nav-li']:index === selectedTab}"
                @click="selectTab(index)"
            >
                {{ list.name }}
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: 'DetailTabMenu',
    data() {
        return {
            detailTabList: [
                { name: '내 환자' },
                { name: '상세검색' },
                { name: '병동검색' },
                { name: '의사검색' },
            ],
            selectedTab: 0,
        }
    },
    methods: {
        selectTab(index) {
            this.selectedTab = index;
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