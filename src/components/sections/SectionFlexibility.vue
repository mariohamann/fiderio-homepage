<template>
	<ChapterHeader>
		<template #subtitle>Markdown · HTML/CSS</template>
		<template #header>Beautiful per default, flexible on demand</template>
		<template #content>
			<Fiderio/> combines the simplicity of Markdown with the typographic power of TeX and the flexibility of HTML/TailwindCSS.
		</template>
	</ChapterHeader>
	<Editor>
		<template #input> # Hello </template>
		<template #output>
			<p>
				This is some
				<u
					class="decoration-primary-600 underline-offset-2 decoration-1"
					>content</u
				>.
			</p>
			<div class="bg-gray-100 rounded-md p-2 marker:text-amber-600">
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
		</template>
	</Editor>
	<nav
		class="flex items-center justify-center mt-8 flex flex-col"
		aria-label="Progress"
	>
		<Button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 animate-pulse"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
					clip-rule="evenodd"
				/>
			</svg>
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

