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
    },
    computed: {
        ...mapGetters({
            productsList: 'getProductsList' ,
            selectedPerformances: 'getSelectedPerformances',
        }), 
        visibleProducts() {
            let i
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


                //logika:
                // 1. npr. selektovan je wattage: 10
                // 2. izdvojim sve elemente koji imaju wattage: 10 (dotle je uradjeno)

                // 3. prodjem kroz niz proizvoda koje smo dobili nakon filtriranja
                // 4. za svaki od proizvoda proverim da li za name wattage ima jos neku karakteristiku (znaci opet prolazim kroz niz wattage:[...])
                // 5. recimo da su se pojavili proizvodi koji imaju wattage  [10, 14, 3] i [10, 21]
                // 6. sve vrednosti koje su se pojavile za wattage stavljam u novi niz [10, 14, 3, 21]
                // 7. u pendant tabu gde izlistava sve moguce opcije za wattage ostavim da mi prikaze samo one iz niza iznad

                // 8. inicijalno pendant izlistava sve moguce opcije, prvi put kada se cekira checkbox pozvace metodu za filtriranje
                // 9. kada se odcekira checkbox resetovace se na inicijalne vrednosti
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