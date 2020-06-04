<template>
    <div class="box__wrap box__wrap--padding box__wrap--luminaries">
        <div class="box box--column">
            <div class="box__section luminaries__header">
                <div class="box__section box__section--inline luminaries__title">
                    <h1 class="title">The Luminaries Next Door</h1>
                </div>
                <div class="luminaries__text">
                    <p class="text">Big minds. Deep hearts. Small attitudes.</p>
                </div>
            </div>

            <div class="box__section box__section--inline box__section--reverse luminaries__content">
                <div class="box__section box__section--half luminaries__list">
                    <div v-for="(lum, index) in luminaries" :key="index" 
                        :class="isSelected[index] ? 'luminaries__list-element--selected' : 'luminaries__list-element'"
                    >
                        <h3 class="title luminaries__list-element__title" @click="handleDropDown(lum.id)">{{lum.title}}</h3>
                    </div>
                    <div class="luminaries__list__text">
                        <p class="text">{{lum.content}}</p>
                    </div>
                </div>
                <div class="box__section box__section--half luminaries__slider">
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
    .box__wrap--luminaries {
        background-color: #eff2f4;
        padding-top: 135px;
        padding-bottom: 180px;
    }
    .luminaries__header {
        margin-bottom: 45px;
    }
    .luminaries__title {
        margin-bottom: -10px;
    }
    .luminaries__list-element {
        border-bottom: 1px solid $neutralColor;
        padding-left: 90px;
    }
    .luminaries__list-element--selected {
        background-color: $lightColor;
        margin-left: -30px;
        padding-left: 120px;
        z-index: 1;
        .luminaries__list-element__title {
            color: $darkColor;
            margin: 20px 0;
        }
    }
    .luminaries__list-element__title:hover {
        color: $darkColor;
        cursor: pointer;
    }
    .luminaries__list-element__title {
        font-size: 26px;
        color: $neutralColor;
        &:hover {
            border-bottom: none;
            color: $darkColor;
            opacity: 1;
            transition: opacity .3s ease-in-out;
        }
    }
    .luminaries__slider {
        opacity: 1;
        transition: opacity 1s ease-in-out;
        justify-content: flex-end;
    }
    .luminaries__list__text {
        margin-left: 90px;
    }
</style>