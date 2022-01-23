<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-12 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-50 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
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
              <div v-if="!submit">
                <form class="mt-3 flex" @submit.prevent="submitForm">
                  <label class="hidden" for="name">Name</label>
                  <input id="name" v-model="honeypot" class="hidden" tabindex="-1" type="text" name="name" placeholder="Name">
                  <label for="email" class="sr-only">Email</label>
                  <input id="email" v-model="email" type="email" name="email" required class="block w-full py-3 text-base rounded-md placeholder-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300" placeholder="Enter your email">
                  <button type="submit" class="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-0 ml-3 flex-shrink-0 inline-flex items-center w-auto">
                    Notify me
                  </button>
                </form>
                <p class="mt-3 text-sm text-gray-400 italic">
                  We will ping you once, when <Fiderio /> is available.<br>No spam, no newsletter.
                </p>
              </div>
              <div v-else class="text-left rounded-md bg-green-50 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: solid/exclamation -->
                    <svg class="h-5 w-5 text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
      <svg class="z-10 block lg:hidden top-0 absolute right-0 inset-y-0 h-10 md:h-12 w-screen text-gray-50" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="0,0 100,0 0,100 0,100" />
      </svg>
      <div id="hero-image-fader" class="z-0 relative h-96 object-cover lg:w-full lg:h-full">
        <img class="absolute h-96 w-full object-cover lg:w-full lg:h-full" src="@/assets/hero/hero-1.jpg" alt="">
        <img class="absolute h-96 w-full object-cover lg:w-full lg:h-full" src="@/assets/hero/hero-2.jpg" alt="">
        <img class="absolute h-96 w-full object-cover lg:w-full lg:h-full" src="@/assets/hero/hero-3.jpg" alt="">
      </div>
      <!-- <styles>
        @keyframes cf4FadeInOut {
        0% {
        opacity:1;
        }
        17% {
        opacity:1;
        }
        25% {
        opacity:0;
        }
        92% {
        opacity:0;
        }
        100% {
        opacity:1;
        }
        }

        #hero-image-fader img:nth-of-type(2) {
        animation-delay: 4s;
        }
        #hero-image-fader img:nth-of-type(3) {
        animation-delay: 2s;
        }
        #hero-image-fader img:nth-of-type(4) {
        animation-delay: 0;
        }
      </styles> -->
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
