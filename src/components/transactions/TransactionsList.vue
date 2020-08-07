<template>
    <ul class="transactions">
        <TransactionsItem v-for="transaction in transactions" :key="transaction.public_id" :transaction="transaction" />
    </ul>
</template>

<script>
import TransactionsItem from "./TransactionsItem.vue";
export default {
    components: {
        TransactionsItem
    },
    props: {
        transactions: {
            type: Array,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.transactions {
}
</style>
