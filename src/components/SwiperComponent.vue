<template>
    <div class="swiper-content-container">
        <div class="swiper-container" ref="swiperContainer">
            <div class="swiper-card" ref="swiperCard1">
                <section class="swiper-card_top-section">
                    <div class="patient-status-wrap">
                        <span class="patient-status">입원</span>
                    </div>  
                    <div class="user-info-container">
                        <div class="user-info">
                            <h3 class="user-name">{{ userInfo.name }}</h3>
                            <p class="user-no">{{ userInfo.no }}</p>
                        </div>
                        <div class="user-info_detail">
                            <p class="user-info_detail-text">{{ userInfo.gender }}</p>
                            <p class="user-info_detail-text">{{ `${userInfo.age}살` }}</p>
                            <p class="user-info_detail-text">{{ userInfo.location }}</p>
                            <p class="user-info_detail-text">{{ userInfo.locationDetail }}</p>
                        </div>
                    </div>
                </section>
                <div class="swiper-navigation">
                    <p class="active-navigation"></p>
                    <p class="deactive-navigation"></p>
                </div>
            </div>
            <div class="swiper-card" ref="swiperCard2">
                <section class="swiper-card_top-section link-list-wrap">
                    <router-link :to="list.link" v-for="(list, index) in navList" :key="list" :index="index" 
                        :style="{width: `${100 / navList.length}%`}" class="nav-list"
                    >
                        {{ list.name }}
                    </router-link>
                </section>
                <div class="swiper-navigation">
                    <p class="deactive-navigation"></p>
                    <p class="active-navigation"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: { 
                name: '환자이름', 
                no: 123456798, 
                gender: '남자', 
                age: 24, 
                location: '3병동', 
                locationDetail: '301호' 
            },
            navList: [
                { name: '내 환자', link: 'DatailPage' },
                { name: '상세검색', link: 'DatailPage' },
                { name: '병동검색', link: 'DatailPage' },
                { name: '의사검색', link: 'DatailPage' },
            ],

            isDown: false,
            startX: 0,
            scrollLeft: 0,
            translateX: 0,
        };
    },
    
};
</script>

<style lang="scss" scoped>
.swiper-navigation{
    height: 20%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    column-gap: 8px;
    .active-navigation{
        width: 12px; 
        height: 5px; 
        background-color: purple; 
        border-radius: 50px;
    }
    .deactive-navigation{
        width: 5px;
        height: 5px; 
        border-radius: 50%; 
        background-color: #ffff;
    }
}

.swiper-content-container {
    width: 100%;
    height: 130px;
    overflow: hidden;
    background: #ffff;

    .swiper-container {
        width: 100%;
        height: 100%;
        padding: 0 15px;
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
            border-radius: 15px;
            background: rgba(66, 64, 64, 0.377);
            margin: 0 20px;
            scroll-snap-align: center;
            user-select: none;
            transition: transform 0.5s ease;

            .swiper-card_top-section{
                display: flex; 
                align-items: center; 
                column-gap: 10px; 
                height: 80%; 
                padding: 10px;
                .patient-status-wrap{
                    width: 15%;
                    .patient-status{
                        display: inline-block;
                        text-align: center;
                        padding: 8px 6px;
                        background: purple;
                        border-radius: 10px;
                        text-align: center;
                        font-size: 14 px;
                    }
                }
                .user-info-container{
                    width: calc(100% - 15%);
                    display: flex; 
                    flex-direction: column;
                    row-gap: 10px;

                    .user-info{
                        display: flex; 
                        align-items: center; 
                        column-gap: 10px; 
                        color: #ffff;
                        .user-name{
                            font-size: 17px;
                        }
                        .user-no{
                            font-size: 14px;
                        }
                    }

                    .user-info_detail{
                        display: flex; 
                        column-gap: 25px; 
                        align-items: center; 
                        .user-info_detail-text{
                            font-size: 13px; 
                            color: #ffff;
                            position: relative;
                            &:not(:last-child):after{
                                content: "";
                                display: inline-block;
                                width: 1px;
                                height: 100%;
                                background: #ffff;
                                position: absolute;
                                right: -13px;
                                top: 0;
                            }
                        }
                    }
                }
            }

            .link-list-wrap{
                padding: 18px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .nav-list{
                    text-align: center;
                    font-size: 14px;
                    text-decoration: none;
                    color: #ffff;
                    position: relative;
                    &:not(:last-child):after{
                        content: "";
                        display: inline-block;
                        width: 1px;
                        height: 100%;
                        background: #ffff;
                        position: absolute;
                        right: -13px;
                        top: 0;
                    }
                }
            }
        }
    }
}
</style>
