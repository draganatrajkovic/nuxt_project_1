<template>
    <div class="box__wrap box__wrap--block-products">
        <div class="box box--column">
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
            let bottomLimit=(this.activePage *10) -10
            let topLimit = this.activePage *10
            let i

            arr = this.productsList.filter(product => this.productsList.indexOf(product)<= this.activePage *10 && 
                this.productsList.indexOf(product)>this.activePage *10 -10)
                
            // console.log(bottomLimit, topLimit)
            return arr
        }
    },
    methods: {
        setActivePage(activePage) {
            this.activePage = activePage
            // console.log('All products ' + this.activePage)
        }
    },
    watch: {
        productsList() {
            console.log(this.productsList)
        }
    },
}
</script>

<style lang="scss" scoped>
    .box__block-products {
        width: 100%;
        // padding-top: 38px;
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