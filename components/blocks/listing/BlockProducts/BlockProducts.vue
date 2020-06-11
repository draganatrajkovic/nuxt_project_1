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


        filteredProducts() {
            if (this.selectedPerformances.length == 0) {
                this.$store.commit('setFilteredProductList', this.productsList)
                return this.productsList
            } else {
                let totalSelectedProducts = [] //zato sto mozemo cekirati vise od jednog filtera

                this.selectedPerformances.filter (performance => {

                    // kom pendantu pripada dati performance
                    let pendantName = this.findPendantFromPerformanceId(this.pendants, performance.term_id)

                    //filtriramo sve proizvode po name-u (pendantName)
                    //product[pendantName] - moramo koristiti uglaste kada je name sa spec karakterima tipa 'pa_delivered-loumens'
                    let filteredProducts = this.productsList.filter(product => { 
                        
                        // explode string to array
                        let productPerformancesArr = this.stringToArray(product[pendantName])

                        // product.name['..., ..., ...'] - da li element iz niza  ima vrednost checkboxa
                        this.ifInProductSpecArrIsCheckboxValue(productPerformancesArr, performance.term_id, totalSelectedProducts, product)
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
        },
        findPendantFromPerformanceId(pendants, performanceTermId) {
            let pendantName = pendants.find(pendant => pendant.performances.find(p => p.term_id == performanceTermId)).name
            // console.log('Pendant name is: ' + pendantName)
            return pendantName
        },
        stringToArray(string) {
            let arr = string.split(',')
            return arr
        },
        isInArray(array, element) {
            if(array.includes(element)) {
                array
            } else {
                array.push(element)
                // console.log('Product: ' + element.ID)
            }
        },
        ifInProductSpecArrIsCheckboxValue(specificValuesArr, performanceTermId, totalSelectedProducts, product) {
            //if product.name[...] has specific value in arr, put that product in array with all selected product if it is now already inside
            specificValuesArr.filter(value => {
                if (value == performanceTermId) {
                    this.isInArray(totalSelectedProducts, product) 
                }
                return specificValuesArr
            })
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