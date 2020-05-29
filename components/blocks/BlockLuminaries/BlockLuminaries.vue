<template>
    <div class="box__wrap box__wrap--luminaries">
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
                <div class="box__img--half">
                    <img src="~/static/BlockLuminaries/bg.png" alt="luminaries_img"/>
                </div>
                <div class="box__section box__section--half">
                    <div v-for="(lum, index) in luminaries" :key="index">
                        <div class="list-element--no-bullets" @click="handleDropDown(lum.id)">
                            <button>{{lum.title}}</button>
                        </div>
                    </div>
                    <div>
                        <p>{{lum.content}}</p>
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
    .list-element--no-bullets :hover {
        background-color: yellow;
        cursor: pointer;
    }
</style>