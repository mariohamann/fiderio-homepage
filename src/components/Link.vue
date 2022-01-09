<template>
	<a class="transition-all underline decoration-primary-500 decoration-2 underline-offset-2 hover:decoration-primary-700" v-bind:href=href><slot></slot></a>
</template>

<script lang="ts" setup>
	const props = defineProps({
		href: String,
	});
</script>
