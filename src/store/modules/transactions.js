import TransactionService from "@/service/TransactionService.js";
import { getIsoDate, getPrettyDate } from "@/helpers/dateHelpers";

export const namespaced = true;

export const state = {
    transactions: []
};
export const mutations = {
    SET_TRANSACTIONS(state, transactions) {
        state.transactions = transactions;
    }
};
export const actions = {
    fetchTransactions({ commit }, { page }) {
        return TransactionService.getTransactions(page)
            .then(response => {
                commit("SET_TRANSACTIONS", response.data.result);
            })
            .catch(error => {
                console.log("Произошла ошибка:" + error);
            });
    }
};

export const getters = {
    getDates: state => {
        return Array.from(
            new Set(
                state.transactions.map(transaction => {
                    const transactionDate = new Date(getIsoDate(transaction.created_at));
                    return getPrettyDate(transactionDate);
                })
            )
        );
    },
    getTransactionsByDate: state => date => {
        return state.transactions.filter(transaction => {
            const transactionDate = new Date(getIsoDate(transaction.created_at));
            return getPrettyDate(transactionDate) === date;
        });
    }
};
