<template>
    <div class="box__wrap box__wrap--our-story">
        <div class="box">
            <div class="box__section">
                <h1 class="title">Our Story</h1>
                <img src="~/static/BlockOurStory/bg.png" alt="our_story_img"/>
                <h2 class="block-our-story__subtitle">Doing the Bright Thing Since 1979</h2>
                <p class="text">It all began with a thermistor disk. The year was 1979 and, at 
                    out-of-the-way tradeshow, our president discovered a technology 
                    that would extend the life of an incandescent bulb, while simultaneously 
                    reducing labor cost. He adopted this technology, and established a 
                    manufacturing plant in Trenton, NJ, to bring this innovative concept 
                    to life through commercial applications.</p>
                <Slider />
            </div>
        </div>
    </div>
</template>

<script>
import Slider from '~/components/parts/Slider.vue'
export default {
    components: {
        Slider,
    }
}
</script>

<style lang="scss" scoped>

</style>