import Vue from "vue";
import Vuex from "vuex";
import * as transactions from "@/store/modules/transactions.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        transactions
    }
});
