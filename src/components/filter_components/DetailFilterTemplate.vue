<template>
    <div class="filter-component-container">
        <section style="display: flex; width: 100%; align-items: center; column-gap: 10px; padding: 8px 0 8px 5px;" v-if="filterComponent !== null">
            <transition name="fade" mode="out-in">
                <component
                    :is="filterComponent"
                    :label="filterText.text1"
                    :dropDownList="selectedList"
                    :key="filterComponentSet.index"
                />
            </transition>
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
import FilterSearchInput from '@/components/filter_components/FilterSearchInput.vue';

export default {
    name: 'DetailFilterTemplate',
    components: {
        rotateLeft,
        FilterDropDown,
        FilterSearchInput
    },
    props: {
        filterComponentSet: {
            type: Object,
            default() {
                return {
                    name: '',
                    index: 0
                };
            }
        }
    },
    data() {
        return {
            filterComponent: 'FilterSearchInput',
            wardList: [
                { name: '1병동', link: '', selected: true },
                { name: '2병동', link: '', selected: false },
                { name: '3병동', link: '', selected: false },
                { name: '4병동', link: '', selected: false },
                { name: '5병동', link: '', selected: false },
            ],
            departmentList: [
                { name: '신경외과', link: '', selected: true },
                { name: '산부인과', link: '', selected: true },
                { name: '정형외과', link: '', selected: true },
                { name: '내과', link: '', selected: true },
                { name: '치과', link: '', selected: true },
            ]
        }
    },
    computed: {
        filterText() {
            if (this.filterComponentSet.index === 1) {
                return { text1: '검색' }
            } else if (this.filterComponentSet.index === 2) {
                return { text1: '병동' }
            } else if (this.filterComponentSet.index === 3) {
                return { text1: '진료과', text2: '의사' }
            } else {
                return ''
            }
        },
        selectedList() {
            if (this.filterComponentSet.index === 2) {
                return this.wardList;
            } else if (this.filterComponentSet.index === 3) {
                return this.departmentList;
            } else {
                return [];
            }
        }
    },
    watch: {
        filterComponentSet: {
            handler(newVal) {
                if (newVal.index === 1) {
                    this.filterComponent = 'FilterSearchInput';
                } else if (newVal.index === 2) {
                    this.filterComponent = 'FilterDropDown';
                } else if (newVal.index === 3) {
                    this.filterComponent = 'FilterDropDown';
                } else {
                    this.filterComponent = null;
                }
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin section-wrap {
    width: 100%;
    padding-top: 10px;
}
@mixin label-text {
    width: 15%;
    font-size: 13px;
    text-align: center;
}
// 임시
.button-wrap {
    &::-webkit-scrollbar {
        display: none;
    }
}

.rotate-icon {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    padding: 7px;
    border-radius: 5px;
    background-color: rgba(66, 64, 64, 0.377);
}
.filter-component-container {
    .input-searching-filter-section {
        @include section-wrap;
        .input-searching-filter-wrap {
            width: 100%;
            display: flex;
            align-items: center;
            .input-label {
                @include label-text;
            }
        }
    }

    .drop-down-filter-section {
        @include section-wrap;
        .drop-down-filter-wrap {
            width: 100%;
            display: flex;
            align-items: center;
            .drop-down-label {
                @include label-text;
            }
            .drop-down-wrap {
                width: calc(75% + 16px);
            }
        }
    }

    .filter-section {
        display: flex;
        align-items: center;
        padding: 15px;

        .divide-line {
            width: 1px;
            height: 34px;
            background: rgba(66, 64, 64, 0.377);
            margin: 0 10px;
        }
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
