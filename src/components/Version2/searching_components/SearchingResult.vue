<template>
    <div class="result-container">
        <div style="width: 20%; ">
            <div class="header">
                성명
            </div>

            <div class="name" style="display: flex; flex-direction: column; row-gap: 15px;">
                <div v-for="(list, index) in dummy" :key="index">
                    {{ list.name }}
                </div>
            </div>
        </div>

        <div style="width: 80%;">
            <div class="header" ref="header">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div class="content" ref="content">
                <div v-for="(list, index) in dummy" :key="index" style="display: flex; column-gap: 20px">
                    <p v-for="([, value], i) in Object.entries(list).filter(([key]) => key !== 'name')" :key="i">
                        {{ value }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            dummy: [
                { name: '김하늘', no: '000000000000000000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
                { name: '김하늘', no: '0000000', age: '00', gender: '여', br: '0000-00-00', lc: '5병동 501호', dp: '소화기 내과', dr: '조주희', st: '재원' },
            ],
        }
    },
    mounted() {
        this.$refs.header.addEventListener('scroll', this.syncScroll);
        this.$refs.content.addEventListener('scroll', this.syncScroll);
    },
    beforeunmounted() {
        this.$refs.header.removeEventListener('scroll', this.syncScroll);
        this.$refs.content.removeEventListener('scroll', this.syncScroll);
    },
    methods: {
        syncScroll(event) {
            if (event.target === this.$refs.header) {
                this.$refs.content.scrollLeft = event.target.scrollLeft;
            } else {
                this.$refs.header.scrollLeft = event.target.scrollLeft;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.result-container {
    height: 100%;
    background: lightblue;
    position: relative;
    overflow: scroll;
    display: flex;
    padding: 0 10px 10px 10px;

    .header {
        height: 100px;
        background: red;
        position: sticky;
        top: 0;
        overflow-x: scroll;
        white-space: nowrap;
    }

    .content {
        overflow-x: scroll;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }
}
</style>
