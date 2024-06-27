<template>
    <div class="user-card-container">
        <section class="user-info-section">
            <h2 class="user-name">{{ this.userInfo.name }}</h2>
            <span class="belong-wrap">
                <p class="belong-text">{{ this.userInfo.hp }}</p>
                <p class="divide-line"></p>
                <p class="belong-text">{{ this.userInfo.dp }}</p>
            </span>
        </section>
        <section class="log-out-section">
            <div class="button-wrap">
                <button class="log-out-button">로그아웃</button>
            </div>
        </section>
        
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: {
        userInfo: {
            type: Object,
            default() {
                return {
                    name: '김간호사',
                    hp: 'NGTech 병원',
                    dp: '신장내과'
                }
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
.user-card-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px 20px;
    .user-info-section{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        .user-name{
            font-size: 25px;
        }
        .belong-wrap{
            display: flex;
            align-items: center;
            column-gap: 5px;
            .belong-text{
                font-size: 13px;
            }
            .divide-line{
                width: 1px;
                height: 15px;
                background: #000000;
            }
        }
    }
    .log-out-section{
        display: flex;
        align-items: center;
        justify-content: center;
        .button-wrap{
            .log-out-button{ 
                padding: 7px 10px;
                border-radius: 20px;
                border: 1px solid purple;
                background: transparent;
                color: purple;
                font-size: 12px;
            }
        }
    }
}
</style>