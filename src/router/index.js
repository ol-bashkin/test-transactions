import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
            store
                .dispatch("transactions/fetchTransactions", { page: 1 })
                .then(() => {
                    next();
                });
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
