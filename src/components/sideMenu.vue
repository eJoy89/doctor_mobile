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
                <ol v-for="(list, index) in arr" :key="list.list" :index="index" class="list-main-wrap" :ref="'section' + index">
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
                { list: '첫번째', sub: ['일번', '이번', '삼번'] },
                { list: '두번째', sub: ['일번', '이번', '삼번', '사번'] },
                { list: '세번째', sub: ['일번', '이번', '삼번'] },
                { list: '네번째', sub: ['일번', '이번', '삼번', '사번', '오번'] },
                { list: '다섯번째', sub: ['일번', '이번', '삼번'] },
                { list: '여섯번째', sub: ['일번', '이번', '삼번'] },
                { list: '일곱번째', sub: ['일번', '이번', '삼번', '사번', '오번'] },
                { list: '여덟번째', sub: ['일번', '이번', '삼번', '사번', '오번', '육번'] },
                { list: '아홉번째', sub: ['일번', '이번', '삼번'] },
                { list: '열번째', sub: ['일번', '이번', '삼번', '사번', '오번'] },
                { list: '열한번째', sub: ['일번', '이번', '삼번', '사번', '오번', '육번'] },
                { list: '열두번째', sub: ['일번', '이번', '삼번'] },
                { list: '열세번째', sub: ['일번', '이번', '삼번', '사번', '오번'] },
                { list: '열네번째', sub: ['일번', '이번', '삼번', '사번', '오번', '육번'] },
                { list: '열다섯번째', sub: ['일번', '이번', '삼번'] },
            ],
            selectedIndex: 0,
            // userClicked: false
        }
    },
    methods: {
        scrollToSection(index) {
            this.selectedIndex = index;
            this.userClicked = true;
            const section = this.$refs['section' + index][0];
            section.scrollIntoView({ behavior: 'smooth' });

            // setTimeout(() => {
            //     this.userClicked = false;
            // }, 1000);
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
