<template>
    <div class="box__wrap box__wrap--block-recently">
        <div class="box box--column">
            <div class="box__section">
                <h1 class="title">Recently Viewed</h1>
            </div>
            
            <div class="box__section box__section--inline box__block-recently ">
                <ul v-for="(product, index) in recentlyViewedProducts" :key="index" class="recently-product">
                    <SingleProduct :product="product" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SingleProduct from './BlockProductsProduct'
export default {
    components: {
        SingleProduct
    },
    data() {
        return {
            recentlyViewedProducts: [
                {
                    id:1, 
                    title: 'RFBA', 
                    ligthSource: '12.4"Hx31"Lx5"D',
                    productQuallity: 'Bronze',
                    img: 'product_01.png',
                    diffuserType: 'Acrylic',
                    material: 'Stainless Steel'
                },
                {
                    id:2, 
                    title: 'RFBA', 
                    ligthSource: '12.4"Hx31"Lx5"D',
                    productQuallity: 'Bronze',
                    img: 'product_02.png',
                    diffuserType: 'Acrylic',
                    material: 'Stainless Steel'
                },
                {
                    id:3, 
                    title: 'RFBA', 
                    ligthSource: '12.4"Hx31"Lx5"D',
                    productQuallity: 'Bronze',
                    img: 'product_03.png',
                    diffuserType: 'Acrylic',
                    material: 'Stainless Steel'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .box__wrap--block-recently {
        padding-top: 70px;
        padding-bottom: 170px;
    }
    .box__block-recently {
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 10px;
    }
    .recently-product {
        width: 32%;
        padding: 0;
        margin: 5px;
    }
</style>