<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	import 'prism-theme-vars/base.css';
	useHead({
		title: 'Fiderio | Create and publish the 21th century way',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<header>
		<Hero />
	</header>

	<main class="py-8 bg-gray-100 text-gray-900 leading-loose">
		<div class="text-lg">
			<section>
				<SectionHybridity />
				<SectionFlexibility />
				<SectionShorts/>
				<SectionScripting />
			</section>
		</div>
	</main>
</template>

<route lang="yaml">
name: home
</route>
