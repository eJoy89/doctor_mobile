<template>
    <nav class="tab-menu-nav" ref="testNav">
        <ol class="tab-menu-nav-wrap">
            <li v-for="(list, index) in this.tabList" :key="list" :index="index" 
                @click="activeTab(index)" 
                :class="['li-wrap', {['active_tab']:index === isActiveTab}]"
                :ref="'tab' + index"
            >
                {{ list.name }}
            </li>
            <div class="underline" :style="underlineStyle"></div>
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
            isActiveTab: 0,
            underlineStyle: {
                width: '0px',
                left: '0px',
                transition: 'left 0.3s, width 0.3s'
            }
        }
    },
    mounted() {
        this.updateUnderline();
        window.addEventListener('resize', this.updateUnderline);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateUnderline);
    },
    methods: {
        activeTab(index) {
            this.isActiveTab = index;
            this.updateUnderline();
        },
        updateUnderline() {
            this.$nextTick(() => {
                const activeTab = this.$refs['tab' + this.isActiveTab][0];
                this.underlineStyle.width = activeTab.offsetWidth + 'px';
                this.underlineStyle.left = activeTab.offsetLeft + 'px';
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-menu-nav {
    width: 100%;
    padding: 0 15px;
    overflow-x: auto;
    white-space: nowrap;
    background: rgb(221, 219, 219);
    &::-webkit-scrollbar{
        display: none;
    }

    .tab-menu-nav-wrap {    
        display: flex;
        align-items: center;
        position: relative;
        .li-wrap {
            font-weight: 400;
            font-size: 15px;
            display: inline-block;
            text-align: center;
            padding: 15px 15px; 
            white-space: nowrap; 
            flex-shrink: 0;
            cursor: pointer;
        }
        .underline {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            background: #000;
        }
        .active_tab {
            color: #000;
        }
    }
}
</style>
