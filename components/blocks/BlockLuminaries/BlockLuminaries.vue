<template>
    <div class="box__wrap box__wrap--padding box__wrap--luminaries">
        <div class="box box--column">
            <div class="box__section block-luminaries__header">
                <div class="box__section box__section--inline block-luminaries__title">
                    <h1 class="title">The Luminaries Next Door</h1>
                    <!-- <VueSlickCarousel 
                        :arrows="true" 
                        :dots="true" 
                        class="slider--dark slider--dark--small"
                    > 
                        <div>test1</div>
                        <div>test2 </div>
                    </VueSlickCarousel> -->
                </div>
                <div class="block-luminaries__text">
                    <p class="text">Big minds. Deep hearts. Small attitudes.</p>
                </div>
            </div>
            <div class="box__section box__section--inline block-luminaries__content">
                <div class="box__img--half img">
                    <img src="~/static/BlockLuminaries/bg.png" alt="luminaries_img"/>
                </div>
                <div class="box__section box__section--half">
                    <div v-for="(lum, index) in luminaries" :key="index" class="list-element--no-bullets block-luminaries__list-element" >
                        <div @click="handleDropDown(lum.id)">
                            <h3 class="title block-luminaries__list-element__title">{{lum.title}}</h3>
                        </div>
                    </div>
                    <div>
                        <p class="text">{{lum.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {luminariesService} from './LuminariesService'
export default {
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            luminaries: luminariesService.all(),
            lum:luminariesService.find(1)
        }
    },
    methods: {
        handleDropDown(lumId) {
            this.lum = this.luminaries.find(lum => lum.id == lumId )
        }
    }
}
</script>

<style lang="scss" scoped>
    .box__wrap--luminaries {
        background-color: #eff2f4;
        padding-top: 130px;
        padding-bottom: 180px;
    }
    .block-luminaries__header {
        margin-bottom: 45px;
    }
    .block-luminaries__title {
        margin-bottom: -10px;
    }
    .block-luminaries__list-element {
        // padding: 0 10px;
        &:hover {
            background-color: $lightColor;
            cursor: pointer;
            opacity: 1;
            transition: opacity .3s ease-in-out;
        }
    }
    .block-luminaries__list-element:hover .block-luminaries__list-element__title {
        color: $darkColor;
    }
    .block-luminaries__list-element__title {
        font-size: 26px;
        color: $neutralColor;
        &:hover {
            color: $darkColor;
        }
    }
</style>