<template>
    <div class="detail-page-list-container">
        <div class="list-wrap">
            <div class="list-header_top">
                <p class="header-List">이름</p>
                <p class="header-List">성별</p>
                <p class="header-List">주민등록번호</p>
            </div>
            <div class="list-header_bottom">
                <p class="header-List">등록번호</p>
                <p class="header-List">나이</p>
                <p class="header-List">주소</p>
            </div>
        </div>
        <div style="width: 100%; background-color: burlywood;">
            <div v-for="(list, index) in patientList" :key="list" :index="index" class="list-wrap main-list-wrap">
                <div class="list-header_top">
                    <p class="main-list">{{ list.name }}</p>
                    <p class="main-list">{{ list.gender }}</p>
                    <p class="main-list">{{ list.resident }}</p>
                </div>
                <div class="list-header_bottom">
                    <p class="main-list">{{ list.no }}</p>
                    <p class="main-list">{{ list.age }}</p>
                    <!-- <MARQUEE class="main-list" direction="left">{{ list.address }}</MARQUEE> -->
                    <p class="main-list">{{ list.address }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailPageList',
    data() {
        return {
            patientList: this.generatePatientList()
        }
    },
    methods: {
        // Test용 더미 데이터
        generatePatientList() {
            const patients = [];
            for (let i = 0; i < 13; i++) {
                    patients.push({
                    name: '이하윤',
                    no: 12345678 + i,
                    gender: '여자',
                    age: 26,
                    resident: '990101-2******',
                    address: '서울특별시 구로구 구로동 222-31번지 15층'
                });
            }
            return patients;
        }
    }
}
</script>

<style lang="scss" scoped>
.list-wrap{
    width: 100%;
    padding: 8px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    background-color: rgba(66, 64, 64); 
    position: sticky; 
    top: 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    .list-header_top, .list-header_bottom{
        display: flex;
        p, MARQUEE{
            width: calc(100% / 3);
            padding: 5px 0;
            text-align: center;
            font-size: 15px;
            overflow: hidden;
            &:last-child{
                text-align: left;
            }
        }
        .header-List{
            color: #ffff;
        }
        .main-list{
            color: #000000;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
.main-list-wrap{
    background: #ffff;
    color: #000000;
    position: unset;
}

.detail-page-list-container{
    width: 100%;
    position: relative;
}

</style>