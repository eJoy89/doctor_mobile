<template>
    <div class="searching-result-container">
        <div class="scroll-container">
            <table class="searching-result-table">
                <thead>
                    <tr>
                        <th v-for="(list, index) in headerList" :key="index" :class="{ 'sticky-header': true, 'sticky-name': index === 0 }" 
                        :style="{zIndex: index === 0 ? '9999' : '999'}">
                            {{ list.name }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(list, rowIndex) in dummy" :key="rowIndex">
                        <td v-for="(item, colIndex) in Object.values(list)" :key="colIndex" :class="{ 'sticky-name': colIndex === 0 }">
                            {{ item }}
                        </td>
                    </tr>
                </tbody>
            </table>
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
            dummy: [
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
            ]
        };
    }
};
</script>

<style scoped>
.searching-result-container {
    width: 100%;
    background: gold;
}

.scroll-container {
    display: flex;
    flex-direction: column;
}

.searching-result-table {
    width: 100%;
    border-collapse: collapse;
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
    background: lightblue;
    z-index: 9999; 
}

.sticky-name {
    position: sticky;
    left: 0;
    background: white;
    z-index: 99;
}
</style>
