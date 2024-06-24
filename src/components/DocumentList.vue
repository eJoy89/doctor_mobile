<template>
    <div class="app-document-list-container">
        <section class="app-document-list-section">
            <div v-for="(list, index) in documentList" :key="list" :index="index" class="list-wrap">
                <p>img</p>
                <h3>
                    {{ list.name }}
                </h3>
                <p :class="{['favourite-icon']:true, ['favourite-icon-active']:list.favourite}" @click="selectFavourite(list)">
                </p>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: 'DocumentList',
    data() {
        return {
            documentList: [
                { img: '', name: '간호간병통합입원 동의서', favourite: false },
                { img: '', name: '대장내시경 검사 설명서/동의서', favourite: false },
                { img: '', name: '특수재료 및 비급여 신청 동의서', favourite: true },
                { img: '', name: '간호간병통합입원 동의서', favourite: false },
                { img: '', name: '대장내시경 검사 설명서/동의서', favourite: false },
                { img: '', name: '특수재료 및 비급여 신청 동의서', favourite: false },
                { img: '', name: '간호간병통합입원 동의서', favourite: true },
                { img: '', name: '대장내시경 검사 설명서/동의서', favourite: false },
                { img: '', name: '특수재료 및 비급여 신청 동의서', favourite: false },
            ]
        }
    },
    methods: {
        selectFavourite(list) {
            list.favourite = !list.favourite
        }
    }
}
</script>

<style lang="scss" scoped>
.app-document-list-container{
    width: 100%;
    .app-document-list-section{
        width: 100%;
        padding: 0 8px;
        .list-wrap{
            width: 100%;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid black;
            
            .favourite-icon{
                width: 20px;
                height: 20px;
                border: 1px solid black;
            }
            .favourite-icon-active{
                background: lightblue;
            }
        }
        
    }
}
</style>