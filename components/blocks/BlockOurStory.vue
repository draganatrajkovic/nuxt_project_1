<template>
    <div class="box__wrap box__wrap--padding box__wrap--our-story">
        <div class="box">
            <div class="box__section">
                <h1 class="title title--white text--center">Our Story</h1>
                <div class="img img--center block-our-story__img">
                    <img src="~/static/BlockOurStory/bg.png" alt="our_story_img"/>
                </div>
                <VueSlickCarousel 
                    :arrows="false" 
                    :dots="false" 
                    :autoplay="true" 
                    :autoplayHoverPause ="false"
                    ref="banner" 
                    class="slider--white"
                >
                    <div>
                        <h2 class="title title--white block-our-story__subtitle text--center">Doing the Bright Thing Since 1979</h2>
                        <p class="text text--white text--center">It all began with a thermistor disk. The year was 1979 and, at 
                            out-of-the-way tradeshow, our president discovered a technology 
                            that would extend the life of an incandescent bulb, while simultaneously 
                            reducing labor cost. He adopted this technology, and established a 
                            manufacturing plant in Trenton, NJ, to bring this innovative concept 
                            to life through commercial applications.</p>
                    </div>
                    <div>
                        <h2 class="title title--white block-our-story__subtitle text--center">What is Lorem Ipsum</h2>
                        <p class="text text--white text--center">Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div>
                        <h2 class="title title--white block-our-story__subtitle text--center">Why do we use it</h2>
                        <p class="text text--white text--center">It is a long established fact that a reader will be distracted by 
                            the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has 
                            a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it 
                            look like readable English.</p>
                    </div>
                </VueSlickCarousel>
                <div class="slider__arrows box__section box__section--inline">
                    <a href="javascript:;" @click="slickPrev" class=" slider__arrow slider__arrow-left"></a>
                    <div v-for="(dot, index) in 3" :key="index">
                        <div v-if="selected===(index+1)" class="slider_dot"><img src="./../../static/PartsSlider/dot--white_selected.png" /></div>
                        <div v-else class="slider_dot"><img src="./../../static/PartsSlider/dot.png" /></div>
                    </div>
                    <a href="javascript:;" @click="slickNext" class="slider__arrow slider__arrow-right"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            selected: 1
        }
    },
    methods: {
        slickNext() {
            this.$refs.banner.next();
            if (this.selected === 3) {
                this.selected = 1
            } else {
                this.selected += 1
            }
        },
        slickPrev() {
            this.$refs.banner.prev();
            if (this.selected === 0) {
                this.selected = 3
            } if (this.selected === 1) {
                this.selected = 3
            } else {
                this.selected -= 1
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .box__wrap--our-story {
        background-color: $darkColor;
        padding-bottom: 255px;
    }
    .block-our-story__subtitle {
        font-size: 24px;
    }
    .block-our-story__img {
        margin-bottom: 10px;
    }
    .block-our-story__subtitle {
        margin-bottom: 25px;
    }
    .slider__arrows {
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
    }
</style>