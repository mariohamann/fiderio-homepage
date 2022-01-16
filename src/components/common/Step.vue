<template>
	<li>
	<div
		href="#"
		class="relative flex items-center justify-center"
		aria-current="step"
	>
		<span
			:class="state === 0 ? 'opacity-100 w-6 h-6' : 'opacity-0 w-0 h-0'"
			class="absolute transition-all p-px flex"
			aria-hidden="true"
		>
			<span class="w-full h-full rounded-full bg-primary-200"></span>
		</span>
		<span
			:class="state > 0 ? 'bg-gray-200' : 'bg-primary-600' "
			class="transition duration-1000 relative block w-2.5 h-2.5 rounded-full"
			aria-hidden="true"
		></span>
		<span class="sr-only">Step {{ step }}</span>
	</div>
	</li>
</template>

<script lang="ts" setup>
	const props = defineProps({
		state: Number as () => -1 | 0 | 1,
		step: Number!,
	});
</script>
