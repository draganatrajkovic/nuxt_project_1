<template>
    <div class="box__wrap box__wrap--block-pendants">
        <div class="box box--column">
            <div class="box__section">
                <h1 class="title">Mini Pendants</h1>
            </div>

            <div class="block-pendants__list">
                <ul v-for="(pendant, index) in pendants" :key="index" 
                    :class="[pendant.isSelected 
                        ? 'block-pendants__part__wrap '
                        : 'block-pendants__part__wrap block-pendants__part__wrap--selected' 
                    ]"
                >

                    <li class="block-pendants__part">
                        <div 
                            :class="[pendant.isSelected 
                                ? 'block-pendants__part__top-border block-pendants__part__top-border--selected'
                                : 'block-pendants__part__top-border' 
                            ]">
                        </div>

                        <div class="block-pendants__part__content">
                            <div :class="[pendant.isSelected
                                ? 'block-pendants__part__hidden box__section box__section--inline' 
                                : 'block-pendants__part__visible box__section box__section--inline'
                                ]"
                            >
                                <div class="block-pendants__part__title">
                                    <p class="text text--bold block-pendants__part__title__text">{{showName(pendant.name)}}</p>
                                </div>
                                <div class="block-pendants__part__arrow">
                                    <img 
                                        src="~/static/Icons/icon_arrow-bottom_drop-down.png" 
                                        :class="[pendant.isSelected ? 'arrow-top arrow' : 'arrow-bottom arrow']"
                                        alt="arrow-down" 
                                        @click="handleDropDown(pendant.id)"
                                    />
                                </div>
                            </div>
                        </div>

                    </li>

                    <div v-if="pendant.isSelected">
                        <ul v-for="(preformance, index) in pendant.preformances" :key="index" class="block-pendants__part__hidden" >
                            <li>
                                <label>
                                    <!-- dont'forget value in array v-model -->
                                    <input 
                                        type='checkbox'
                                        :value="preformance"
                                        v-model="selectedPerformances"
                                        @change="handleCheckbox($event)"
                                    >
                                    <span></span>
                                    {{preformance.name}}
                                </label>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
            
            <div class="box__section box__section--inline block-pendants__tags">
                <ul v-for="(tag, index) in selectedPerformances" :key="index" class="block-pendants__tag">
                    <li>
                        <p class="text block-pendants__tag__text"> 
                            {{ showName(pendants.find(pendant => pendant.preformances.find(p => p.term_id == tag.term_id)).name) }} :
                            <!-- use find(), not filter() -->
                            <span class="text--bold">{{tag.name}}</span>
                        <span class="text--bold tag__close-button" @click="handleCloseTag(tag.term_id)">x</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { pendantService } from './PendantsService'
import {  mapGetters } from 'vuex'
export default {
    data() {
        return {
            pendants: pendantService.all(),
            selectedPerformances: [],
            
        }
    },
    computed: {
        tagName(tagId) {
            // computed with arguments doesn't work
            // return this.pendants.find(pendant => pendant.preformances.find(p => p.term_id == tagId)).name
        }
    },
    watch: {
        pendants() {
            // console.log(pendants)
        }
    },
    methods: {
        handleDropDown(pendantId) {
            pendantService.isSelected(pendantId)
        },
        showName(pendantName) {
            let name = pendantName.toUpperCase().replace(/^pa_+/i, '').replace(/_/g, ' ').replace(/-/g, ' ')
            return name
        },
        handleCheckbox() {
            this.$store.commit('setSelectedPerformances', this.selectedPerformances)
            console.log(this.selectedPerformances)
        },
        handleCloseTag(tagId) {
            this.selectedPerformances = this.selectedPerformances.filter(tag => tag.term_id != tagId)
        },
    }
}
</script>

<style lang="scss" scoped>  
    .box__wrap--block-pendants {
        margin-bottom: 20px;
    }
    .block-pendants__list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 30px;
    }
    .block-pendants__part__wrap {
        width: 23%;
        display: flex;
        flex-direction: column;
        margin: 0 10px;
        padding: 0;
        margin-bottom: 12px;
        box-shadow: -8px 5px 10px lightgray, /*left and bottom*/
            5px 8px 10px lightgray; /*right and bottom*/
    }
    .block-pendants__part__wrap--selected {
        box-shadow: none;
    }
    .block-pendants__part {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .block-pendants__part__content {
        padding: 10px;
    }
    .block-pendants__part__title__text {
        font-size: 18px;
        padding: 0;
        margin: 0;
        letter-spacing: 0;
    }
    .block-pendants__part__wrap:nth-last-child(-n + 4) { //hardcoded
        padding-bottom: 10px;
        border-bottom: 1px solid $darkColor;
    }
    
    //...............top border...............
    .block-pendants__part__top-border {
        width: 100%;
        height: 4px;
        border-top: 1px solid $darkColor;
    }
    .block-pendants__part__top-border--selected {
        border-top: 4px solid transparent;
        border-image: linear-gradient(to right, #ffd86a, #fff8e4, #b4e2ff);
        border-image-slice: 1;
    }
    .block-pendants__part__visible {
        align-items: center;
    }
    .block-pendants__part__visible--last-row {
        // border-bottom: 1px solid $darkColor;
    }
    .arrow-top {
        transform: rotate(180deg);
    }
    .arrow:hover {
        cursor: pointer;
        opacity: 0.7;
    }
    

  //...............checkbox...............
ul {
    padding: 10px 20px;
} 
li {
    list-style: none;
    margin: 0;
}
label input {
    display: none; /* Hide the default checkbox */
}

/*new checkbox style */
label span {
    height: 20px;
    width: 20px;
    border: none;
    display: inline-block;
    position: relative;
    background-color: #e6e8ea;
    border-radius: 3px;
}

/* Style its checked state...with a ticked icon */
[type=checkbox]:checked + span:before {
    content: url("./../../../../static/Icons/checked--white.png");
    position: absolute;
    top: 0px;
    left: 4px;
    height: 20px;
    width: 20px;
    border-radius: 3px;
}

[type=checkbox]:checked + span {
    background-color: $darkColor;
}
//...............tags...............
.block-pendants__tags {
    padding-top: 100px;
    justify-content: flex-start;
}
.block-pendants__tag {
    background-color: #f1f4f6;
    margin: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    border: none;
}
.block-pendants__tag__text {
    font-size: 18px;
    letter-spacing: 1px;
    margin: 0;
}
.tag__close-button {
    margin-left: 10px;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
}


</style>