<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()

    definePageMeta({
        layout: false
    })

    function goBack() {
        router.push('/Day7')
    }
</script>

<template>
    <h2>房型詳細頁面</h2>
    <button @click="goBack">回上一頁</button>
</template>

<style scoped>
button {
    margin-top: 20px;
}
</style>
