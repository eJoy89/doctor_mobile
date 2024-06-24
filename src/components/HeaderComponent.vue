<template>
    <header class="app-header" :style="{overflow: isSideMenu ? '' : 'hidden'}">
        <div class="header-wrap">
            <p @click="activeSideMenu">햄</p>
            <h2>{{ this.headerTitle }}</h2>
            <p>Q</p>
        </div>
    
    </header>
</template>

<script>

export default {
    name: 'HeaderComponent',
    components: {
    },
    data() {
        return {
            headerTitle: '환자동의서',
            isSideMenu: false
        }
    },
    methods: {
        activeSideMenu() {
            this.$emit('activeSideMenu', true)
        }
    }
}
</script>

<style lang="scss" scoped>
.app-header{
    width: 100%;
    position: relative;
    .header-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 20px;
        h2{
            font-size: 20px;
        }
    }
}
</style>