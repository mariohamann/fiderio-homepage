<template>
	<ChapterHeader>
		<template #subtitle>Accessibile · hybrid</template>
		<template #header>Publish for people – not paper.</template>
		<template #content>
			Write once and publish everywhere. No hassle with cross-compilation,
			formats for different media and versions for various output formats.
		</template>
	</ChapterHeader>
	<TabGroup @change="changedTab">
		<Editor :lines="14">
			<template #input><pre class="language-markup" tabindex="0"><code class="language-markup"><span :class="hidden"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Figure</span><span class="token punctuation">&gt;</span></span></span>
<span :class="current === 0 ? shown : hidden" class="transition-opacity">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Screen</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newtons-cradle.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">loop</span> <span class="token attr-name">autoplay</span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Screen</span><span class="token punctuation">&gt;</span></span></span>
<span :class="current === 1 ? shown : hidden" class="transition-opacity">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Print</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newtons-cradle.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Print</span><span class="token punctuation">&gt;</span></span></span>
<span :class="current === 2 ? shown : hidden" class="transition-opacity">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Screenreader</span><span class="token punctuation">&gt;</span></span>
		Labore sunt officia ipsum sint ea labore enim occaecat. Incididunt id sunt excepteur in tempor velit ut.
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Screenreader</span><span class="token punctuation">&gt;</span></span></span>
	<span :class="hidden"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Label</span><span class="token punctuation">&gt;</span></span></span>
		<span :class="hidden">Newtons cradle</span> <span :class="current === 1 ? shown : hidden" class="transition-opacity token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Print</span><span class="token punctuation">&gt;</span></span><span :class="current === 1 ? shown : hidden" class="transition-opacity">vor dem Stoß vs. nach dem Stoß</span><span :class="current === 1 ? shown : hidden" class="transition-opacity token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Print</span><span class="token punctuation">&gt;</span></span>
	<span :class="hidden"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Label</span><span class="token punctuation">&gt;</span></span></span>
<span :class="hidden"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Figure</span><span class="token punctuation">&gt;</span></span></span></code></pre><pre></pre
				>
			</template>
			<template #output>
				<TabPanels>
					<TabPanel>
						<div class="text-center">
							<video
								src="@/assets/newtons-cradle.mp4"
								class="bg-black w-full rounded-xl"
								loop
								autoplay
								muted
							/>
							<p><b>Fig 1</b>: Newton's cradle (idealized).</p>
						</div>
					</TabPanel>
					<TabPanel>
						<div class="text-center">
							<img
								src="@/assets/newtons-cradle.jpeg"
								class="w-full"
							/>
							<p><b>Fig 1</b>: Newton's cradle (idealized).</p>
						</div></TabPanel>
					<TabPanel>Content 3</TabPanel>
				</TabPanels>

			</template>
		</Editor>
		<TabList class="flex p-1 max-w-md mx-auto space-x-1 bg-primary-600 rounded-xl mt-8">
			<Tab
				v-for="tab in tabs"
				:key="tab.name"
				v-slot="{ selected }"
				as="template"
			>
				<button
					:class="[
						'w-full py-2.5 text-base transition-opacity leading-5  rounded-lg',
						'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
						selected
							? 'bg-white text-black font-bold tracking-wide shadow'
							: 'text-white  hover:bg-white/[0.12] hover:text-white',
					]"
				>
					{{ tab.name }}
				</button>
			</Tab>
		</TabList>
	</TabGroup>
</template>

<script lang="ts" setup>
	import {
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	} from '@headlessui/vue';

	const current = ref(0);
	const shown = 'opacity-90';
	const hidden = 'opacity-30';

	const tabs = [
		{ name: 'Screen' },
		{ name: 'Print' },
		{ name: 'Screenreader' },
	];

	const changedTab = (index: number) => {
		current.value = index;
	}


</script>
