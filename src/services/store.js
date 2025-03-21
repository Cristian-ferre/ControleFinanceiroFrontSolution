// store.js
import { createStore } from 'vuex';

// Cria uma nova store Vuex
export const store = createStore({
  state() {
    return {
      // Define o estado inicial
      atualizar: false
    };
  },
  mutations: {
    // Define as mutações para alterar o estado
    setAtualizar(state, valor) {
      state.atualizar = valor;
    }
  },
  actions: {
    // Define as ações para commitar as mutações
    atualizarComponente({ commit }) {
      commit('setAtualizar', true);
    }
  }
});

// Exporta a store
export default store;