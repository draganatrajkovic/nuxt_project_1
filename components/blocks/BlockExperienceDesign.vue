<template>
    <div class="box__wrap box__wrap--block-experience-design">
        <div class="box">
            <div class="box__section box__section--half block-experience-design__content">
                <div class="block-experience-design__title">
                    <h1 class="title">Experience design in a new light</h1>
                </div>
                <p class="text block-experience-design__text">Contact us to get started</p>
                <div class="btn btn--referse block-experience-design__btn" @click="handleLetsTalk">
                    <div class="btn__icon"></div>
                    <div class="btn__text"><p>Let's talk</p></div>
                </div>
            </div>
            <div class="block-experience-design__img">
                <img src='~/static/BlockExperienceDesign/bg-img.png'/>
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
    .box__wrap--block-experience-design {
        background-color: $lightColor;
        padding-bottom: 12px;
    }
    .block-experience-design__content {
        width: 35%;
        justify-content: flex-start;
        padding-top: 130px;
    }
    .block-experience-design__text {
        margin-top: 10px;
    }
    .block-experience-design__btn {
        margin-top: 38px;
        width: 117px;
    }
    .block-experience-design__img {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        margin-right: -105px;
    }

</style>