<template>
    <div class="box__section box__section--worker">
        <!-- problem sa dinamickim slikama kada se navodi apsolutna putanja-->
        <div class="img img--center">
            <img :src="require(`./../../../static/BlockTeam/${worker.img}`)">
        </div>
        <h2 class="title text--center block-team__subtitle">{{worker.name}}</h2>
        <div class="block-team-position">
            <p class="text text--center block-team__text">{{worker.positionTitle}}</p>
            <p class="text text--center block-team__text">{{worker.positionDescription}}</p>
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
    .box__section--worker {
        width: 100%;
    }
    .img {
        margin-bottom: 25px;
    }
    .block-team__subtitle {
        font-size: 30px;
        margin-bottom: 5px;
    }
    .block-team-position {
        margin-bottom: 95px;
    }
    .block-team__text {
        font-size: 18px;
        line-height: 14px;
    }
</style>