<template>
	<ChapterHeader>
		<template #subtitle>Markdown · HTML/TailwindCSS</template>
		<template #header>Beautiful per default, flexible on demand</template>
		<template #content>
			<Fiderio /> combines the simplicity of Markdown with the typographic
			beauty of TeX and the flexibility of HTML/TailwindCSS.
		</template>
	</ChapterHeader>
	<Editor :lines="9">
		<template #input><pre><code class="language-markdown">Incididunt <code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span> <span :class="step < 1 && 'highlight'"><span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>decoration-orange<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>in amet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">&gt;</span></span> </code> est magna.
<span v-if="step > 0" id="step1"></span>
<span class="token list punctuation">-</span> Occaecat Lorem qui et id officia aliquip.
<span class="token list punctuation">-</span> Dolor consequat minim occaecat exercitation quis labore.
<span class="token list punctuation">-</span> Pariatur pariatur consectetur tempor duis ullamco mollit.<span v-if="step > 0" id="step2"></span></code></pre></template>
		<template #output>
			<div class="font-sans text-[0.95em]">
				<p class="mt-0">
					Incididunt
					<u class="decoration-primary-500 decoration-2 underline-offset-4">in amet</u> est magna.
				</p>
				<div
					:class="[
						step > 3 ? 'bg-gray-200' : 'border-white',
						step > 4 ? 'p-4' : 'p-0',
						step > 5 ? 'border-l-8' : 'border-l-0',
						step > 6
							? 'border-l-primary-500'
							: 'border-l-white',
					]"
					class="duration-1000 marker:text-gray-600"
				>
					<ul class="">
						<li class="mt-1">Occaecat lorem qui et id officia aliquip.</li>
						<li>Dolor consequat minim occaecat exercitation quis.</li>
						<li class="mb-0.5">Pariatur pariatur consectetur tempor duis mollit.</li>
					</ul>
				</div>
			</div>
		</template>
	</Editor>
	<nav
		ref="el"
		class="flex items-center justify-center mt-2 flex flex-col"
		aria-label="Progress"
	>
		<ol role="list" class="flex istepperStep-center mt-6 space-x-5">
			<Step :step="1"  :state="stepperStep < 1 ? 1 : (stepperStep < 4 ? 0 : -1)"/>
			<Step :step="2"  :state="stepperStep < 4 ? 1 : (stepperStep === 4 ? 0 : -1)"/>
			<Step :step="3"  :state="stepperStep < 5 ? 1 : (stepperStep === 5 ? 0 : -1)"/>
			<Step :step="4"  :state="stepperStep < 6 ? 1 : (done ? -1 : 0)"/>
		</ol>
		<!-- <p class="text-sm text-gray-500 mt-4">Step 2 of 4</p> -->
	</nav>
</template>

<script lang="ts" setup>
	import { ref, watch, reactive } from "vue";
	import Typed from 'typed.js';
	import { useIntersectionObserver } from '@vueuse/core';

	const options = {};
	const step = ref(0);
	const stepperStep = ref(0);
	const lines = ref(5);
    const done = ref(true);
    const isVisible = ref(false);
	const el = ref(undefined);

    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      isVisible.value = isIntersecting;
    });

	const type = (speed: number, delay: boolean, string: string) => {
		setTimeout(function () {
			stepperStep.value = step.value;
			step.value == 1 && lines.value++;
			step.value == 2 && lines.value++;
			step.value > 1 && document.getElementsByClassName('typed-cursor')[0]?.remove();
			const typed = new Typed('#step' + step.value, {
				strings: [ string ],
				typeSpeed: speed,
				onComplete: (self) => {
					nextStep();
					if(step.value === 6){
						done.value = true;
					}
		 		},
				fadeOutDelay: 3000,
			});
		}, delay ? 1400 : 0);
	}

	const init = () => {
		if(!done.value){
			return;
		}
		done.value = false;
		step.value = 0;
		stepperStep.value = 0;
		lines.value = 5;
		nextStep();
	}

	watch(isVisible, () => {
      if (isVisible.value) {
        init();
      }
    });

	const nextStep = () => {
		setTimeout(function () {
			step.value++;
			switch (step.value) {
			case 1:
				type(20, false, '</br><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span id="step3"/></span></span><span class="token punctuation">&gt;</span></span></code>')
				break;
			case 2:
				type(20, false, '</br><code class="language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code>')
				break;
			case 3:
				type(70, false, '<span class="token attr-name"> class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-grey<span id="step4"></span><span class="token punctuation">"</span>')
				break;
			case 4:
				type(50, true, '<span> p-2</span><span id="step5"></span>')
				break;
			case 5:
				type(60, true, '<span> border-l-8</span><span id="step6"></span>')
				break;
			case 6:
				type(60, true, '<span> border-l-orange</span>')
				break;
			}
		}, 200);
	};
</script>
