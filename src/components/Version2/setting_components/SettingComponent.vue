<template>
    <div class="setting-container">
        <header class="setting-header-wrap">
            <p style="width: 20px;">
                <angleSmallLeft />
            </p>
            <h3 class="header-title">설정</h3>
        </header>

        <section class="nav-section">
            <nav class="nav-wrap">
                <ol class="nav-list-container">
                    <li v-for="(list, index) in lists" :key="list" :index="index" class="nav-list" 
                        :style="{borderBottom: lists.length - 1 !== index  ? '1px solid black' : ''}"
                    >
                        <div class="left-box">
                            <component :is='list.icon' style="width: 32px;"></component>
                            <span class="menu-info">
                                <p class="menu-name">{{ list.name }}</p>
                                <p class="menu-ds">{{ list.ds }}</p>
                            </span>
                        </div>
                        <p style="width: 24px; transform: scaleX(-1);">
                            <angleSmallLeft />
                        </p>
                    </li>
                </ol>
            </nav>
        </section>
    </div>
</template>

<script>
import angleSmallLeft from '@/imgs/icons/angle-small-left.vue';
import appsIcon from '@/imgs/icons/apps-icon.vue';
import userIcon from '@/imgs/icons/user-icon.vue';


export default {
    name: 'SettingComponent',
    components: {
        angleSmallLeft,
        appsIcon,
        userIcon
    },
    props: {
        lists: {
            type: Array,
            default() {
                return [
                    { name: '메뉴', icon: 'appsIcon', ds: '메인 메뉴를 관리 할 수 있습니다.' },
                    { name: '환자 정보', icon: 'userIcon', ds: '환자 정보를 사용자에 맞춰 다양하게 설정할 수 있습니다.' },
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.setting-container{
    width: 100%;
    height: 100vh;
    background: red;
    padding: 0 20px;

    .setting-header-wrap{
        display: flex;
        align-items: center;
        column-gap: 15px;
        padding: 20px 0;

        .header-title{
            font-size: 22px;
        }
    }

    .nav-section{
        .nav-wrap{
            .nav-list-container{
                .nav-list{
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between;
                
                    .left-box{
                        display: flex; 
                        align-items: center;
                        column-gap: 15px;
                        .menu-info{
                            padding: 20px 0;
                            display: flex;
                            flex-direction: column;
                            row-gap: 5px;
                            .menu-name{
                                font-size: 18px;
                            }
                            .menu-ds{
                                font-size: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>