<template>
    <div class="box__product__wrap box__section box__section--inline">

        <div class="box__product box__section" :style="{'background-image': 'url(' + require(`./../../../../static/listing/BlockProducts/${product.img}`) + ')'}">

            <div class="box__product__top box__section box__section--inline">
                <div class="box__product__top__title box__section box__section--half">
                    <div>
                        {{product.title}}
                    </div>
                    <div>
                        <p class="text text--white text__product0quality">{{product.productQuallity}}</p>
                    </div>
                </div>
                <div class="box__product__top__light-source box__section box__section--half">
                    {{product.ligthSource}}
                </div>
            </div>

            <div class="box__product__buttons box__section">
                <div class="box__product__button"> 
                    <div v-if="expandedButtonSpec" @click="handleexpandedButtonSpec" class="box__product__button__ring box__product__button__ring--expanded">
                        <span>View Specs</span>
                        <img src="~/static/listing/BlockProducts/icon_specs--papers.png" />
                    </div>
                    <div v-if="!expandedButtonSpec" class="box__product__button__ring" @click="handleexpandedButtonSpec">
                        <img src="~/static/listing/BlockProducts/icon_specs--papers.png" />
                    </div>
                </div>

                <div class="box__product__button"> <!--add button-->
                    <div v-if="expandedButtonAdd" @click="handleExpandedButtonAdd" class="box__product__button__ring box__product__button__ring--expanded">
                        <span>Added</span>
                        <img src="~/static/listing/BlockProducts/icon_add--folder.png" />
                    </div>
                    <div v-if="!expandedButtonAdd" class="box__product__button__ring" @click="handleExpandedButtonAdd">
                        <img src="~/static/listing/BlockProducts/icon_add--folder.png" />
                    </div>
                </div>

            </div>

            <div class="box__product__bottom box__section box__section--inline">
                <div class="box__product__bottom__diffuser-type box__section box__section--inline box__section--half">
                    <div class="box__product__bottom__icon">
                        <img src="~/static/listing/BlockProducts/icon_diffuser.png" />
                    </div>
                    {{product.diffuserType}}
                </div>
                <div class="box__product__bottom__material box__section box__section--inline box__section--half">
                    <div class="box__product__bottom__icon">
                        <img src="~/static/listing/BlockProducts/icon_material.png" />
                    </div>
                    {{product.material}}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:[
        'product'
    ],
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
    .box__product__wrap {
        width: 100%;
    }
    .box__product {
        padding: 100px 50px;
        background-color: #eff2f4;
        background-repeat:no-repeat;
        background-position: center;
        background-origin: content-box;
        &:hover {
            // background-image: linear-gradient(to bottom left, #272339, $darkColor);
            background-color: #272339;
            color: white;
            cursor: pointer;
            .box__product__bottom__icon img {
                filter:invert(100%);
            }
        }
    }

    .text__product0quality {
        font-size: 14px;
        background-color: #d78772;
        border-radius: 5px;
    }

    .box__product__top__light-source {
        flex-direction: row;
    }
    // .box__product__top {
    //     width: 100%;
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: flex-start;
    // }
    // .box__product__top__title {
    //     width: 50%;
    //     display: flex;
    // }

    .box__product__bottom__diffuser-type {
        justify-content: flex-start
    }

    .box__product__bottom__material {
        justify-content: flex-start;
    }
    .box__product__button {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
    }
    .box__product__button__ring {
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
    .box__product__button__ring--expanded {
        width: 150px;
    }


    .box__product__bottom__icon {
        margin-right: 10px;
    }
</style>