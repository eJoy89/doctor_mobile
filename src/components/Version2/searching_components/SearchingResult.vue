<template>
    <div class="searching-result-container">
        <header class="searching-result-header">
            <div v-for="(list, index) in headerList" :key="list" :index="index" class="header-list">
                {{ list.name }}
            </div>
        </header>

        <section class="searching-result-section">

            
        </section>
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
                ]
            }
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.searching-result-container{
    width: 100%;
    min-height: 8900px;
    position: relative;
    background: gold;
    ::-webkit-scrollbar{
        display: none;
    }
        .searching-result-header{
            width: 100%;
            display: flex;
            text-align: center;
            white-space: nowrap;
            overflow: scroll;
            flex-shrink: 0;
            background: lightblue;
            position: sticky;
            top: 0;
        
            .header-list{
                font-size: 10px;
                padding: 15px;
            }
        }
        .searching-result-section{
            overflow: scroll;
        
        }
}
</style>