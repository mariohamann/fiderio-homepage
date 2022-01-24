<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="overflow-hidden relative bg-gray-50">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 pb-12 bg-gray-50 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
        <svg class="hidden absolute inset-y-0 right-0 w-48 h-full text-gray-50 translate-x-1/2 lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main class="px-4 pt-10 mx-auto max-w-7xl sm:px-6 sm:pt-12 md:pt-16 lg:px-8 lg:pt-20 xl:pt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block font-serif text-primary-600 xl:inline">In the spirit of TeX.</span>
              <span class="block font-serif leading-tight xl:inline"> With the future in mind. </span>
            </h1>
            <p class="mt-3 text-base text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              <Fiderio /> is your next-gen framework for creating well-structured, print- and web-ready documents using Markdown-based syntax.
            </p>
            <div class="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <div v-if="!submit">
                <form class="flex mt-3" @submit.prevent="submitForm">
                  <label class="hidden" for="name">Name</label>
                  <input id="name" v-model="honeypot" class="hidden" tabindex="-1" type="text" name="name" placeholder="Name">
                  <label for="email" class="sr-only">Email</label>
                  <input id="email" v-model="email" type="email" name="email" required class="block py-3 w-full text-base placeholder:text-gray-400 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:flex-1" placeholder="Enter your email">
                  <button type="submit" class="inline-flex shrink-0 items-center py-3 px-6 mt-0 ml-3 w-auto text-base font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm">
                    Notify me
                  </button>
                </form>
                <p class="mt-3 text-sm italic text-gray-400">
                  We will ping you once, when <Fiderio /> is available.<br>No spam, no newsletter.
                </p>
              </div>
              <div v-else class="p-4 text-left bg-green-50 rounded-md">
                <div class="flex">
                  <div class="shrink-0">
                    <!-- Heroicon name: solid/exclamation -->
                    <svg class="w-5 h-5 text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-base font-bold text-green-700">
                      Registration successful!
                    </h3>
                    <div class="mt-2 text-base text-green-700">
                      <p>
                        Thank you for your interest in Fiderio. We will ping you once, as soon as the beta is available!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div class="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <svg class="block absolute inset-y-0 right-0 z-10 w-screen h-10 text-gray-50 md:h-12 lg:hidden" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="0,0 100,0 0,100 0,100" />
      </svg>
      <div id="hero-image-fader" class="object-cover relative z-0 h-96 bg-gray-700 lg:w-full lg:h-full">
        <img class="object-cover absolute w-full h-96 lg:w-full lg:h-full" src="@/assets/hero/hero-1.jpg" alt="">
        <img class="object-cover absolute w-full h-96 lg:w-full lg:h-full" src="@/assets/hero/hero-2.jpg" alt="">
        <img class="object-cover absolute w-full h-96 lg:w-full lg:h-full" src="@/assets/hero/hero-3.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const FORMSPARK_ACTION_URL = 'https://submit-form.com/J5hFCcyH'

const honeypot = ref('')
const email = ref('')
const submit = ref(false)

async function submitForm() {
  await fetch(FORMSPARK_ACTION_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      message: email.value,
      name: honeypot.value,
    }),
  })
  submit.value = true
}
</script>
