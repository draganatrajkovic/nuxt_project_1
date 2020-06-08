<template>
    <div class="box__wrap box__wrap--block-lets-talk">
        <div class="box">
            <div class="box__section box__section--half block-lets-talk__content">
                <div class="block-lets-talk__title">
                    <h1 class="title title--cover--white">If you don’t find the perfect fixture,we’ll create it!</h1>
                </div>
                <div class="btn block-lets-talk__btn" @click="handleLetsTalk">
                    <div class="btn__icon"></div>
                    <div class="btn__text"><p>Let's talk</p></div>
                </div>
            </div>
            <div class="block-lets-talk__img">
                <img src='~/static/listing/BlockProducts/lets-talk_bg.png'/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleLetsTalk() {
            console.log('handleLetsTalk')
        }
    }
}
</script>

<style lang="scss" scoped>
    .box__wrap--block-lets-talk {
        background-color: $mainColor;
        padding-bottom: 80px;
    }
    .block-lets-talk__content {
        width: 60%;
        justify-content: flex-start;
        padding-top: 180px;
    }
    .block-lets-talk__text {
        margin-top: 10px;
    }
    .block-lets-talk__btn {
        // justify-content: flex-start;
        margin-top: 110px;
        width: 117px;
        padding: 0;
    }
    .block-lets-talk__img {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        margin-right: -105px;
    }

</style>