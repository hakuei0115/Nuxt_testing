<script setup>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const { newList, isLoading, getNewList } = useHome();

definePageMeta({
    layout: false
})

onMounted(() => {
    getNewList();
})

</script>

<template>
  <div class="container">
    <h1>最新消息</h1>
    <NewsCard v-for="news in newList" :key="news.id" v-bind="news" />

    <ClientOnly>
      <Loading v-model:active="isLoading" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
