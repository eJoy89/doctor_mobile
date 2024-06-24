<template>
    <swiper
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide>
            <div class="card-container">
                <div class="card-top-container">
                    <div>입원</div>
                    <div>
                        <div>환자 이름</div>
                        <div>환자 정보</div>
                    </div>
                </div>
                <div class="card-bottom-container">아래</div>
            </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    name: 'SwiperL',
    components: {
        Swiper,
        SwiperSlide,
    },
}
</script>

<style lang="scss" scoped>
@import './swiper.css';
.swiper-slide{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    .card-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .card-top-container{
            height: 85%;
            display: flex;
            align-items: center;
        }
        .card-bottom-container{
            height: 15%;
            text-align: center;
            background: coral;
        }
    }
}
</style>
