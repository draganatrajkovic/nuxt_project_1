<template>
    <div class="slider__wrap">
        <div class="slider_arrow-left" @click="handleLeft"><img src="./../../static/PartsSlider/arrow_left--white.png" /></div>
        <div v-for="(element, index) in elements" :key="index" class="slider_dot">
            <!-- <img src="./../../static/PartsSlider/dot.png" /> -->
            test
        </div>
        <div class="slider_arrow-right" @click="handleRight"><img src="./../../static/PartsSlider/arrow_right--white.png" /></div>
    </div>
</template>

<script>
export default {
    methods: {
        handleLeft() {
            alert('handleLeft')
        },
        handleRight() {
            alert('handleRight')
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
    .slider_dot {
        margin: 0 5px;
    }
</style>