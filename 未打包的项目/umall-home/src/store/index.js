import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import { mutations, state, getters } from "./mutations";
import carList from "./modules/carList";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    carList,
  }
});
