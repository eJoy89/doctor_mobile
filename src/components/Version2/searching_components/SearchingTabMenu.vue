<template>
    <div class="tab-nav-container">
        <nav class="tab-nav">
            <ol class="tab-nav-wrap">
                <li v-for="(list, index) in tabMenuList" :key="list.name" :index="index" class="tab-list">
                    {{ list.name }}
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'SearchingTabMenu',
    props: {
        tabMenuList: {
            type: Array,
            default() {
                return [
                    { name: '내 환자', link: '' },
                    { name: '환자명/등록번호', link: '' },
                    { name: '병동/병실', link: '' },
                    { name: '진료의', link: '' },
                    
                    { name: '병동/병실', link: '' },
                    { name: '진료의', link: '' },
                    { name: '병동/병실', link: '' },
                    { name: '진료의', link: '' },
                ];
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.tab-nav-container {
    width: 100%;
    padding: 15px 0 ;
    background-color: transparent;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    .tab-nav {
        width: 100%;
        overflow: scroll;
        ::-webkit-scrollbar {
            display: none;
        }

        .tab-nav-wrap {
            width: 100%;
            display: flex;
            column-gap: 25px;
            .tab-list {
                font-weight: 400;
                display: inline-block;
                text-align: center;
                white-space: nowrap;
                flex-shrink: 0;
                cursor: pointer;
            }
        }
    }

}
</style>
