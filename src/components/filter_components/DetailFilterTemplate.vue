<template>
    <div class="filter-component-container">
        <section class="input-searching-filter-section">
            <label for="" class="input-searching-filter-wrap">
                <p class="input-label">검색</p>
                <input class="searching-input" type="text" name="" id="" placeholder="환자명 또는 등록번호 검색">
            </label>
        </section>

        <section class="drop-down-filter-section">
            <div class="drop-down-filter-wrap">
                <p class="drop-down-label">병동</p>
                <div class="drop-down-wrap">
                    <FilterDropDown />
                </div>
            </div>
        </section>

        <section class="filter-section">
            <p class="rotate-icon refresh-button">
                <rotateLeft />   
            </p>

            <p class="divide-line"></p>

            <div class="button-wrap" style="display: flex; align-items: center; column-gap: 5px; overflow: scroll;">
                <button style="background-color: transparent; border: 1px solid rgba(66, 64, 64, 0.377); padding: 5px 15px; border-radius: 40px;">병동 -</button>
                <button style="background-color: transparent; border: 1px solid rgba(66, 64, 64, 0.377); padding: 5px 15px; border-radius: 40px;">병실 -</button>
            </div>
        </section>
    </div>
</template>

<script>
import rotateLeft from '@/imgs/icons/rotate-left.vue';
import FilterDropDown from '@/components/filter_components/FilterDropDown.vue';

export default {
    name: 'DetailFilterTemplate',
    components: {
        rotateLeft,
        FilterDropDown
    }
}
</script>

<style lang="scss" scoped>
@mixin section-wrap{
    width: 100%;
    padding-top: 10px;
}
@mixin label-text{
    width: 15%;
    font-size: 13px;
    text-align: center;
}
// 임시
.button-wrap{
    &::-webkit-scrollbar{
        display: none;
    }
}

.rotate-icon{
    width: 34px; 
    height: 34px; 
    display: flex; 
    align-items: center; 
    padding: 7px; 
    border-radius: 5px; 
    background-color: rgba(66, 64, 64, 0.377);
}
.filter-component-container{
    .input-searching-filter-section{
        @include section-wrap;
        .input-searching-filter-wrap{
            width: 100%;
            display: flex;
            align-items: center;
            .input-label{
                @include label-text;
            }
            .searching-input{
                width: 75%;
                border: 1px solid rgba(66, 64, 64, 0.377);
                border-radius: 5px;
                padding: 8px 7px;
            }
        }
    }

    .drop-down-filter-section{
        @include section-wrap;
        .drop-down-filter-wrap{
            width: 100%;
            display: flex;
            align-items: center;
            .drop-down-label{
                @include label-text;
            }
            .drop-down-wrap{
                width: calc(75% + 16px);
            }

        }
    }

    .filter-section{
        display: flex;
        align-items: center;
        padding: 15px;
    
        .divide-line{
            width: 1px;
            height: 34px;
            background: rgba(66, 64, 64, 0.377);
            margin: 0 10px;
        }
    }
}

</style>