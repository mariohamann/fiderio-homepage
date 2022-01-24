<template>
  <div class="px-4">
    <div
      class="flex overflow-hidden relative mx-auto max-w-screen-xl bg-gray-900 rounded-xl shadow-xl"
    >
      <div class="flex relative flex-col w-full">
        <div class="flex-none border-b border-gray-500/30">
          <div class="flex items-center px-3 space-x-1.5 h-8">
            <div class="w-2.5 h-2.5 bg-gray-600 rounded-full" />
            <div class="w-2.5 h-2.5 bg-gray-600 rounded-full" />
            <div class="w-2.5 h-2.5 bg-gray-600 rounded-full" />
          </div>
        </div>
        <div class="flex relative flex-col flex-auto min-h-0 md:flex-row">
          <div v-if="$slots.input" class="flex flex-auto min-h-0 bg-gray-800 md:w-1/2">
            <div class="flex overflow-auto flex-auto w-full min-h-0">
              <div class="relative flex-auto w-full">
                <pre
                  class="flex items-stretch min-h-full font-mono text-sm leading-7"
                ><div v-if="lines > 0" aria-hidden="true" class="hidden flex-none py-6 pr-4 w-14 text-right text-gray-600 select-none md:block">1<span v-for="n in (lines - 1)" :key="n"><br v-if="n < lines">{{ !split ? n + 1 : (n === split ? '' : (n < split ? n+1 : n - split)) }}</span></div>
              <code class="block overflow-auto relative flex-auto !self-stretch py-6 px-4 !h-full text-gray-50"><slot name="input" /></code></pre>
              </div>
            </div>
          </div>
          <div v-if="$slots.output" class="flex flex-auto min-h-0 bg-white md:w-1/2">
            <div class="flex overflow-auto flex-auto w-full min-h-0">
              <!-- eslint-disable-next-line tailwindcss/no-contradicting-classname -->
              <div class="relative flex-auto p-8 m-auto w-full font-serif prose prose-gray prose-lg">
                <slot name="output" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  lines: Number!,
  split: Number,
})
</script>
