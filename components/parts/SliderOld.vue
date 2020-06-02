<template>
    <div class="slider__wrap">
        <div class="slider__arrow slider__arrow-left" @click="handleLeft"></div>
        <div v-for="(dot, index) in 3" :key="index">
            <div v-if="selected===(index+1)" class="slider_dot"><img src="./../../static/PartsSlider/dot--white_selected.png" /></div>
            <div v-else class="slider_dot"><img src="./../../static/PartsSlider/dot.png" /></div>
        </div>
        <div class="slider__arrow slider__arrow-right" @click="handleRight"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 1
        }
    },
    methods: {
        handleLeft() {
            if (this.selected === 0) {
                this.selected = 3
            } if (this.selected === 1) {
                this.selected = 3
            } else {
                this.selected -= 1
            }
        },
        handleRight() {
            if (this.selected === 3) {
                this.selected = 1
            } else {
                this.selected += 1
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .slider__wrap {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .slider__arrow {
        width: 71px;
        height: 71px;
        &:hover {
            cursor: pointer;
            transition: 0.3s;
        }
    }
    .slider__arrow-left {
        background: url('./../../static/PartsSlider/arrow_left--white.png') no-repeat center center;
        &:hover {
            background: url('./../../static/PartsSlider/arrow_left--white_hover.png') no-repeat center center;
        }
    }
    .slider__arrow-right {
        background: url('./../../static/PartsSlider/arrow_right--white.png') no-repeat center center;
        &:hover {
            background: url('./../../static/PartsSlider/arrow_right--white_hover.png') no-repeat center center;
        }
    }
    .slider_dot {
        width: 7px;
        height: 6px;
        margin: 0 5px;
        display: flex;
        justify-content: center;
        align-content: center;
        // background: url('./../../static/PartsSlider/dot.png') no-repeat center center;
    }
    .slider_dot--selected {
        // background: url('./../../static/PartsSlider/dot--white_selected.png') no-repeat center center;
    }
</style>