<template>
    <div class="box__wrap box__wrap--block-pendants">
        <div class="box box--column">
            <div class="box__section">
                <h1 class="title">Mini Pendants</h1>
            </div>

            <div class="block-pendants__list">
                <ul v-for="(pendant, index) in pendants" :key="index" 
                    :class="[hiddenContent 
                        ? 'block-pendants__part__wrap '
                        : 'block-pendants__part__wrap block-pendants__part__wrap--selected' 
                    ]"
                >

                    <li class="block-pendants__part">
                        <div 
                            :class="[hiddenContent 
                                ? 'block-pendants__part__top-border block-pendants__part__top-border--selected'
                                : 'block-pendants__part__top-border' 
                            ]">
                        </div>

                        <div class="block-pendants__part__content">
                            <div :class="[hiddenContent
                                ? 'block-pendants__part__hidden box__section box__section--inline' 
                                : 'block-pendants__part__visible box__section box__section--inline'
                                ]"
                            >
                                <div class="block-pendants__part__title">
                                    <p class="text text--bold block-pendants__part__title__text">{{pendant.title}}</p>
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
                        </div>

                    </li>

                    <div v-if="hiddenContent">
                        <ul v-for="(preformance, index) in pendant.preformances" :key="index" class="block-pendants__part__hidden" >
                            <li>
                                <input class="custom-checkbox" id="custom-checkbox-2" type="checkbox" checked>
                                <label for="custom-checkbox-2">{{preformance}}</label>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
            
            <div class="box__section box__section--inline block-pendants__tags">
                <ul v-for="(tag, index) in tags" :key="index" class="block-pendants__tag">
                    <li>
                        <p class="text block-pendants__tag__text">{{tag.title}}:<span class="text--bold">{{tag.spec}}</span>
                        <span class="text--bold tag__close-button" @click="handleCloseTag(tag.id)">x</span></p>
                    </li>
                </ul>
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
            // totalPendants: pendantService.totalPendants(),
            hiddenContent: false,
            tags: [
                {id: 0, title:'Light source', spec:'Fluorescent'},
                {id: 1, title:'Finish', spec:'Gold'}
            ]
        }
    },
    methods: {
        handleDropDown() {
            this.hiddenContent = !this.hiddenContent
        },
        handleCloseTag(tagId) {
            this.tags = this.tags.filter(tag => tag.id != tagId)
        }
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
// .custom-checkbox {
//     position: absolute;
//     opacity: 0;
//     & + label {
//         position: relative;
//         cursor: pointer;
//         padding: 0;
//     }
//     // Box.
//     & + label:before {
//         content: '';
//         margin-right: 10px;
//         display: inline-block;
//         vertical-align: text-top;
//         width: 20px;
//         height: 20px;
//         background: white;
//     }
//     // Box hover
//         &:hover + label:before {
//         background: $mainColor;
//     }
//     // Box focus
//         &:focus + label:before {
//         box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
//     }
//     // Box checked
//         &:checked + label:before {
//         background: $mainColor;
//     }
//     // Checkmark. Could be replaced with an image
//     &:checked + label:after {
//         content: '';
//         position: absolute;
//         left: 5px;
//         top: 9px;
//         background: white;
//         width: 2px;
//         height: 2px;
//         box-shadow: 
//         2px 0 0 white,
//         4px 0 0 white,
//         4px -2px 0 white,
//         4px -4px 0 white,
//         4px -6px 0 white,
//         4px -8px 0 white;
//         transform: rotate(45deg);
//     }
// }

//...............tags...............
.block-pendants__tags {
    padding-top: 110px;
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