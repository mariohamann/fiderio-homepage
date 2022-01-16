<template>
	<ChapterHeader>
		<template #subtitle>Accessibile · hybrid</template>
		<template #header
			>Publish for people – not paper.</template
		>
		<template #content>
			Write once and publish everywhere. No hassle with cross-compilation, formats for different media and versions for various output formats.
		</template>
	</ChapterHeader>
	<Editor>
		<template #input>
			<pre>(figure)
	(screen)
		(video src="newtons-cradle.mp4" loop autoplay /)
	(screen)
	(print)
		(img src="newtons-cradle.jpg"/)
	(/print)
	(screenreader)
		Labore sunt officia ipsum sint ea labore enim occaecat. Incididunt id sunt excepteur in tempor velit ut.
	(/screenreader)
	(label)
		Newtons cradle (print)vor dem Stoß vs. nach dem Stoß(/print)
	(/label)
(/figure)</pre></template>
		<template #output>
			<div class="text-center">
				<video src="@/assets/newtons-cradle.mp4" class="bg-black w-full rounded-xl" loop autoplay muted></video>
				<p><b>Fig 1</b>: Newton's cradle (idealized).</p>
			</div>
		</template>
	</Editor>
</template>
