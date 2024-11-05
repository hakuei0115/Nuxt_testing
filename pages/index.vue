<script setup lang="ts">
  const route = useRoute()
</script>

<template>
  <h1>Page: index</h1>
  <p>目前路由的路徑: route.fullPath為 : {{ route.fullPath }}</p>
</template>

<style scoped></style>