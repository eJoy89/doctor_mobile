<template>
    <nav class="app-nav">
        <div class="nav-wrap">
            <div v-for="(list, index) in navList" :key="list" :index="index" 
                :class="{['nav-list-wrap']:true, ['nav-list-wrap-active']:index === this.selectedTab}"
                @click="selectTab(index)"
            >
                {{ list.name }}
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MenuTab',
    data() {
        return {
            navList: [
                { name: '즐겨찾기' },
                { name: '전체 문서' },
                { name: '작성 문서' },
                { name: '이미지업로드' },
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
.app-nav {
    width: 100%;
    padding: 0 20px;
    overflow-x: auto;
    white-space: nowrap; 
    &::-webkit-scrollbar {
        display: none;
    }
    .nav-wrap {
        display: flex; 
        column-gap: 10px;

        .nav-list-wrap {
            font-size: 15px;
            font-weight: 600;
            display: inline-block; 
            text-align: center; 
            padding: 10px;
            box-sizing: border-box;
        }
        .nav-list-wrap-active{
            border-bottom: 3px solid purple;
            color: purple;
        }
    }
}


</style>
