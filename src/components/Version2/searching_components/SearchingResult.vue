<template>
    <div class="searching-result-container">
        <div class="scroll-container" ref="scrollContainer">
            <div style="position: relative; width: 100%; height: 100%;">
                <table class="searching-result-table">
                    <thead>
                        <tr>
                            <th v-for="(list, index) in headerList" :key="index" :class="{ 'sticky-header': true, 'sticky-name': index === 0 }" 
                            :style="{zIndex: index === 0 ? '9999' : '999'}">
                                {{ list.name }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="" style="overflow: scroll;height: 100%;">
                        <tr v-for="(list, rowIndex) in dummy" :key="rowIndex" >
                            <td v-for="(item, colIndex) in Object.values(list)" :key="colIndex" :class="{ 'sticky-name': colIndex === 0 }">
                                {{ item }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchingResult',
    props: {
        headerList: {
            type: Array,
            default() {
                return [
                    { name: '성명' },
                    { name: '등록번호' },
                    { name: '나이' },
                    { name: '성별' },
                    { name: '생년월일' },
                    { name: '병동/병실' },
                    { name: '담당과' },
                    { name: '담당의' },
                    { name: '상태' }
                ];
            }
        }
    },
    data() {
        return {
            dummy: this.dummyData(),
            startX: 0,
            startY: 0,
            scrollLeft: 0,
            scrollTop: 0,
            isDown: false,
            scrollDirection: null
            
        };
    },
    mounted() {
        this.$refs.scrollContainer.addEventListener('touchstart', this.startTouch);
        this.$refs.scrollContainer.addEventListener('touchmove', this.moveTouch);
        this.$refs.scrollContainer.addEventListener('touchend', this.endTouch);    
    },
    methods: {
        dummyData() {
            const arr = [];
            const template = { 
                name: '김하늘', 
                no: '0000000', 
                age: '00', 
                gender: '여', 
                br: '0000-00-00', 
                lc: '5병동 501호', 
                dp: '소화기 내과', 
                dr: '조주희', 
                st: '재원' 
            };
            for(let i = 0; i < 15; i++) {
                template.age = Math.floor(Math.random() * 80) + 10;
                template.no = Math.floor(Math.random() * 9000000) + 1000000;
                template.gender = Math.random() < 0.5 ? '남' : '여';
                template.st = Math.random() < 0.5 ? '재원' : '초진';
                arr.push({ ...template });
            }
            return arr;
        },
        startTouch(e) {
            this.isDown = true;
            this.startX = e.touches[0].pageX - this.$refs.scrollContainer.offsetLeft;
            this.startY = e.touches[0].pageY - this.$refs.scrollContainer.offsetTop;
            this.scrollLeft = this.$refs.scrollContainer.scrollLeft;
            this.scrollTop = this.$refs.scrollContainer.scrollTop;
            this.scrollDirection = null; 
        },
        moveTouch(e) {
            if (!this.isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - this.$refs.scrollContainer.offsetLeft;
            const y = e.touches[0].pageY - this.$refs.scrollContainer.offsetTop;
            const walkX = x - this.startX;
            const walkY = y - this.startY;

            if (this.scrollDirection === null) {
                if (Math.abs(walkX) > Math.abs(walkY)) {
                    this.scrollDirection = 'horizontal';
                } else {
                    this.scrollDirection = 'vertical';
                }
            }

            if (this.scrollDirection === 'horizontal') {
                this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walkX;
            } else if (this.scrollDirection === 'vertical') {
                this.$refs.scrollContainer.scrollTop = this.scrollTop - walkY;
            }
        },
        endTouch() {
            this.isDown = false;
        }
    },
    beforeUnmounted() {
        this.$refs.scrollContainer.removeEventListener('touchstart', this.startTouch);
        this.$refs.scrollContainer.removeEventListener('touchmove', this.moveTouch);
        this.$refs.scrollContainer.removeEventListener('touchend', this.endTouch);
    }
};
</script>

<style lang="scss" scoped>
.searching-result-container {
    width: 100%;
    height: 100%;
    overflow-x: scroll;
}

.scroll-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
}

.searching-result-table {
    width: 100%;
    border-collapse: collapse;
    overflow: scroll;
    position: absolute;
}

.searching-result-table th,
.searching-result-table td {
    min-width: 100px;
    padding: 10px 15px;
    text-align: center;
    vertical-align: middle;
    border: 0px solid #ccc;
}

.sticky-header {
    position: sticky;
    top: 0;
    z-index: 9999; 
    background: white;
}

.sticky-name {
    position: sticky;
    left: 0;
    background: white;
    z-index: 99;
  
}

</style>
