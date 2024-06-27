<template>
    <div class="side-menu-list-container">
        <div class="menu-list-title-wrap">
            <h3 class="menu-list-title">
                {{ menuList.name }}
            </h3>
        </div>
        <section :class="{['menu-list-section']:true, ['list-border']:!this.lastChild}">
            <div  v-for="(list, index) in this.menuList.lists" :key="list" :index="index" class="menu-list-wrap">
                <p class="icon-wrap">
                    <documentFile />
                </p>
                <h4 class="list-name">
                    {{ list.name }}
                </h4>
                <p class="icon-wrap arrow-icon">
                    <AngleSmallLeft />
                </p>
            </div>
        </section>
        
    </div>
</template>

<script>
import AngleSmallLeft from '@/imgs/icons/angle-small-left.vue';
import documentFile from '@/imgs/icons/document-file.vue'


export default {
    name: 'SideMenuList',
    components: {
        documentFile,
        AngleSmallLeft
    },
    props: {
        menuList: {
            type: Array,
            default() {
                return [
                    { name: 'name' },
                ];
            }
        },
        index: {
            type: Number,
            default() {
                return null;
            }
        },
        lastChild: {
            type: Boolean,
            default() {
                return false;
            }
        }
    },
    data() {
        return {

        }
    },

}
</script>

<style lang="scss" scoped>
.list-border{
    border-bottom: 1px solid black;
}

.side-menu-list-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    .menu-list-title-wrap{
        margin: 15px;
        .menu-list-title{
            font-weight: 600;
        }
    }
    .menu-list-section{
        display: flex;
        flex-direction: column;
        margin: 0 15px;
        .menu-list-wrap{
            display: flex;
            align-items: center;
            column-gap: 10px;
            padding: 15px 0;
            &:last-child{
                padding: 15px 0 30px 0;
            }

            .list-name{
                width: 80%;
                font-size: 15px;
                font-weight: 400;
            }
            .icon-wrap{
                width: 23px;
                height: 23px;
            }
            .arrow-icon{
                transform: rotate(180deg);
            }
        }
    }
}
</style>