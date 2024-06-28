<template>
    <section class="searching-input-section">
        <h3 class="searching-input-title" v-if="!this.noLabel">{{ label }}</h3>
        <input class="searching-input" :style="{width: !this.noLabel ? '80%' : '100%'}" type="text" name="" id="" placeholder="환자명 또는 등록번호 검색" ref="searchInput">
    </section>
</template>

<script>
export default {
    name: 'FilterSearchInput',
    data() {
        return {

        }
    },
    props: {
        noLabel: {
            type: Boolean,
            default() {
                return false;
            }
        },
        label: {
            type: String,
            default() {
                return 'label'
            }
        },
    },
    mounted() {
        document.addEventListener('scroll', this.handleScroll, true);
    },
    beforeUnmount() {
        document.removeEventListener('scroll', this.handleScroll, true);
    },
    methods: {
        handleScroll() {
            if (this.$refs.searchInput === document.activeElement) {
                this.$refs.searchInput.blur();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.searching-input-section{
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 10px;
    .searching-input-title{
        width: 12%;
        font-size: 14px;
        font-weight: 600;
        text-align: right;
    }
    
    .searching-input{
        width: 100%;
        border: 1px solid rgba(66, 64, 64, 0.377);
        border-radius: 5px;
        padding: 10px 7px;
        box-sizing: border-box;
    }
}
</style>