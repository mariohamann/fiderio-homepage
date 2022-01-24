<template>
  <li>
    <div
      href="#"
      class="flex relative justify-center items-center"
      aria-current="step"
    >
      <span
        :class="state === 0 ? 'opacity-100 w-6 h-6' : 'opacity-0 w-0 h-0'"
        class="flex absolute p-px transition-all"
        aria-hidden="true"
      >
        <span class="w-full h-full bg-primary-200 rounded-full" />
      </span>
      <span
        :class="state > 0 ? 'bg-gray-200' : 'bg-primary-600' "
        class="block relative w-2.5 h-2.5 rounded-full transition duration-1000"
        aria-hidden="true"
      />
      <span class="sr-only">Step {{ step }}</span>
    </div>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  state: Number as () => -1 | 0 | 1,
  step: Number!,
})
</script>
