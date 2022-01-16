<script setup lang="ts">
defineEmits(['toggleSidebar'])
const body = ref<HTMLBodyElement | null>(null)
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-12 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main class="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block font-serif text-primary-600 xl:inline">In the spirit of TeX.</span>
              <span class="block font-serif xl:inline leading-tight"> With the future in mind. </span>
            </h1>
            <p class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              <Fiderio /> is your next-gen framework for creating well-structured, print- and web-ready documents using Markdown-based syntax.
            </p>
            <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <form action="#" method="POST" class="mt-3 flex">
                <label for="email" class="sr-only">Email</label>
                <input id="email" type="email" name="email" class="block w-full py-3 text-base rounded-md placeholder-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300" placeholder="Enter your email">
                <button type="submit" class="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-0 ml-3 flex-shrink-0 inline-flex items-center w-auto">
                  Notify me
                </button>
              </form>
              <p class="mt-3 text-sm text-gray-400 italic">
                We will ping you once, when <Fiderio /> is available.<br>No spam, no newsletter.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div class="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <svg class="block lg:hidden top-0 absolute right-0 inset-y-0 h-10 md:h-12 w-screen text-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="0,0 100,0 0,100 0,100" />
      </svg>
      <img class="h-96 w-full object-cover lg:w-full lg:h-full" src="@/assets/hero-image.jpg" alt="">
    </div>
  </div>
</template>
