<template>
    <div class="box__wrap box__wrap--block-products">
        <div class="box box__block-products">
            <ul v-for="(product, index) in products" :key="index" class="box__section--block-products">
                <SingleProduct :product="product" />
                products
            </ul>
        </div>
    </div>
</template>

<script>
import { productsService } from './ProductsService'
import SingleProduct from './BlockProductsProduct'
export default {
    components: {
        SingleProduct
    },
    data() {
        return {
            products: productsService.all()
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .box__block-products {
        flex-wrap: wrap;
        // justify-content: flex-start;
    }
    .box__section--block-products {
        width: 25%;
    }
</style>