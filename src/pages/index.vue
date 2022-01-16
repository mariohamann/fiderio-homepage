
<template>
	<header>
		<Hero />
	</header>

	<main class="py-8 bg-gray-100 text-gray-900 leading-loose">
		<div class="text-lg my-24 space-y-24">
			<section>
				<SectionHybridity  />
			</section>
			<section class="!mt-36">
				<SectionFlexibility />
			</section>
			<section>
				<SectionShorts />
			</section>
			<section>
				<SectionTemplates />
			</section>
			<section class="!mt-36">
				<SectionScripting />
			</section>

		</div>
	</main>

	<Footer class="pt-24"/>
</template>

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

<route lang="yaml">
name: home
</route>
