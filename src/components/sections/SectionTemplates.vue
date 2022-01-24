<template>
  <ChapterHeader>
    <template #subtitle>
      Reusbale Templates
    </template>
    <template #header>
      Life is too short for Copy-Paste.
    </template>
    <template #content>
      Instead of repeating the same code over and over and over again, transform it into a reusable template. Your content becomes cleaner and you've got a single source of truth to change styles in one place.
    </template>
  </ChapterHeader>
  <TabGroup @change="changedTab">
    <Editor :lines="8" :split="split && 4">
      <template #input>
        <TabPanels>
          <TabPanel>
            <pre class="language-markup" tabindex="0"><code class="language-markup">Amet et ea id quis nostrud <span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;</span>Marked</span><span class="token punctuation">&gt;</span></span>ad anim ut laboris<span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;/</span>Marked</span><span class="token punctuation">&gt;</span></span> veniam laboris irure anim id nisi Lorem.
Adipisicing nostrud tempor amet commodo laboris adipisicing Lorem qui sint. Id amet dolore ad in.
<span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;</span>Marked</span><span class="token punctuation">&gt;</span></span>Aliquip<span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;/</span>Marked</span><span class="token punctuation">&gt;</span></span> aliqua do cillum veniam non. In quis nisi laboris voluptate aliqua in commodo nostrud occaecat ipsum.
Ipsum consectetur exercitation <span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;</span>Marked</span><span class="token punctuation">&gt;</span></span>labore<span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;/</span>Marked</span><span class="token punctuation">&gt;</span></span> reprehenderit sint laborum enim. Ad nisi sunt do deserunt labore ea.</code></pre>
            <div class="block my-[13px] w-full h-[1px] bg-white border-white opacity-5" />
            <pre class="opacity-50 language-markup" tabindex="0"><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-red-100 rounded-md ...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre>
          </TabPanel>
          <TabPanel>
            <pre class="language-markup" tabindex="0"><code class="language-markup">Amet et ea id quis nostrud <span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-red rounded-md ...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>ad anim ut laboris<span class="token tag"><span class="token tag highlight"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> veniam laboris irure anim id nisi Lorem.
Adipisicing nostrud tempor amet commodo laboris adipisicing Lorem qui sint. Id amet dolore ad in.
<span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-red rounded-md ...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Aliquip<span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> aliqua do cillum veniam non. In quis nisi laboris voluptate aliqua in commodo nostrud occaecat ipsum.
Ipsum consectetur exercitation <span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-red rounded-md ...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>labore<span class="token tag highlight"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> reprehenderit sint laborum enim. Ad nisi sunt do deserunt labore ea.</code></pre>
          </TabPanel>
        </TabPanels>
      </template>
      <template #output>
        <p>
          Amet et ea id quis nostrud <Marked>ad anim ut laboris</Marked> veniam laboris irure anim id nisi Lorem.
          Adipisicing nostrud tempor amet commodo laboris adipisicing Lorem qui sint. Id amet dolore ad in.
          <Marked>Aliquip</Marked> aliqua do cillum veniam non. In quis nisi laboris voluptate aliqua in commodo nostrud occaecat ipsum.
          Ipsum consectetur exercitation <Marked>labore</Marked> reprehenderit sint laborum enim. Ad nisi sunt do deserunt labore ea.
        </p>
      </template>
    </Editor><div class=" px-4 xl:px-0">
      <TabList class="flex p-1 mx-auto mt-8 space-x-1 max-w-md bg-primary-600 rounded-xl">
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
    </div>
  </TabGroup>
</template>

<script lang="ts" setup>
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'

const current = ref(0)
const split = ref(false)

const tabs = [
  { name: 'Template' },
  { name: 'Without template' },
]

const changedTab = (index: number) => {
  split.value = index === 0
}

</script>
