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
import { pendantService } from './../BlockPendants/PendantsService'
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
            pendants: pendantService.all(),
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
            //paginaciju korigovati nakon filtriranja
            let i

            // arr = this.productsList.filter(product => this.productsList.indexOf(product)<= this.activePage *10 && 
            //     this.productsList.indexOf(product)>this.activePage *10 -10)

            let arr = this.filteredProducts.filter(product => 
                this.filteredProducts.indexOf(product) + 1 <= this.activePage *10 && 
                this.filteredProducts.indexOf(product) + 1 > this.activePage *10 -10
            )
            return arr
                
        },
        filteredProducts() {
            if (this.selectedPerformances.length == 0) {
                this.$store.commit('setFilteredProductList', this.productsList)
                return this.productsList
            } else {
                let totalSelectedProducts = [] //zato sto mozemo cekirati vise od jednog filtera
                this.selectedPerformances.filter (performance => {

                    // kom pendantu pripada dati performance
                    let pendantName = this.pendants.find(pendant => pendant.performances.find(p => p.term_id == performance.term_id)).name
                    // console.log('Pendant name is: ' + pendantName)

                    //filtriramo sve proizvode po name-u / pendantName
                    //product[pendantName] - moramo koristiti uglaste kada je key sa spec karakterima tipa 'pa_delivered-loumens'
                    let filteredProducts = this.productsList.filter(product => { 

                                    //ovo radi ali ne za arr
                                    // if(product[pendantName] == performance.term_id) { 
                                    //     totalSelectedProducts.push(product)
                                    // }
                        
                        // product.key[] - provera da li e iz niza  ima vrednost checkboxa
                        let productPerformancesArr = product[pendantName].split(',')
                        productPerformancesArr.filter(value => {
                            if (value == performance.term_id) {
                                if(totalSelectedProducts.includes(product)) {
                                    totalSelectedProducts
                                } else {
                                    totalSelectedProducts.push(product)
                                    console.log('Product: ' + product.ID)
                                }
                            }
                            return productPerformancesArr
                        })
                        return filteredProducts
                    })
                    console.log('Total selected products : ' + totalSelectedProducts.length)
                })
                this.$store.commit('setFilteredProductList', totalSelectedProducts)
                return totalSelectedProducts
            }
        },
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
            // console.log('Block products: ' + this.selectedPerformances)
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