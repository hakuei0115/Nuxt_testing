<script setup>
    defineProps({
        price: String,
    })
</script>

<template>
    <div class="product-card">
        <p class="product-price">{{ price }}</p>
    </div>
</template>

<style scoped>
    .product-price {
        font-size: 16px;
        color: #007BFF;
        text-align: center;
        margin-bottom: 16px;
    }
</style>