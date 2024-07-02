<template>
    <div class="searching-input-component">
        <p class="icon-wrap">
            <searchIcon />
        </p>
        <label for="searchingInput" class="searching-input-label">
        </label>

        <input id="searchingInput" type="text" placeholder="화자명/등록번호 검색" class="searching-input">
    </div>
</template>

<script>
import searchIcon from '@/imgs/icons/search-icon.vue'


export default {
    name: 'SearchingInput',
    components: {
        searchIcon
    }
}
</script>

<style lang="scss" scoped>
.searching-input-component{
    height: 40px;
    position: relative;
    border-radius: 50px;
    padding: 10px;
    border: 1px solid gray;
    background-color: #ffff;
    .icon-wrap{
        width: 18px;
        height: 18px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .searching-input-label{
        width: 100%;
        position: absolute;
    
    }
    .searching-input{
        width: 80%;
        position: absolute;
        left: 40px;
        top: 50%;
        transform: translate(0, -50%);
        border: none;
    }
}
</style>