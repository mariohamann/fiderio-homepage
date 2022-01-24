<template>
  <div class="overflow-hidden py-5 px-4 bg-white rounded-lg shadow sm:p-6">
    <div class="w-8 h-8 text-primary-600">
      <slot name="icon" />
    </div>
    <dt class="mt-4 text-lg font-semibold text-gray-900 truncate">
      <slot name="title" />
    </dt>
    <dd class="mt-1 text-gray-800">
      <slot name="content" />
    </dd>
  </div>
</template>
