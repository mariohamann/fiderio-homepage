<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="bg-gradient-to-tr p-6 lg:p-24 from-primary-500 to-secondary-600">
  <div class="max-w-screen-lg mx-auto">
    <h3 class="text-4xl leading-6 font-serif text-white mb-12">
      You won't miss LaTeX – promised.
    </h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div v-for="item in items" :key="item.title" class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
		<div>
			<svg class="text-primary-600"
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
        <dt class="text-lg font-semibold text-gray-900 truncate">
          {{ item.title }}
        </dt>
        <dd class="mt-1 text-gray-800">
          {{ item.content }}
        </dd>
      </div>
    </dl>
  </div></div>
</template>

<script lang="ts" setup>
const items = [
  { title: 'Versioning', content: 'Only plain text files and folders – everything works perfectly with Git or similar.' },
  { title: 'Equitations', content: 'Beautiful and accessible (!) equitations with the exact same syntax you\'re used to.'},
  { title: 'Familiarity', content: 'From \\cite to <Cite>, from \\caption to <Caption> – your switch will be smooth.' },
  { title: 'Local first', content: 'Everything runs on your own computer – no cloud, no tracking.' },
  { title: 'Extendable', content: 'Everything runs on your own computer – no cloud or web services needed.' },
  { title: 'Export', content: 'PDF and web export out of the box, Pandoc compatibility for everything else.' },
  { title: 'File splitting', content: ' Import separated content with <FileName/>, the path will be handled automatically.' },
  { title: 'Preview', content: ' Save your edits and thanks to Vite you will get your preview immediately.' },
]
</script>
