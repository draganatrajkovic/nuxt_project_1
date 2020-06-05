<template>
    <div class="box__product">
         <img :src="require(`./../../../../static/listing/BlockProducts/${product.img}`)" />
    </div>
</template>

<script>
export default {
    props:[
        'product'
    ]
}
</script>

<style lang="scss" scoped>
    .box__product {
        width: 100%;
    }
</style>