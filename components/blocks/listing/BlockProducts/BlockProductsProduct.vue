<template>
    <div class="product__wrap box__section box__section--inline">

        <div 
            class="product box__section" 
            :style="{ 'background-image': 'url(' + product.fws_image + ')' }"
        >
            <div class="top-content__wrap box__section box__section--inline">
                <div class="top-content box__section ">
                    <div class="top-content__title__wrap">
                        <h1 class="top-content__title">{{product.fws_title}}</h1>
                    </div>
                    <div class="top-content__quality__wrap">
                        <div class="top-content__quality">
                            <p class="text text--white ">{{product.fws_slug}}</p>
                        </div>
                    </div>
                </div>
                <div class="top-content__source box__section">
                    <p class="text text--right text__source">{{product.fws_sku}}</p>
                </div>
            </div>

            <div class="product__buttons box__section">
                <div class="product__button"> <!--specs button-->
                    <div 
                        v-if="expandedButtonSpec" 
                        @click="handleexpandedButtonSpec" 
                        class="product__button__ring product__button__ring--expanded"
                    >
                        <span>View Specs</span>
                        <img src="~/static/listing/BlockProducts/icon_specs--papers.png" class="product__button__icon" />
                    </div>
                    <div 
                        v-if="!expandedButtonSpec" 
                        class="product__button__ring" 
                        @click="handleexpandedButtonSpec"
                    >
                        <img src="~/static/listing/BlockProducts/icon_specs--papers.png" class="product__button__icon" />
                    </div>
                </div>

                <div class="product__button"> <!--add button-->
                    <div 
                        v-if="expandedButtonAdd" 
                        @click="handleExpandedButtonAdd" 
                        class="product__button__ring product__button__ring--expanded"
                    >
                        <span>Added</span>
                        <img src="~/static/listing/BlockProducts/icon_add--folder.png" class="product__button__icon" />
                    </div>
                    <div 
                        v-if="!expandedButtonAdd" 
                        class="product__button__ring" 
                        @click="handleExpandedButtonAdd"
                    >
                        <img src="~/static/listing/BlockProducts/icon_add--folder.png" class="product__button__icon" />
                    </div>
                </div>

            </div>

            <div class="bottom-content box__section box__section--inline">
                <div class="bottom-content__diffuser box__section box__section--inline box__section--half">
                    <div class="bottom-content__icon">
                        <img src="~/static/listing/BlockProducts/icon_diffuser.png" />
                    </div>
                    <p class="text">{{product['pa_base-filter']}}</p>
                </div>
                <div class="bottom-content__material box__section box__section--inline box__section--half">
                    <div class="bottom-content__icon">
                        <img src="~/static/listing/BlockProducts/icon_material.png" />
                    </div>
                    <p class="text">{{product['pa_base-filter']}}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:['product'],
    data() {
        return {
            expandedButtonAdd: false,
            expandedButtonSpec: false
        }
    },
    methods: {
        handleExpandedButtonAdd() {
            this.expandedButtonAdd = !this.expandedButtonAdd
        },
        handleexpandedButtonSpec() {
            this.expandedButtonSpec = !this.expandedButtonSpec
        }
    }
}
</script>

<style lang="scss" scoped>
    .product__wrap {
        width: 100%;
        margin-bottom: 15px;
    }
    .product {
        padding: 35px;
        background-color: #eff2f4;
        background-repeat:no-repeat;
        background-position: center;
        background-origin: content-box;
        &:hover {
            // background-image: linear-gradient(to bottom left, #272339, $darkColor);
            background-color: #272339;
            color: white;
            cursor: pointer;
            .bottom-content__icon img {
                filter:invert(100%);
            }
            .top-content__title {
                color: white;
            }
            .product__buttons {
                opacity: 1;
            }
            .text {
                color: white;
            }
        }
    }
    .top-content__wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .top-content__quality__wrap {
        display: flex;
    }
    .top-content__quality {
        background-color: #d78772;
        display: flex;

        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        padding: 0 10px;
    }

    .top-content__source {
        flex-direction: row;
        justify-content: flex-end;
        text-align: right;
        padding: 0;
        margin: 0;
    }
    .top-content__title {
        font-size: 30px;
        font-family: 'Geogrotesque';  
        margin: 0;
        font-weight: bold;
        color: $mainColor;
    }

    .bottom-content {
        margin-top: 90px;
        width: 100%;
    }
    .bottom-content__diffuser {
        justify-content: flex-start;
        align-items: center;
    }
    .bottom-content__material {
       align-items: center; 
       justify-content: flex-end;
    }

    .product__buttons {
        opacity: 0;
    }
    .product__button {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
    }
    .product__button__icon {
        margin: 10px;
    }
    .product__button__ring {
        // border: 4px solid transparent;
        // border-image: linear-gradient(to right, #ffd86a, #fff8e4, #b4e2ff);
        // border-image-slice: 1;
        // padding: 10px;
        // border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 55px;
        height: 55px;
        border: double 4px transparent;
        border-radius: 80px;
        background-image: linear-gradient(#272339, #272339), linear-gradient(to right, #ffd86a, #fff8e4, #b4e2ff);
        background-origin: border-box;
        background-clip: content-box, border-box;
        &:hover {
            box-shadow:0 0 15px white;
        }
    }
    .product__button__ring--expanded {
        width: 150px;
    }
    .bottom-content__icon {
        margin: 0 5px;
    }
    .text {
        font-size: 14px;
        letter-spacing: 0;
        padding: 0;
        margin: 0;
    }
</style>