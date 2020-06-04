<template>
    <div class="box__wrap box__wrap--padding box__wrap--block-luminaries">
        <div class="box box--column">
            <div class="box__section block-luminaries__header">
                <div class="box__section box__section--inline block-luminaries__title">
                    <h1 class="title">The Luminaries Next Door</h1>
                </div>
                <div class="block-luminaries__text">
                    <p class="text">Big minds. Deep hearts. Small attitudes.</p>
                </div>
            </div>

            <div class="box__section box__section--inline box__section--reverse block-luminaries__content">
                <div class="box__section box__section--half block-luminaries__list">
                    <div v-for="(lum, index) in luminaries" :key="index" 
                        :class="isSelected[index] ? 'block-luminaries__list-element--selected' : 'block-luminaries__list-element'"
                    >
                        <h3 class="title block-luminaries__list-element__title" @click="handleDropDown(lum.id)">{{lum.title}}</h3>
                    </div>
                    <div class="block-luminaries__list__text">
                        <p class="text">{{lum.content}}</p>
                    </div>
                </div>
                <div class="box__section box__section--half block-luminaries__slider">
                    <VueSlickCarousel 
                        :arrows="false" 
                        :dots="true" 
                        :autoplay="true" 
                        :autoplayHoverPause ="false"
                        :autoplayTimeout = 1000
                        ref="banner" 
                        class="slider--dark"
                    >
                        <div>
                             <img :src="require(`./../../../static/BlockLuminaries/${lum.images[0]}`)" class="img" alt="luminaries"/>
                        </div>
                        <div>
                             <img :src="require(`./../../../static/BlockLuminaries/${lum.images[1]}`)" class="img" alt="luminaries"/>
                        </div>
                        <div>
                             <img :src="require(`./../../../static/BlockLuminaries/${lum.images[2]}`)" class="img" alt="luminaries"/>
                        </div>
                    </VueSlickCarousel>
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
            lum:luminariesService.find(0),
            isSelected: [true, false, false]
        }
    },
    methods: {
        handleDropDown(lumId) {
            this.isSelected = [false, false, false]
            this.lum = this.luminaries.find(lum => lum.id == lumId )
            this.isSelected[lumId] = true
        }
    }
}
</script>

<style lang="scss" scoped>
    .box__wrap--block-luminaries {
        background-color: #eff2f4;
        padding-top: 135px;
        padding-bottom: 180px;
    }
    .block-luminaries__header {
        margin-bottom: 45px;
    }
    .block-luminaries__title {
        margin-bottom: -10px;
    }
    .block-luminaries__content {
        align-items: flex-start;
    }
    .block-luminaries__list-element {
        border-bottom: 1px solid $neutralColor;
        padding-left: 90px;
    }
    .block-luminaries__list-element--selected {
        background-color: $lightColor;
        margin-left: -30px;
        padding-left: 120px;
        z-index: 1;
        .block-luminaries__list-element__title {
            color: $darkColor;
        }
    }
    .block-luminaries__list-element__title:hover {
        color: $darkColor;
        cursor: pointer;
    }
    .block-luminaries__list-element__title {
        font-size: 26px;
        color: $neutralColor;
        &:hover {
            border-bottom: none;
            color: $darkColor;
            opacity: 1;
            transition: opacity .3s ease-in-out;
        }
    }
    .block-luminaries__slider {
        opacity: 1;
        transition: opacity 1s ease-in-out;
        justify-content: flex-end;
    }
    .block-luminaries__list__text {
        margin-left: 90px;
    }
</style>