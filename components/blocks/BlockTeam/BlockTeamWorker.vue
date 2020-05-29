<template>
    <div class="box__worker">
        <img src="@/static/BlockTeam/worker_01.png"/>
        <!-- <img src="worker.img"> -->

        <!-- <button @click="handleImg(worker.img)">Click</button> -->

        <h2 class="block-team__subtitle">{{worker.name}}</h2>
        <p class="block-team__text">{{worker.position}}</p>
    </div>
</template>

<script>
export default {
    props: [
        'worker', 'img'
    ],
    methods: {
        handleImg(img) {
            alert(img)
        }
    }
}
</script>

<style lang="scss" scoped>
    .box__worker {
        background-color: wheat;
        width: 20%;
        margin: 20px;
    }
</style>