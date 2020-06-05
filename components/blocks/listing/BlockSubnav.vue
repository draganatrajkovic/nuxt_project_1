<template>
    <div class="box__wrap box__wrap--block-subnav">
        <div class="box box--inline box--block-subnav">
            <nuxt-link to="/">Home</nuxt-link>
            <span>/</span>
            <nuxt-link to="products">Our Products</nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .box--block-subnav {
        justify-content: flex-start;
    }
</style>