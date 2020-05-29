<template>
    <div class="box__section box__section--worker">
        <!-- problem sa dinamickim slikama kada se navodi apsolutna putanja-->
        <img :src="require(`./../../../static/BlockTeam/${worker.img}`)">
        <h2 class="block-team__subtitle">{{worker.name}}</h2>
        <p class="block-team__text">{{worker.position}}</p>
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
        background-color: chartreuse;
    }
</style>