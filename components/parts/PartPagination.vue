<template>
    <div class="box__wrap">
        <div class="box--pagination">
            <div class="arrow left__arrow" @click="handlePrev"></div>
            <div class="pagination__numbers box box--inline">
                <ul v-for="(num, index) in pages" :key="index" class="pagination__number">
                    <li class="pagination__number__li">
                        <p class="text">{{num}}</p>
                    </li>
                </ul>
            </div>
            <div class="arrow right__arrow" @click="handleNext"></div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    methods: {
        handlePrev() {
            console.log('handlePrev')
        },
        handleNext() {
            console.log('handleNext')
        }
    }
}
</script>

<style lang="scss" scoped>
    .box--pagination {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .arrow {
        width: 71px;
        height: 71px;
        &:hover {
            cursor: pointer;
        }
    }
    .left__arrow {
        background: url('./../../static/PartsSlider/arrow_left--dark.png') no-repeat;
    }
    .left__arrow:hover {
        background: url('./../../static/PartsSlider/arrow_left--dark_hover.png') no-repeat;
    }
    .right__arrow {
        background: url('./../../static/PartsSlider/arrow_right--dark.png') no-repeat;
    }
    .right__arrow:hover {
        background: url('./../../static/PartsSlider/arrow_right--dark_hover.png') no-repeat;
    }
    .pagination__numbers {
        padding: 0 30px;
    }
    .pagination__number {
        padding: 0;
        margin: 0 5px;

    }
    .pagination__number__li {
        list-style-type: none;
    }
    .text {
        font-size: 16px;
        color: #c6c9d1;
        &:hover {
            color: $darkColor;
            font-weight: bold;
            cursor: pointer;
        }
    }
</style>