<template>
  <div>
    <TabGroup>
      <TabList class="flex p-1 space-x-1 border-2 border-black">
        <Tab
          v-for="tab in tabs"
          :key="tab.name"
          v-slot="{ selected }"
          as="template"
        >
          <button
            :class="[
              'w-full py-2.5 leading-5 font-medium',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60',
              selected
                ? 'shadow bg-black text-white'
                : 'text-black hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ tab.name }}
          </button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel :class="tabPanelClass">
          <div class="h-12">
            <!-- <video
            class="w-full h-auto"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            poster=""
          >
            <source
              src="https://fig.io/videos/main-demo-grey.mp4"
              type="video/mp4"
            />
            Your browser doesn't support the video tag.
          </video> -->
          </div>
        </TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script lang="ts" setup>
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
// const tabPanelClass = [
//   'bg-white h-12 bg-gray-900 rounded-xl p-3',
//   'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60',
// ];
const tabs = [
  { name: 'Screen' },
  { name: 'Paper' },
  { name: 'Screenreader' },
]
</script>
