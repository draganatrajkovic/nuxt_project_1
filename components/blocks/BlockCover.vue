<template>
    <div class="box__wrap box__wrap--cover">
        <div class="box">
            <div class="box__section">
                <h1 class="title--cover">The most cost-efficient way to build a light? Once.</h1> 
                <button class="btn" @click="handleMoreOnThat">More on that</button>
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

</style>