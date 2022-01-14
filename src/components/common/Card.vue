<template>
	<div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
		<div class="text-primary-600 w-8 h-8">
			<slot name="icon"/>
		</div>
        <dt class="mt-4 text-lg font-semibold text-gray-900 truncate">
          <slot name="title"/>
        </dt>
        <dd class="mt-1 text-gray-800">
          <slot name="content"/>
        </dd>
      </div>
</template>
