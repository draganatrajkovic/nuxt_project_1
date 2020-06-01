<template>
    <div class="box__wrap box__wrap--padding box__wrap--luminaries">
        <div class="box box--column">
            <div class="box__section">
                <div class="box__section box__section--inline">
                    <h1 class="title">The Luminaries Next Door</h1>
                    <Slider />
                </div>
                <div>
                    <p class="text">Big minds. Deep hearts. Small attitudes.</p>
                </div>
            </div>
            <div class="box__section box__section--inline">
                <div class="box__img--half img">
                    <img src="~/static/BlockLuminaries/bg.png" alt="luminaries_img"/>
                </div>
                <div class="box__section box__section--half">
                    <div v-for="(lum, index) in luminaries" :key="index">
                        <div class="list-element--no-bullets block-luminaries__list-element" @click="handleDropDown(lum.id)">
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
import Slider from '~/components/parts/Slider'
import {luminariesService} from './LuminariesService'
export default {
    components: {
        Slider
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
    }
    .block-luminaries__list-element {
        padding: 2px;
        &:hover {
            background-color: $lightColor;
            cursor: pointer;
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