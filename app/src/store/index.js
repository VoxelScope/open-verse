import { createStore } from "vuex";

export default createStore({
  state: {
    dev: true
  },
  getters: {
    isDev: (state) => {
      return state.dev
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
