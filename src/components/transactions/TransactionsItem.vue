<template>
    <li class="transaction">
        <details class="transaction__details">
            <TransactionsSummary :summary="summary" />
            <p class="transaction__description">{{ transaction.description }}</p>
        </details>
    </li>
</template>

<script>
import TransactionsSummary from "./TransactionsSummary.vue";
export default {
    components: {
        TransactionsSummary
    },
    props: {
        transaction: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            typesEnum: {
                PURCHASE: "Покупка",
                PURCHASE_BILL: "Счёт",
                REFUND: "Возврат"
            }
        };
    },
    computed: {
        getTransactionType() {
            return this.typesEnum[this.transaction.type];
        },
        getTransactionTime() {
            const date = new Date(this.transaction.created_at);
            return date.toLocaleTimeString().substring(0, 5);
        },
        summary() {
            return {
                type: this.getTransactionType,
                event: this.transaction.event_id,
                time: this.getTransactionTime,
                amount: this.transaction.amount.toLocaleString("ru"),
                positive: this.transaction.event_name === "REFUND",
                account: this.transaction.account_number,
                currency: this.transaction.currency,
                method: this.transaction.payment_method
            };
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars";
.transaction {
    $t: &;
    padding: 10px;
    background-color: $primary-2;
    &:not(:last-child) {
        margin: 0 0 10px;
    }

    &__description {
        margin: 10px 0 0;
        padding: 10px;
        background-color: $text-color;
        text-align: left;
        color: $primary-2;
    }
}
</style>
