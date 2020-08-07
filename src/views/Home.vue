<template>
    <main class="main">
        <TransactionsBlock />
    </main>
</template>

<script>
import TransactionsBlock from "@/components/transactions/TransactionsBlock.vue";

export default {
    name: "Home",
    components: {
        TransactionsBlock
    }
};
</script>
