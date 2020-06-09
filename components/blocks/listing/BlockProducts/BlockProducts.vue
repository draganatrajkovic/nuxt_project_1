<template>
    <div class="box__wrap box__wrap--block-products">
        <div class="box box__block-products">
            <ul v-for="(product, index) in products" :key="index" class="box__section--block-products">
                <SingleProduct :product="product" />
            </ul>
        </div>
    </div>
</template>

<script>
// import { productsService } from './ProductsService'
import SingleProduct from './BlockProductsProduct'
import {  mapGetters } from 'vuex'
export default {
    components: {
        SingleProduct
    },
    beforeMount() {
        this.$store.dispatch('dispatchSetProducts');
    },
    data() {
        return {
            // products: productsService.all()
        }
    },
    watch: {
        getProductsList() {
            console.log(this.getProductsList)
        }
    },
    computed: {
        ...mapGetters({
            products: 'getProductsList'
        })
    }
}
</script>

<style lang="scss" scoped>
    .box__wrap--block-products {
        padding-top: 38px;
        padding-bottom: 50px;
    }
    .box__block-products {
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .box__section--block-products {
        width: 32%;
        padding: 0;
        margin: 5px;
    }
</style>