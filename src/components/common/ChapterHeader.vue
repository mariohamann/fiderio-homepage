
<template>
  <div class="px-4 pb-6 mb-2 text-center xl:px-0">
    <p class="mb-1 font-serif text-base text-primary-600 uppercase">
      <slot name="subtitle" />
    </p>
    <h2 class="pb-3 font-serif text-3xl">
      <slot name="header" />
    </h2>
    <p class="pb-2 mx-auto mt-2 max-w-xl text-lg">
      <slot name="content" />
    </p>
  </div>
</template>
