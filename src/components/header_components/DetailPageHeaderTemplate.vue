<template>
    <header class="detail-page-header">
        <section class="title-section">
            <router-link to="main" class="move-previous-link">
                <angleSmallLeft />
            </router-link>
            <h2 class="title">환자검색</h2>
        </section>

        <p class="barcode-icon" >
            <barcodeRead />
        </p>
    </header>
</template>

<script>
import angleSmallLeft from '@/imgs/icons/angle-small-left.vue'
import barcodeRead from '@/imgs/icons/barcode-read.vue'


export default {
    name: 'DetailPageHeaderTemplate',
    components: {
        angleSmallLeft,
        barcodeRead
    },
    data() {
        return {
        }    
    },
    methods: {
    
    }
}
</script>

<style lang="scss" scoped>
.detail-page-header{
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title-section{
        display: flex;
        align-items: center;
        column-gap: 15px;
        .move-previous-link{
            width: 24px;
            height: 24px;
        }
        .title{
            font-size: 18px;
            font-weight: 600;
        }
    }
    .barcode-icon{
        width: 24px;
        height: 24px;
    }
}
</style>