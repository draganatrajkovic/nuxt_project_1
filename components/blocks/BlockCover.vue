<template>
    <div class="box__wrap box__wrap--cover">
        <div class="box">
            <div class="box__section cover__content">
                <div class="box__section--half ">
                    <h1 class="title title--cover">The most cost-efficient way to build a light? Once.</h1> 
                </div>
                <div class="btn" @click="handleMoreOnThat">
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
    .box__wrap--cover {
        background-image: url("./../../static/BlockCover/bg.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        height: 765px;
    }
    .cover__content {
        height: 100%;
        // display: flex;
        // align-items: center;
    }

</style>