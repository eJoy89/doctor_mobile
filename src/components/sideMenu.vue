<template>
    <div class="app-side-menu-conatiner">
        <header class="side-menu-header">
            <h2 class="side-menu-header-title">전체메뉴</h2>
            <div class="side-menu-header-icon-wrap">
                <p>S</p>
                <p @click="deactiveSideMenu">X</p>
            </div>
        </header>
        <div class="user-card-wrap">
            <section class="user-info-section">
                <h3 class="user-name">한유진</h3>
                <span class="belong-to-wrap">
                    <p>NGTech 병원</p>
                    <p>|</p>
                    <p>신장내과</p>
                </span>
            </section>
            <div class="log-out-button-wrap">
                <button class="log-out-button">로그아웃</button>
            </div>
        </div>

        <section class="side-list-section">
            <div v-for="(list, index) in sideMenuList" :key="list" :index="index" class="side-list-wrap">
                <h3>
                    {{ list.title }}
                </h3>
                <div class="sub-list-wrap">
                    <div v-for="(item, index) in list.lists" :key="item" :index="index">
                        {{ item.title }}
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'SideMenu',
    data() {
        return {
            sideMenuList: [
                { 
                    title: '환자동의서', 
                    lists: [ 
                        { title: '즐겨찾기' },
                        { title: '전체 문서' },
                        { title: '작성 문서' },
                        { title: '이미지 업로드' }, 
                    ] 
                },
                {
                    title: '전자차트',
                    lists: [
                        { title: '즐겨찾기' },
                        { title: '전체 문서' },
                        { title: '작성 문서' },
                        { title: '이미지 업로드' }, 
                    ]
                },
                {
                    title: '처방',
                    lists: [
                        { title: '환자처방' },
                        { title: '모바일 추가처방' },
                        { title: '경과기록' }, 
                    ]
                },
                {
                    title: '카덱스',
                    lists: [
                        { title: '인계사항' },
                        { title: '진료정보' },
                        { title: '간호기록' }, 
                        { title: 'MEMO' },
                        { title: '처방정보' },
                        { title: 'I/O' }, 
                        { title: '검사결과' },
                        { title: '영상검사결과' },
                        { title: 'V/S' }, 
                    ]
                },
                {
                    title: '임상관찰기록',
                    lists: [
                        { title: '입력' },
                        { title: '이력' } 
                    ]
                },
                {
                    title: '환자안전관리',
                    lists: [
                        { title: '약' },
                        { title: '주사/수액' },
                        { title: '자가약' }, 
                        { title: '채혈' },
                        { title: '수혈' }
                    ]
                },
                {
                    title: 'QPS',
                    lists: [
                        { title: '환자확인 모니터링' },
                        { title: '손위생 모니터링' },
                    ]
                },
                {
                    title: '이미지 업로드'
                }
            ]
        }
    },
    methods: {
        deactiveSideMenu() {
            this.$emit( 'deactiveSideMenu', true )
        }
    }
}
</script>

<style lang="scss" scoped>
.app-side-menu-conatiner{
    width: 100%;
    height: 100vh;
    background: lightblue;
    .side-menu-header{
        padding: 15px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: lightcoral;

        .side-menu-header-title{
            font-size: 18px;
        }
        .side-menu-header-icon-wrap{
            display: flex;
        }
    }

    .user-card-wrap{
        padding: 20px;
        align-items: center;
        justify-content: space-between;
        color: #ffff;
        background: purple;
        display: flex;
        .user-info-section{
            display: flex;
            flex-direction: column;
            .user-name{
                font-size: 18px;
            }
            .belong-to-wrap{
                font-size: 13px;
                display: flex;
                column-gap: 3px;
            }
        }
        .log-out-button-wrap{
            .log-out-button{
                padding: 5px 10px;
                border-radius: 20px;
                font-size: 12px;
                background: none;
                color: #ffff;
                border: 1px solid #ffff;
            }
        }
    }
    .side-list-section{
        .side-list-wrap{
            .sub-list-wrap{
                padding: 10px 20px;
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
        }
    }
}

</style>