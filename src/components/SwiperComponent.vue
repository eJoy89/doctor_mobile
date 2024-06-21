<template>
    <div class="swiper-content-container">
        <div class="swiper-container">
            <div class="swiper-card">
                <div style="display: flex; align-items: center; column-gap: 10px; height: 80%; padding: 15px;">
                    <div>
                        <span>입원</span>
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <div style="display: flex; align-items: center; column-gap: 10px; color: #fff;">
                            <h3>환자이름</h3>
                            <p>12345678</p>
                        </div>
                        <div style="display: flex; column-gap: 10px; align-items: center;">
                            <p>남자</p>
                            <p>|</p>
                            <p>24살</p>
                            <p>|</p>
                            <p>3병동</p>
                            <p>|</p>
                            <p>301호</p>
                        </div>
                    </div>
                </div>

                <div style="height: 20%; display: flex; align-items: center; justify-content: center;">-----</div>
            </div>
            <div class="swiper-card"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
h3, p{
    margin: 0;
}
.swiper-content-container {
    width: 380px;
    height: calc(100vh - 102px);
    border: 1px solid black;
    padding-top: 100px;
    overflow: hidden;

    .swiper-container {
        width: calc(100% - 20px);
        height: 150px;
        padding: 0 10px; 
        background: lightblue;
        display: flex;
        align-items: center;
        overflow-x: auto;
        scroll-snap-type: x mandatory; 
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
            display: none;
        }

        .swiper-card {
            color: #ffff;
            display: flex;
            flex-direction: column;
            flex: 0 0 auto;
            width: calc(100% - 40px); 
            height: calc(100% - 40px); 
            border-radius: 10px;
            background: rgba(66, 64, 64, 0.377);
            margin: 0 20px; 
            scroll-snap-align: center; 
            user-select: none;
        }
    }
}
</style>
