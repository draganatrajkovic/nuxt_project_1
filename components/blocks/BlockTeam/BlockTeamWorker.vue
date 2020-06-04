<template>
    <div class="box__section box__worker">
        <!-- problem sa dinamickim slikama kada se navodi apsolutna putanja-->
        <div class="img img--center box__worker__img">
            <img :src="require(`./../../../static/BlockTeam/${worker.img}`)" class="img">
        </div>
        <div class="box__worker__title">
            <h2 class="title text--center block-team__subtitle">{{worker.name}}</h2>
        </div>
        <div class="box__worker__position">
            <p class="text text--center box__worker__text">{{worker.positionTitle}}</p>
            <p class="text text--center box__worker__text">{{worker.positionDescription}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'worker'
    ],
}
</script>

<style lang="scss" scoped>
    .box__worker {
        width: 100%;
        margin-bottom: 115px;

    }
    .box__worker__img{
        margin-bottom: 25px;
    }
    .box__worker__title {
        margin-top: 10px;
    }
    .block-team__subtitle {
        font-size: 30px;
        margin-bottom: 5px;
    }
    .box__worker__position {
        // margin-bottom: 115px;
    }
    .box__worker__text {
        font-size: 18px;
        line-height: 14px;
    }
</style>