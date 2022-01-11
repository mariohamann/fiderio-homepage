<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	import 'prism-theme-vars/base.css';
	import ChapterHeader from '@/components/ChapterHeader.vue';
	useHead({
		title: 'Fiderio | Create and publish the 21th century way',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<div class="text-lg">
		<section>
			<div class="max-w-screen-lg mx-auto lg:pb-12 items-center">

			<ChapterHeader>
				<template #subtitle>Hybridity</template>
				<template #header>Spread the word – on paper, screen and assistive technologies</template>
				<template #content>
					Your content deserves more than being optimized for printers. Fiderio provides the toolset to widen and please your audience on every medium – without needing you to be a computer scientist.
				</template>
			</ChapterHeader>
			<Editor>
				<template #output>
					<div class="text-center">
						<div class="bg-black aspect-w-16 aspect-h-9 w-full"></div>
						<p>
							<b>Fig 1</b>: A video about something cool.
						</p>
					</div>
				</template>
			</Editor>
				<ChapterHeader>
				<template #subtitle>Inline Scripting</template>
				<template #header> Be as fast as your data. </template>
				<template #content>
					Do you create reports on a regular basis or does your data sometimes change
					during your writing process? Dynamise your content with the full power
					of
					<Link
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						>JavaScript</Link
					> – and never touch those lines again.
				</template>
			</ChapterHeader>
			<ExampleDynamicData />
			<ChapterHeader>
				<template #subtitle>Markdown + HTML/CSS</template>
				<template #header>Beautiful per default, flexible on demand</template>
				<template #content>
					Fiderio uses Markdown to provide a calm and focused writing environment without losing the typographic power of TeX. Being build on HTML and TailwindCSS, you'll be able to individualize your content or theme in seconds.
				</template>
			</ChapterHeader>
			<Editor>
				<template #input>
					# Hello
				</template>
				<template #output>
					<p>This is some <u class="decoration-primary-600 underline-offset-2 decoration-1">content</u>.</p>
					<div class="bg-gray-100 rounded-md p-2 marker:text-amber-600">
					<ul>
						<li>List item 1</li>
						<li>List item 1</li>
						<li>List item 1</li>
					</ul>
					</div>
					<div class="hidden border border-gray-700 rounded-md p-2 my-3 marker:text-gray-700">
					<ul>
						<li>List item 1</li>
						<li>List item 1</li>
						<li>List item 1</li>
					</ul>
					</div>
				</template>
			</Editor>
			<!-- This example requires Tailwind CSS v2.0+ -->
			<nav class="flex items-center justify-center mt-6 flex flex-col" aria-label="Progress">

			<ol role="list" class="flex items-center space-x-5">
				<li>
				<!-- Completed Step -->
				<a href="#" class="block w-2.5 h-2.5 bg-primary-600 rounded-full hover:bg-primary-900">
					<span class="sr-only">Step 1</span>
				</a>
				</li>

				<li>
				<!-- Current Step -->
				<a href="#" class="relative flex items-center justify-center" aria-current="step">
					<span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
					<span class="w-full h-full rounded-full bg-primary-200"></span>
					</span>
					<span class="relative block w-2.5 h-2.5 bg-primary-600 rounded-full" aria-hidden="true"></span>
					<span class="sr-only">Step 2</span>
				</a>
				</li>

				<li>
				<!-- Upcoming Step -->
				<a href="#" class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
					<span class="sr-only">Step 3</span>
				</a>
				</li>

				<li>
				<!-- Upcoming Step -->
				<a href="#" class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
					<span class="sr-only">Step 4</span>
				</a>
				</li>
			</ol>

			<p class="text-sm font-medium mt-4">Step 2 of 4</p>
			</nav>

				<div
					class="grid grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-2 md:gap-y-8 gap-x-8"
				>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div
							style="
								color: #4c3cfe;
								font-size: 20px;
								font-weight: bold;
								margin-bottom: 15px;
							"
						>
							&lt; 50ms
						</div>
						<div>
							<p class="pb-2"><strong>Built for speed</strong></p>
							<p style="color: grey">
								Your Terminal is fast. So is Fig.
							</p>
						</div>
					</div>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div
							style="
								color: #4c3cfe;
								font-size: 20px;
								font-weight: bold;
								margin-bottom: 15px;
							"
						>
							⌘
						</div>
						<div>
							<p class="pb-2"><strong>Keyboard first</strong></p>
							<p style="color: grey">
								But you can use your mouse if you'd like
							</p>
						</div>
					</div>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#4c3cfe"
								style="
									background-color: none;
									border-radius: 10px;
									width: 45px;
									height: 45px;
									padding: 8px;
									position: relative;
									right: 10px;
									bottom: 5px;
								"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
								></path>
							</svg>
						</div>
						<div>
							<p class="pb-2"><strong>Crowdsourced</strong></p>
							<p style="color: grey">
								Completion specs are open source and built by
								the community
							</p>
						</div>
					</div>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#4c3cfe"
								style="
									background-color: none;
									border-radius: 10px;
									width: 45px;
									height: 45px;
									padding: 8px;
									position: relative;
									right: 10px;
									bottom: 5px;
								"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
								></path>
							</svg>
						</div>
						<div>
							<p class="pb-2">
								<strong>Individuals &amp; teams</strong>
							</p>
							<p style="color: grey">
								Use Fig for public CLI tools, or for your team's
								internal ones
							</p>
						</div>
					</div>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#4c3cfe"
								style="
									background-color: none;
									border-radius: 10px;
									width: 45px;
									height: 45px;
									padding: 8px;
									position: relative;
									right: 10px;
									bottom: 5px;
								"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
								></path>
							</svg>
						</div>
						<div>
							<p class="pb-2"><strong>Local</strong></p>
							<p style="color: grey">
								Fig loads up once then remains entirely local
							</p>
						</div>
					</div>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#4c3cfe"
								style="
									background-color: none;
									border-radius: 10px;
									width: 45px;
									height: 45px;
									padding: 8px;
									position: relative;
									right: 10px;
									bottom: 5px;
								"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
								></path>
							</svg>
						</div>
						<div>
							<p class="pb-2"><strong>Private</strong></p>
							<p style="color: grey">
								Sensitive data is never tracked
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<route lang="yaml">
name: home
</route>
