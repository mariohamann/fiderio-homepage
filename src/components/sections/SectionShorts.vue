<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="py-16 px-10 bg-gradient-to-tr from-primary-500 to-secondary-600 lg:p-24"
  >
    <div class="mx-auto max-w-screen-lg">
      <h3 class="mb-12 font-serif text-4xl text-white">
        There's no reason to miss LaTeX – promised.
      </h3>
      <h3 class="mt-10 mb-4 text-2xl text-white">
        1. Edit
      </h3>
      <dl class="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
        <Card>
          <template #icon>
            <IconFamiliar />
          </template>
          <template #title>
            Familiar code
          </template>
          <template #content>
            From <InlineCode>\cite</InlineCode> to <InlineCode>&lt;Cite&gt;</InlineCode> – your switch will be smooth!
          </template>
        </Card>
        <Card>
          <template #icon>
            <IconFileSplitting />
          </template>
          <template #title>
            File splitting
          </template>
          <template #content>
            Import separated content just with
            <InlineCode>&lt;FileName/&gt;</InlineCode>.
          </template>
        </Card>
        <Card>
          <template #icon>
            <IconPreview />
          </template>
          <template #title>
            Fast preview
          </template>
          <template #content>
            Save your edits and they're
            immediately compiled.
          </template>
        </Card>
      </dl>
      <h3 class="mt-10 mb-4 text-2xl text-white">
        2. Extend
      </h3>
      <dl class="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
        <Card>
          <template #icon>
            <IconEquitations />
          </template>
          <template #title>
            Equations
          </template>
          <template #content>
            Use LaTeX syntax to create theorems and formulae.
          </template>
        </Card>
        <Card>
          <template #icon>
            <IconPlugins />
          </template>
          <template #title>
            Plugins
          </template>
          <template #content>
            Boost your writing with first-party and community plugins.
          </template>
        </Card>
        <Card>
          <template #icon>
            <IconTheme />
          </template>
          <template #title>
            Themes
          </template>
          <template #content>
            Change and personalize your document's design in seconds.
          </template>
        </Card>
      </dl>
      <h3 class="mt-10 mb-4 text-2xl text-white">
        3. Save and export
      </h3>
      <dl class="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
        <Card>
          <template #icon>
            <IconLocal />
          </template>
          <template #title>
            Local & private
          </template>
          <template #content>
            Everything runs on your own computer – no cloud, no
            tracking.
          </template>
        </Card>
        <Card>
          <template #icon>
            <IconGit />
          </template>
          <template #title>
            Versioning
          </template>
          <template #content>
            Plain text files and folders – everything works great
            with Git.
          </template>
        </Card>
        <Card>
          <template #icon>
            <IconExport />
          </template>
          <template #title>
            Export
          </template>
          <template #content>
            PDF, web export and Pandoc compatibility out of the
            box.
          </template>
        </Card>
      </dl>
    </div>
  </div>
</template>
