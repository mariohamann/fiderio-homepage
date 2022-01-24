<template>
  <a class="underline decoration-primary-500 hover:decoration-primary-700 decoration-2 underline-offset-2 transition-all" :href="href"><slot /></a>
</template>

<script lang="ts" setup>
const props = defineProps({
  href: String,
})
</script>
