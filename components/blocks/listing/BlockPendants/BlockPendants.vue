<template>
    <div class="box__wrap box__wrap--block-pendants">
        <div class="box box--column">
            <div class="box__section">
                <h1 class="title">Mini Pendants</h1>
            </div>

            <div class="box__section box__section--inline list block-pendants__list">
                <ul v-for="(pendant, index) in pendants" :key="index" 
                    :class="[hiddenContent ? 'block-pendants__part block-pendants__part--selected' : 'block-pendants__part']"
                >
                    <div :class="[index < 4 
                        ? 'block-pendants__part__visible--first-row box__section box__section--inline' 
                        : 'block-pendants__part__visible box__section box__section--inline',]"
                    >
                        <div class="block-pendants__part__title">
                            <h3>{{pendant.title}}</h3>
                        </div>
                        <div class="block-pendants__part__arrow">
                            <img 
                                src="~/static/Icons/icon_arrow-bottom_drop-down.png" 
                                :class="[hiddenContent ? 'arrow-top arrow' : 'arrow-bottom arrow']"
                                alt="arrow-down" 
                                @click="handleDropDown"
                            />
                        </div>
                    </div>
                    <div v-if="hiddenContent">
                        <ul v-for="(preformance, index) in pendant.preformances" :key="index" class="block-pendants__part__hidden" >
                            <input type="checkbox" /><span>{{preformance}}</span>
                        </ul>
                    </div>
                </ul>
            </div>
            
            <div>
                tags
            </div>
        </div>
    </div>
</template>

<script>
import { pendantService } from './PendantsService'
export default {
    data() {
        return {
            pendants: pendantService.all(),
            hiddenContent: false, 
            test:''
        }
    },
    methods: {
        handleDropDown() {
            this.hiddenContent = !this.hiddenContent
        }
    }
}
</script>

<style lang="scss" scoped>
    .block-pendants__list {
        // width: 100%;
        // display: flex;
        flex-wrap: wrap;
    }
    .block-pendants__part {
        width: 20%;
        margin: 0;
        padding: 0 5px;
    }
    .block-pendants__part__visible {
        border-bottom: 1px solid $darkColor;
        align-items: center;
    }
    .block-pendants__part__visible--first-row {
        align-items: center;
        border-top: 1px solid $darkColor;
        border-bottom: 1px solid $darkColor;
    }
    .block-pendants__part__hidden {

    }
    .arrow-top {
        transform: rotate(180deg);
    }
    .arrow:hover {
        cursor: pointer;
        opacity: 0.7;
    }
    .block-pendants__part--selected {
        border: 1px solid $darkColor;
    }
    
</style>