import TransactionService from "@/service/TransactionService.js";

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
                    console.log(transactionDate);
                    return convertDate(transactionDate);
                })
            )
        );
    },
    getTransactionsByDate: state => date => {
        return state.transactions.filter(transaction => {
            const transactionDate = new Date(getIsoDate(transaction.created_at));
            return convertDate(transactionDate) === date;
        });
    }
};

function convertDate(date) {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const monthNumber = date.getMonth() + 1;
    const month = monthNumber < 10 ? `0${monthNumber}` : monthNumber;
    return `${day}.${month}.${date.getFullYear()}`;
}
function getIsoDate(date) {
    return `${date.substring(0, 23)}Z`;
}
// function getPrettyDate(date) {
//     const today = new Date();
//     const prettyToday = convertDate(new Date());
//     const prettyrYesterday = convertDate(
//         new Date().setDate(today.getDate() - 1)
//     );
//     switch (date) {
//         case prettyToday:
//             return "Сегодня";
//         case prettyrYesterday:
//             return "Вчера";
//         default:
//             return convertDate(date);
//     }
// }
