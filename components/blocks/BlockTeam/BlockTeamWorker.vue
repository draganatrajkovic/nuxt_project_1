<template>
    <div class="box__section box__section--worker">
        <!-- problem sa dinamickim slikama kada se navodi apsolutna putanja-->
        <img :src="require(`./../../../static/BlockTeam/${worker.img}`)">
        <h2 class="title block-team__subtitle">{{worker.name}}</h2>
        <p class="text block-team__text">{{worker.position}}</p>
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
    .block-team__subtitle {
        font-size: 30px;
    }
    .block-team__text {
        font-size: 18px;
    }
</style>