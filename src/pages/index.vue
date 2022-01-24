
<template>
  <header>
    <Hero />
  </header>

  <main class="py-8 leading-loose text-gray-900 bg-gray-100">
    <div class="my-24 space-y-24 text-lg">
      <section>
        <SectionHybridity />
      </section>
      <section class="!mt-36">
        <SectionFlexibility />
      </section>
      <section>
        <SectionShorts />
      </section>
      <section>
        <SectionTemplates />
      </section>
      <section class="!mt-36">
        <SectionScripting />
      </section>
    </div>
  </main>

  <PartFooter class="pt-24" />
</template>

<script setup lang="ts">
import 'prism-theme-vars/base.css'
</script>

<route lang="yaml">
name: home
</route>
