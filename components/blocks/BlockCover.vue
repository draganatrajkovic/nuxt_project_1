<template>
    <div class="box__wrap box__wrap--block-cover">
        <div class="box">
            <div class="box__section block-cover__content">
                <div class="block-cover__content__title__wrap">
                    <h1 class="title block-cover__content__title">The most cost-efficient way to build a light? <br />Once.</h1> 
                </div>
                <div class="btn block-cover__content__btn" @click="handleMoreOnThat">
                    <div class="btn__icon"></div>
                    <div class="btn__text"><p>More on that</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleMoreOnThat() {
            console.log('handleMoreOnThat')
        }
    }
}
</script>

<style lang="scss" scoped>
    .box__wrap--block-cover {
        background-image: url("./../../static/BlockCover/bg.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        height: 765px;
    }
    .block-cover__content {
        width: 60%;
        display: flex;
        justify-content: flex-start;
        padding-top: 150px;
    }
    .block-cover__content__title__wrap {
        margin-bottom: 18px;
    }
    .block-cover__content__btn {
        // padding: 7px 15px;
        width: 140px;
    }

</style>