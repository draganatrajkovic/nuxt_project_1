//razlika u odnosu na normalno koriscenje Vuex-a je da moramo eksportovati svaki aset 
// (state, getters...) umesto celu store instancu;
//druga razlika je da state mora biti funkcija koja vraca objekat
import axios from 'axios'

export const state = () => ({
    productsList: [], 
    product: {},
    selectedPerformances: []
})

export const getters = {
    getProductsList(state) {
        return state.productsList
    },
    getSelectedPerformances(state) {
        return state.selectedPerformances
    }
}

export const mutations = {
    setProducts(state, products) {
        state.productsList = products
    },
    setSelectedPerformances(state, selectedPerformances) {
        state.selectedPerformances = selectedPerformances
        // alert(state.selectedPerformances.length)
    }
}

export const actions = {
    // nuxtServerInit() {
    //     console.log('pas');
    // },
    async dispatchSetProducts({ commit }) {
        const products = await axios.get(`https://api.jsonbin.io/b/5ede0a461f9e4e5788198e29`).then((res) => {  
        // console.log(res.data)    
        commit('setProducts', res.data);
        });
    }
}

