<template>
    <header class="main-header">
        <HeaderDropDown />

        <p class="icon-wrap">
            <circleUser />
        </p>
    </header>
</template>

<script>
import HeaderDropDown from '@/components/header_components/HeaderDropDown.vue';
import circleUser from '@/imgs/icons/circle-user.vue';



export default {
    name: 'HeaderTemplate',
    components: {
        HeaderDropDown,
        circleUser
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.main-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 0;

    .icon-wrap{
        width: 24px;
        height: 24px;
    }
}
</style>