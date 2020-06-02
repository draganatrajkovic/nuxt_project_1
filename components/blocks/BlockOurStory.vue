<template>
    <div class="box__wrap box__wrap--padding box__wrap--our-story">
        <div class="box">
            <div class="box__section">
                <!-- <h1 class="title title--white text--center">Our Story</h1>
                <div class="img img--center block-our-story__img">
                    <img src="~/static/BlockOurStory/bg.png" alt="our_story_img"/>
                </div> -->
                <VueSlickCarousel 
                    :arrows="true" 
                    :dots="true" 
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
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: {
        VueSlickCarousel
    }
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

</style>