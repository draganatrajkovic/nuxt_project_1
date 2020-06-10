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
            activePage: 1, 
            filteredProductsArr: []
        }
    },
    beforeMount() {
        this.$store.dispatch('dispatchSetProducts');
        // this.$store.dispatch('getnebitno');
    },
    computed: {
        ...mapGetters({
            productsList: 'getProductsList' ,
            selectedPerformances: 'getSelectedPerformances',
        }), 
        visibleProducts() {
            let arr = []
            let bottomLimit=(this.activePage *10) -10
            let topLimit = this.activePage *10
            let i

            arr = this.productsList.filter(product => this.productsList.indexOf(product)<= this.activePage *10 && 
                this.productsList.indexOf(product)>this.activePage *10 -10)
                
            return arr
        },
        filteredProducts() {
            if (this.selectedPerformances.length == 0) {
                return this.productsList
            } else {
                
                this.selectedPerformances.filter (preformance => {

                    // treba naci kom pendantu pripada dati performance
                    let pendantName = this.productsList.find(pendant => pendant.preformances.find(p => p.id == preformance.id)).name

                    //filtriramo sve proizvode po name-u / pendantName
                    this.productsList.filter(product => {
                        if(product.pendantName == performance.name) {
                            this.filteredProductsArr.push(product)
                        }
                    })
                })

                //filtriramo niz za svim cekiranim specifikacijama pendant.name
                //proveravamo za svaku specifikaciju da li postoji product koji ima za isti key istu vrednost
            }
        }
    },
    methods: {
        setActivePage(activePage) {
            this.activePage = activePage
        }
    },
    watch: {
        productsList() {
            // console.log(this.productsList)
        },
        selectedPerformances() {
            console.log('Block products: ' + this.selectedPerformances)
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