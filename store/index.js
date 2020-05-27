
export const state = () => ({})
export const getters = {}

//razlika u odnosu na normalno koriscenje Vuex-a je da moramo eksportovati svaki aset 
// (state, getters...) umesto celu store instancu;
//druga razlika je da state mora biti funkcija koja vraca objekat