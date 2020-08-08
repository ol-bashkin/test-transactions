<template>
    <div class="report">
        <div v-for="date in getDates" :key="date" class="report__block">
            <p class="report__date">{{ date }}</p>
            <TransactionsList :transactions="getTransactionsByDate(date)" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import TransactionsList from "./TransactionsList.vue";
export default {
    components: {
        TransactionsList
    },
    computed: {
        ...mapGetters("transactions", ["getDates", "getTransactionsByDate"])
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars";
.report {
    padding: 40px 0;
    &__date {
        margin: 0 0 10px;
        padding: 0 10px;
        text-align: left;
        color: $primary-3;
    }
    &__block {
        &:not(:last-child) {
            margin: 0 0 20px;
        }
    }
}
</style>
