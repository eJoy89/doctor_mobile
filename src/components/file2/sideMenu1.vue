<template>
    <div class="side-menu-container">
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

            <div class="list-wrap" @scroll="handleScroll">
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
export default {
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
            userClicked: false
        }
    },
    methods: {
        scrollToSection(index) {
            this.selectedIndex = index;
            this.userClicked = true;
            const section = this.$refs['section' + index][0];
            section.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                this.userClicked = false;
            }, 10);
        },
        handleScroll() {
            if (this.userClicked) return;

            const sections = this.$refs;
            let currentIndex = this.selectedIndex;
            
            for (let i = 0; i < this.arr.length; i++) {
                const section = sections['section' + i][0];
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom > 0) {
                    currentIndex = i;
                    break;
                }
            }
            this.selectedIndex = currentIndex;
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
    width: 380px;
    height: 100vh;
    background: lightblue;
    &::-webkit-scrollbar {
        display: none;
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
