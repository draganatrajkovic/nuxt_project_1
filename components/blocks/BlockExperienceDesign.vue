<template>
    <div class="box__wrap box__wrap--experience-design">
        <div class="box">

            <div class="box__section box__section--half experience-design__content">
                <div class="experience-design__title">
                    <h1 class="title">Experience design in a new light</h1>
                </div>
                <p class="text experience-design__text">Contact us to get started</p>
                <div class="btn btn--referse experience-design__btn" @click="handleLetsTalk">
                    <div class="btn__icon"></div>
                    <div class="btn__text"><p>Let's talk</p></div>
                </div>
            </div>

            <div class="experience-design__img">
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
    .box__wrap--experience-design {
        background-color: $lightColor;
        padding-bottom: 12px;
    }
    .experience-design__content {
        width: 35%;
        justify-content: flex-start;
        padding-top: 130px;
    }
    .experience-design__text {
        margin-top: 10px;
    }
    .experience-design__btn {
        margin-top: 38px;
        width: 117px;
    }
    .experience-design__img {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        margin-right: -105px;
    }

</style>