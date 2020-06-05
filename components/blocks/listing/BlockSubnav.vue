<template>
    <div class="box__wrap box__wrap--block-subnav">
        <div class="box box--inline box--block-subnav">
            <nuxt-link to="/" class="text block-subnav__link">Home</nuxt-link>
            <span class="text">/</span>
            <nuxt-link to="products block-subnav__link" class="text">Our Products</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
    .box--block-subnav {
        justify-content: flex-start;
    }
    .block-subnav__link {
        text-decoration: none;
    }
    .active-link {
        font-weight: bold;
    }
</style>