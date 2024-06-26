<template>
  <ChapterHeader>
    <template #subtitle>
      Accessibile · hybrid
    </template>
    <template #header>
      Publish for people – not paper.
    </template>
    <template #content>
      Write in one file and publish for everyone and everywhere. No hassle with cross-compilation,
      formats for different media and versions for various output formats.
    </template>
  </ChapterHeader>
  <TabGroup @change="changedTab">
    <Editor :lines="16">
      <template #input>
        <pre class="language-markup" tabindex="0"><code class="language-markup"><span :class="hidden"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Figure</span><span class="token punctuation">&gt;</span></span></span>
<span :class="current === 0 ? shown : hidden" class="transition-opacity">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Screen</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newtons-cradle.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">loop</span> <span class="token attr-name">autoplay</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Screen</span><span class="token punctuation">&gt;</span></span></span>
<span :class="current === 1 ? shown : hidden" class="transition-opacity">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Print</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newtons-cradle.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Print</span><span class="token punctuation">&gt;</span></span></span>
<span :class="current === 2 ? shown : hidden" class="transition-opacity">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Screenreader</span><span class="token punctuation">&gt;</span></span>
    In the figure you can see a simplified and reduced version of Newton's cradle. At the top, 5 balls are suspended from a rectangle. Two of the balls are pulled and released. The two balls on the opposite side swing out by the same amount. The video is played in a loop.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Screenreader</span><span class="token punctuation">&gt;</span></span></span>
  <span :class="hidden"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Label</span><span class="token punctuation">&gt;</span></span></span>
    <span :class="hidden">Newton's cradle</span> <span :class="current === 1 ? shown : hidden" class="transition-opacity token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Print</span><span class="token punctuation">&gt;</span></span><span :class="current === 1 ? shown : hidden" class="transition-opacity">(before the impact vs. after the impact)</span><span :class="current === 1 ? shown : hidden" class="transition-opacity token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Print</span><span class="token punctuation">&gt;</span></span>
  <span :class="hidden"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Label</span><span class="token punctuation">&gt;</span></span></span>
<span :class="hidden"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Figure</span><span class="token punctuation">&gt;</span></span></span></code></pre><pre />
      </template>
      <template #output>
        <TabPanels>
          <TabPanel>
            <div class="text-center">
              <video
                src="@/assets/newtons-cradle.mp4"
                class="w-full bg-black rounded-xl"
                loop
                autoplay
                muted
                playsinline
                type="video/mp4"
              />
              <p><b>Fig 1</b>: Newton's cradle.</p>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="text-center">
              <img
                src="@/assets/newtons-cradle.jpeg"
                class="w-full"
              >
              <p><b>Fig 1</b>: Newton's cradle (before the impact vs. after the impact).</p>
            </div>
          </TabPanel>
          <TabPanel>
            <p tabindex="0">
              In the figure you can see a simplified and reduced version of Newton's cradle. At the top, 5 balls are suspended from a rectangle. Two of the balls are pulled and released. The two balls on the opposite side swing out by the same amount. The video is played in a loop.
            </p>
            <p class="text-center">
              <b>Fig 1</b>: Newton's cradle.
            </p>
          </TabPanel>
        </TabPanels>
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
const shown = 'opacity-90'
const hidden = 'opacity-30'

const tabs = [
  { name: 'Screen' },
  { name: 'Print' },
  { name: 'Screenreader' },
]

const changedTab = (index: number) => {
  current.value = index
}

</script>
