import axios from "axios";

/* для тестовы нужд
const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});*/
const apiClient = axios.create({
    baseURL: process.env.VUE_APP_HOST,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.VUE_APP_TOKEN}`
    }
});

export default {
    getTransactions(page) {
        return apiClient.get(`/transactions/page/${page}`);
    }
};
