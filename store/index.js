//razlika u odnosu na normalno koriscenje Vuex-a je da moramo eksportovati svaki aset 
// (state, getters...) umesto celu store instancu;
//druga razlika je da state mora biti funkcija koja vraca objekat
import axios from 'axios'

export const state = () => ({
    productsList: [], 
    product: {}
})

export const getters = {
    getProductsList(state) {
        return state.productsList
    }
}

export const mutations = {
    setProducts(state, products) {
        state.productsList = products
    }
}

export const actions = {
    async nuxtServerInit({ commit, dispatch }) {
        await dispatch('dispatchSetProducts')
    },
    
    async dispatchSetProducts({ commit }) {
        const products = await axios.get(`https://api.jsonbin.io/b/5ede0a461f9e4e5788198e29`)

        const json = JSON.stringify(products)

        // for global axios acces: this.$axios.get('...')
        // let {products} = await this.$axios.get('5ede0a461f9e4e5788198e29')

        // const products = [{
        //     id:1, 
        //     title: 'RFBA', 
        //     ligthSource: '12.4"Hx31"Lx5"D',
        //     productQuallity: 'Bronze',
        //     img: 'product_01.png',
        //     diffuserType: 'Acrylic',
        //     material: 'Stainless Steel'
        // },
        // {
        //     id:2, 
        //     title: 'RFBA', 
        //     ligthSource: '12.4"Hx31"Lx5"D',
        //     productQuallity: 'Bronze',
        //     img: 'product_02.png',
        //     diffuserType: 'Acrylic',
        //     material: 'Stainless Steel'
        // }]

        commit( 'setProducts', json)
    },
}

