<script setup>
    const route = useRoute();
    const router = useRouter();
    const event = useRequestEvent();

    definePageMeta({
        layout: false
    })

    setResponseStatus(event, 404);

    function goBack() {
        router.push('/')
    }
</script>

<template>
    <div class="not-found">
        <h1>404 - 找不到頁面</h1>
        <p>你所請求的頁面：{{ route.params.slug.join('/') }}，不存在。</p>
        <button type="button" class="btn btn-primary" @click="goBack()">返回首頁</button>
    </div>
</template>

<style scoped>
    .not-found {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .not-found h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .not-found p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
</style>