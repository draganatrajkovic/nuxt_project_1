<template>
    <div class="box__wrap box__wrap--block-products">
        <div class="box--column">
            <PartPagination :productsList="productsList" @handleActivePage="setActivePage" />
            <div class="box box__block-products">
                <ul v-for="(product, index) in visibleProducts" :key="index" class="box__section--block-products">
                    <SingleProduct :product="product" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import PartPagination from '~/components/parts/PartPagination.vue';
import SingleProduct from './BlockProductsProduct.vue';
import {  mapGetters } from 'vuex';

export default {
    components: {
        SingleProduct,
        PartPagination
    },
    data() {
        return {
            product: '',
            activePage: 1
        }
    },
    beforeMount() {
        this.$store.dispatch('dispatchSetProducts');
    },
    watch: {
        productsList() {
            // console.log(this.productsList)
        }
    },
    computed: {
        ...mapGetters({
            productsList: 'getProductsList' ,
        }), 
        visibleProducts() {
            let arr = []
            arr = this.productsList.filter(product => product.ID <= ((this.activePage *10)) && 
                    product.ID > ((this.activePage *10) -10))
            console.log(this.activePage + ' test')
            console.log(arr)
            return arr
        }
    },
    methods: {
        setActivePage(activePage) {
            this.activePage = activePage
        }
    }
}
</script>

<style lang="scss" scoped>
    .box__wrap--block-products {
        width: 100%;
    }
    .box__block-products {
        width: 100%;
        padding-top: 38px;
        padding-bottom: 50px;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .box__section--block-products {
        width: 32%;
        padding: 0;
        margin: 5px;
    }
</style>