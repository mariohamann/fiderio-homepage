<template>
		<ChapterHeader>
			<template #subtitle>Markdown · HTML/CSS</template>
			<template #header>Beautiful per default, flexible on demand</template>
			<template #content>
				<Fiderio/> combines the simplicity of Markdown with the typographic beauty of TeX and the flexibility of HTML/TailwindCSS.
			</template>
		</ChapterHeader>
		<Editor>
			<template #input>
				<pre v-pre>
Incididunt non in amet <span class="token punctuation">&lt;</span>u class="decoration-orange">quis pariatur<span class="token punctuation">&lt;</span>/u> est magna commodo est est labore consectetur. Fugiat magna velit ut incididunt eu pariatur nulla veniam.

- Occaecat Lorem qui et id officia aliquip.
- Dolor consequat minim occaecat exercitation quis labore.
- Pariatur pariatur consectetur tempor duis ullamco mollit.

...
	theme: {
		extends: {
			fontFamily: {
				primary: 'Tinos',
				secondary: 'Fira Sans',
				mono: 'Fira Code',
			},
			colors: {
				primary: colors.grey,
				secondary: color.amber,
			},
		},
	},
...

				</pre>
			</template>
			<template #output>
				<div class="font-sans text-[0.95em]">
				<p>
					This is some
					<u
						class="decoration-primary-500 decoration-2"
						>content</u
					>.
				</p>
				<div :class="[
					background ? 'bg-gray-100 ' : 'bg-white',
					rounded ? 'rounded-lg' : 'rounded-none',
					padding ? 'p-2' : 'p-0',
					marker ? 'marker:text-amber-600' : 'marker:text-gray-900'
				]" class="transition-all duration-700 p-2 ">
					<ul>
						<li>List item 1</li>
						<li>List item 1</li>
						<li>List item 1</li>
					</ul>
				</div>
				<div
					class="hidden border border-gray-700 rounded-md p-2 my-3 marker:text-gray-700"
				>
					<ul>
						<li>List item 1</li>
						<li>List item 1</li>
						<li>List item 1</li>
					</ul>
				</div>
				</div>
			</template>
		</Editor>
		<nav
			class="flex items-center justify-center mt-8 flex flex-col"
			aria-label="Progress"
		>
			<Button @click="setBox">
				<IconPlus/>
				<span>Style content</span>
			</Button>

			<ol role="list" class="flex items-center mt-6 space-x-5">
				<li>
					<!-- Completed Step -->
					<a
						href="#"
						class="block w-2.5 h-2.5 bg-primary-600 rounded-full hover:bg-primary-900"
					>
						<span class="sr-only">Step 1</span>
					</a>
				</li>

				<li>
					<!-- Current Step -->
					<a
						href="#"
						class="relative flex items-center justify-center"
						aria-current="step"
					>
						<span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
							<span
								class="w-full h-full rounded-full bg-primary-200"
							></span>
						</span>
						<span
							class="relative block w-2.5 h-2.5 bg-primary-600 rounded-full"
							aria-hidden="true"
						></span>
						<span class="sr-only">Step 2</span>
					</a>
				</li>

				<li>
					<!-- Upcoming Step -->
					<a
						href="#"
						class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
					>
						<span class="sr-only">Step 3</span>
					</a>
				</li>

				<li>
					<!-- Upcoming Step -->
					<a
						href="#"
						class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
					>
						<span class="sr-only">Step 4</span>
					</a>
				</li>
			</ol>

			<!-- <p class="text-sm text-gray-500 mt-4">Step 2 of 4</p> -->
		</nav>
</template>



<script lang="ts" setup>
	import { ref } from 'vue';
	let background = ref(false);
	let padding = ref(false);
	let rounded = ref(false);
	let marker = ref(false);

	const setBox = () => {
		setTimeout(function () {
			background.value = true;
		}, 500);
		setTimeout(function () {
			padding.value = true;
		}, 1200);
		setTimeout(function () {
			rounded.value = true;
		}, 1900);
		setTimeout(function () {
			marker.value = true;
		}, 2600);
	}

</script>
