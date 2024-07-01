<template>
    <div class="side-menu-container">
        <div class="user-card" ref="userCard">
            <p style="width: 24px;" @click="closeSideMenu">
                <angleSmallLeft />
            </p>
            <div class="user-info-wrap">
                <h2 class="user-name">최서윤</h2>
                <button class="log-out-button">로그아웃</button>
            </div>
        </div>

        <nav class="side-nav">
            <div style="width: 100px; height: 100%; background-color: aqua;">
                <ul>
                    <li 
                        v-for="(list, index) in arr" 
                        :key="list.list" 
                        :index="index" 
                        @click="scrollToSection(index)" 
                        :class="{ 'selected': index === selectedIndex }"
                    >
                        {{ list.list }}
                    </li>
                </ul>
            </div>

            <div class="list-wrap" ref="listWrap" @scroll="handleScroll">
                <ol v-for="(list, index) in arr" :key="list.list" :index="index" :ref="'section' + index" class="list-main-wrap"
                    :style="{marginBottom: index === arr.length - 1 ? '720px' : ''}"
                >
                    <li class="main-list" :style="{ position: 'sticky', top: '0' }">{{ list.list }}</li>
                    <li v-for="(item, i) in list.sub" :key="item" :index="i" style="padding: 8px;">
                        {{ item }}
                    </li>
                </ol>
            </div>
        </nav>
    </div>
</template>

<script>
import angleSmallLeft from '@/imgs/icons/angle-small-left.vue';

export default {
    name: 'sideMenu1',
    emits: ['closeSideMenu'],
    components: {
        angleSmallLeft
    },
    data() {
        return {
            arr: [
                { list: '동의서', sub: ['즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드'] },
                { list: '전자차트', sub: ['즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드'] },
                { list: '처방', sub: ['처방 조회', '모바일 추가 처방' ,'즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드'] },
                { list: '경과기록', sub: ['경과기록' ,'즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드','즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드'] },
                { list: '진료정보', sub: ['진료정보' ,'즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드'] },
                { list: 'I/O', sub: ['I/O' ,'즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드','즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드'] },
                { list: '검사결과', sub: ['검사결과' ,'즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드','즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드'] },
                { list: 'V/S', sub: ['V/S' ,'즐겨찾기', '전체 동의서 목록', '작성된 동의서', '동의서 업로드'] }
            ],
            selectedIndex: 0,
            userClicked: false,
            userCardHeight: 0
        }
    },
    mounted() {
        this.userCardHeight = this.$refs.userCard.clientHeight;
    },
    methods: {
        scrollToSection(index) {
            this.selectedIndex = index;
            this.userClicked = true;
            const section = this.$refs['section' + index][0];
            const listWrap = this.$refs.listWrap;
            const offset = section.offsetTop - this.userCardHeight;
            listWrap.scrollTo({ top: offset, behavior: 'smooth' });

            setTimeout(() => {
                this.userClicked = false;
            }, 10);
        },
        handleScroll() {
            if (this.userClicked) return;

            const listWrap = this.$refs.listWrap;
            const scrollPosition = listWrap.scrollTop + this.userCardHeight;
            let currentIndex = this.selectedIndex;
            
            for (let i = 0; i < this.arr.length; i++) {
                const section = this.$refs['section' + i][0];
                if (section.offsetTop <= scrollPosition && section.offsetTop + section.clientHeight > scrollPosition) {
                    currentIndex = i;
                    break;
                }
            }
            this.selectedIndex = currentIndex;
        },
        closeSideMenu() {
            this.$emit('closeSideMenu', true);
        }
    }
}
</script>

<style lang="scss" scoped>
li, ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.side-menu-container {
    width: 100%;
    height: 100vh;
    background: lightblue;
    &::-webkit-scrollbar {
        display: none;
    }
    .user-card{
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        .user-info-wrap{
            padding: 0 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-end;
            row-gap: 5px;
            .user-name{
                font-size: 22px;
                font-weight: 600;
            }
            .log-out-button{
                border: none;
                background: transparent;
                font-size: 12px;
            }
        }
    }


    .side-nav {
        width: 100%;
        height: 100%;
        display: flex;
        .list-wrap {
            width: calc(100% - 100px);
            height: 100%;
            position: relative;
            overflow: auto;
            &::-webkit-scrollbar {
                display: none;
            }
            .list-main-wrap {
                width: 100%;
                .main-list {
                    padding: 10px;
                    background: green;
                    color: #ffff;
                }
            }
        }
        ul {
            padding: 0;
            li {
                padding: 10px;
                cursor: pointer;
                &.selected {
                    color: red;
                }
            }
        }
    }
}
</style>
