<template>
    <summary class="summary" :class="{ 'summary--card': summary.method === 'CARD' }">
        <div class="summary__row">
            <p class="summary__order">
                {{ summary.type }}:
                <span class="summary__order--strong">
                    {{ summary.event }}
                </span>
            </p>
            <p
                class="summary__amount"
                :class="{
                    'summary__amount--positive': summary.positive,
                    'summary__amount--rub': summary.currency === 'RUB'
                }"
            >
                {{ summary.amount }}
            </p>
        </div>
        <div class="summary__row">
            <p class="summary__time">
                {{ summary.time }}
            </p>
            <p class="summary__account">
                {{ summary.account }}
            </p>
        </div>
    </summary>
</template>

<script>
export default {
    props: {
        summary: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars";
.summary {
    display: block;
    position: relative;
    padding: 0 0 0 50px;
    &::-webkit-details-marker {
        display: none;
    }
    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        display: block;
        width: 40px;
        height: 40px;
        margin: -20px 0 0;
        background-color: $alternate-1;
        border-radius: 50%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }
    &--card {
        &:before {
            background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3207673/credit-card--white.svg");
        }
    }
    &:focus {
        outline: none;
    }
    &__row {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    &__order {
        text-align: left;
        &--strong {
            font-weight: 600;
        }
    }
    &__time {
        text-align: left;
    }
    &__amount {
        text-align: right;
        font-size: 18px;
        font-weight: 800;
        color: $negative;
        &:before {
            content: "− ";
        }
        &--positive {
            color: $positive;
            &:before {
                content: "+ ";
            }
        }
        &--rub {
            &:after {
                content: " ₽";
            }
        }
    }
    &__account {
        text-align: right;
    }
}
</style>
