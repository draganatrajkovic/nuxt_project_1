<template>
    <div class="box__wrap">
        <div class="box--pagination">
            <div class="arrow left__arrow" @click="handlePrev"></div>
            12345
            <div class="arrow right__arrow" @click="handleNext"></div>

        </div>
    </div>
</template>

<script>
export default {
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
</style>