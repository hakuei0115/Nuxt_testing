<script setup>
  definePageMeta({
    title: '後台首頁',
    description: '這是後台首頁的描述',
    keywords: '後台, 首頁',
    layout: 'admin'
  })
</script>

<template>
  <header>
    <ul class="list">
      <li>
        <NuxtLink to="/Day3">前台首頁</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Day3/about">前台 About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Day3/admin">前往 後台首頁</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Day3/admin/order">前往 後台訂單</NuxtLink>
      </li>
    </ul>
  </header>
  <h1>
    後台首頁
  </h1>
  <footer>
    <h5>
      admin 模板的表尾
    </h5>
  </footer>
</template>

<style scoped></style>
