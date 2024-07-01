<template>
    <nav class="tab-menu-nav" ref="testNav">
        <ol class="tab-menu-nav-wrap">
            <li v-for="(list, index) in this.tabList" :key="list" :index="index" class="li-wrap">
                {{ list.name }}
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: 'TabNav',
    props: {
        tabList: {
            type: Array,
            default() {
                return [
                    { name: '즐겨찾기' },
                    { name: '전체 동의서 목록' },
                    { name: '작성된 동의서' },
                    { name: '동의서 이미지 업로드' }
                ]
            }
        }
    },
    data() {
        return {

        }
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
.tab-menu-nav {
    width: 100%;
    height: 50px;
    overflow-x: auto;
    white-space: nowrap;
    &::-webkit-scrollbar{
        display: none;
    }

    .tab-menu-nav-wrap {    
        display: flex;
        align-items: center;
        .li-wrap {
            display: inline-block;
            text-align: center;
            padding: 10px 20px; 
            white-space: nowrap; 
            flex-shrink: 0;
        }
    }
}
</style>
