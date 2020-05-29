<template>
    <div class="box__wrap box__wrap--experience-design">
        <div class="box">
            <div class="box__section">
                <h1 class="title">Experience design in a new light</h1>
                <p class="text">Contact us to get started</p>
                <button class="btn btn--reverse-icon" @click="handleLetsTalk">Let's talk</button>
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
        background-image: url('./../../static/BlockExperienceDesign/bg.png');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        height: 627px;
    }
</style>