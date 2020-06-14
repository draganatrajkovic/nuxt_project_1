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
        }
    },
    beforeMount() {
        this.$store.dispatch('dispatchSetProducts');
    },
    computed: {
        ...mapGetters({
            productsList: 'getProductsList' ,
            selectedPerformances: 'getSelectedPerformances',
            visiblePerformances: 'getVisiblePerformances',
            pendants: 'getPendants'
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
        // 4. za svaki od proizvoda proverim vrednosti svih kijeva 
            // ako je niz prodjem kroz taj niz name:[...]
            // ako je string samo uporedim vrednosti
            // i proverim da li se svaka vrednost nalazi u nizu visiblePerformances
        // 5. ako ne postoji u tom nizu dodajem ga
        // 6. inicijalno pendant izlistava sve moguce opcije 
            //f-ja ako je visiblePerformances prazan da izlista sve koarakteristike
            // prvi put kada se cekira checkbox pozvace metodu za filtriranje
            //cekirani checkbox se obavezno nalazi i u nizu visiblePerformances
        // 7. ako je vrednost pendanta u nizu visiblePerformances, bice vidljiva
        // 8. samo checkboksovi koji su rucno cekirani ce se i videti kao cekirani (oni su u oba niza: visiblePerformances i selectedPerformances )
                // ostali ce biti samo vidljivi

        // 9. kada se odcekira checkbox ta vrednost se izbacuje iz nisa ukupnih selektovanih ckeckboxova....

        filteredProducts() {
            if (this.selectedPerformances.length == 0) {
                this.$store.commit('setFilteredProductList', this.productsList)
                return this.productsList
            } else {
                let totalSelectedProducts = []

                // selectedPerformances - lista cekiranih checkboxova
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

                this.checkIfAllProductPerformancesAreInArr(totalSelectedProducts)

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
        },
        checkIfAllProductPerformancesAreInArr(totalSelectedProducts) {
            // prolazimo kroz pentant nazive jer nam trebaju karakteristike proizvoda koje su samo pod tim key-em
            this.pendants.filter(pendant => {
                //svi filtrirani proizvodi
                totalSelectedProducts.filter(product => {

                    //od objekta izdvaja key i value - Object.entries(product)
                    for (let [key, value] of Object.entries(product)) {
                        if (key == pendant.name) {

                            this.stringToArray(value).filter(v => {
                                // console.log('PENDANT: ' + pendant.name + ' PRODUCT ID: ' + product.ID + ' KEY: ' + key )

                                // za svaku vrednost radimo proveru za odredjeni key, jer razliciti key-evi mogu imati iste vrednosti
                                if(!this.visiblePerformances.includes(v) && key == pendant.name) {
                                    this.$store.commit('addVisiblePerformance', v)
                                } 
                            })
                        }
                    }
                    // console.log('Visible performances for ' + product.ID + ' : ' + this.visiblePerformances.length)
                })
            })
            console.log('Visible performances in total: ' + this.visiblePerformances.length)
        }
        
    } //---methods
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