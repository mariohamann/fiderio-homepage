<script setup lang="ts">
useHead({
  title: '404. Not Found',
})
const { t } = useI18n()
</script>

<template>
  <h1 class="flex flex-col font-extrabold text-center text-blue-500">
    <span class="text-7xl">404.</span>
    <span class="mt-5 text-5xl">{{ t('pages.not-found') }}</span>
  </h1>
</template>

<route lang="yaml">
name: not-found
meta:
  layout: 404
</route>
