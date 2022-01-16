
<template>
  <div class="text-center pb-6 mb-2  px-4 xl:px-0">
    <p class="uppercase text-primary-600 font-serif mb-1 text-base">
      <slot name="subtitle" />
    </p>
    <h2 class="pb-3 font-serif text-3xl">
      <slot name="header" />
    </h2>
    <p class="text-lg max-w-xl mx-auto pb-2 mt-2">
      <slot name="content" />
    </p>
  </div>
</template>
