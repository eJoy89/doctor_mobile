<template>
    <div class="swiper-content-container">
        <div class="swiper-container" ref="swiperContainer">
            <div class="swiper-card" ref="swiperCard1">
                <div style="display: flex; align-items: center; column-gap: 10px; height: 80%; padding: 15px;">
                    <!-- <div>
                        <span>입원</span>
                    </div> -->  
                    <div style="display: flex; flex-direction: column;">
                        <!-- <div style="display: flex; align-items: center; column-gap: 10px; color: #fff;">
                            <h3>환자이름</h3>
                            <p>12345678</p>
                        </div> -->
                        <div style="display: flex; column-gap: 10px; align-items: center; font-size: 12px; color: #000000;">
                            <p>내 환자</p>
                            <p>|</p>
                            <p>상세검색</p>
                            <p>|</p>
                            <p>병동검색</p>
                            <p>|</p>
                            <p>의사검색</p>
                        </div>
                    </div>
                </div>
                <div style="height: 20%; display: flex; align-items: center; justify-content: center;">-----</div>
            </div>
            <div class="swiper-card" ref="swiperCard2"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDown: false,
            startX: 0,
            scrollLeft: 0,
            translateX: 0,
        };
    },
    
};
</script>

<style lang="scss" scoped>
.swiper-content-container {
    width: 100%;
    height: 120px;
    overflow: hidden;

    .swiper-container {
        width: 100%;
        height: 100%;
        padding: 0 40px;
        background: lightblue;
        display: flex;
        align-items: center;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
        transition: scroll-snap-type 0.5s ease, scroll-behavior 0.5s ease;

        &::-webkit-scrollbar {
            display: none;
        }

        .swiper-card {
            color: #ffff;
            display: flex;
            flex-direction: column;
            flex: 0 0 100%;
            width: calc(100% - 10px);
            height: calc(100% - 40px);
            border-radius: 10px;
            background: rgba(66, 64, 64, 0.377);
            margin: 0 20px;
            scroll-snap-align: center;
            user-select: none;
            transition: transform 0.5s ease;
        }
    }
}
</style>
