<template>
    <div class="box__product">
         <!-- <img :src="require(`./../../../../static/listing/BlockProducts/${product.img}`)" /> -->
         {{product.title}}
         {{product.ligthSource}}
         {{product.productQuallity}}

         {{product.diffuserType}}
         {{product.material}}
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