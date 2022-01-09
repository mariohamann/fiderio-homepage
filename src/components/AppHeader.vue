<script setup lang="ts">
	defineEmits(['toggleSidebar']);
	const body = ref<HTMLBodyElement | null>(null);
</script>

<template>
	<header>
		<nav
			class="
				w-full
				bg-primary-600
				text-white
				dark:bg-gray-800 dark:text-white
				py-4
				px-8
				shadow-md
				dark:shadow-md
				flex
				items-center
				border-b border-gray-400/50
			"
		>
			<router-link :to="{ name: 'home' }">
				<div class="font-serif italic  lg:text-4xl text-lg">Fiderio</div>
			</router-link>
		</nav>
	</header>
</template>

<style scoped></style>
