<template>
    <div class="box__wrap box__wrap--block-subnav">
        <div class="box box--inline box--block-subnav">
            <nuxt-link to="/" class="text text--bold block-subnav__link">Home</nuxt-link>
            <span class="text text--bold block-subnav__link">/</span>
            <nuxt-link to="products block-subnav__link" class="text text--bold block-subnav__link">Our Products</nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .box__wrap--block-subnav {
        border-top: 1px solid $neutralColor;
        margin-top: 20px;
        padding-top: 30px;
    }
    .box--block-subnav {
        justify-content: flex-start;
    }
    .block-subnav__link {
        text-decoration: none;
        font-size: 14px;
        opacity: 1;
        font-weight: normal;
    }
    .custom-active-link {
        font-weight: bold;
    }
    .custom-exact-active-link {
    }

</style>