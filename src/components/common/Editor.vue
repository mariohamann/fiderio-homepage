<template>
<div class="px-4">
	<div
		class="relative overflow-hidden shadow-xl flex max-w-screen-xl mx-auto bg-gray-900 rounded-xl"
	>
		<div class="relative w-full flex flex-col">
			<div class="flex-none border-b border-gray-500/30">
				<div class="flex items-center h-8 space-x-1.5 px-3">
					<div class="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
					<div class="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
					<div class="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
				</div>
			</div>
			<div class="relative min-h-0 flex-auto flex flex-col md:flex-row">
				<div v-if="$slots.input" class="md:w-1/2 bg-gray-800 flex-auto flex min-h-0">
					<div class="w-full flex-auto flex min-h-0 overflow-auto">
						<div class="w-full relative flex-auto">
							<pre
								class=" flex items-stretch min-h-full text-sm font-mono leading-7"
							><div v-if="lines > 0" aria-hidden="true" class="hidden md:block text-gray-600 flex-none py-6 pr-4 text-right select-none w-14">1<span v-for="n in (lines - 1)" :key=n><br v-if="n < lines"/>{{ !split ? n + 1 : (n  === split ? '' : (n < split ? n+1 : n - split)) }}</span></div>
							<code class="!self-stretch flex-auto relative block text-gray-50 overflow-auto py-6 px-4 !h-full"><slot name="input"/></code></pre>
						</div>
					</div>
				</div>
				<div v-if="$slots.output" class="md:w-1/2 bg-white flex-auto flex min-h-0">
					<div class="w-full flex-auto flex min-h-0 overflow-auto">
						<div class="w-full m-auto relative flex-auto prose prose-gray prose-lg font-serif p-8">
							<slot name="output"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script lang="ts" setup>
	import Vue from 'vue'

	const props = defineProps({
		lines: Number!,
		split: Number,
	})
</script>
