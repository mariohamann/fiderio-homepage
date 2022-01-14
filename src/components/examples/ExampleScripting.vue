<template>
	<Editor :lines="data.length * 4 + 16">
		<template #input>
			<pre v-bind:class="{ loading: loading }" tabindex="0"><code
				v-pre class="language-markdown"><span class="token title important"><span class="token punctuation">###</span> Dynamic sample description</span>

The last update of the sample was at <span class="highlight token code-snippet code keyword">{{ <code class="language-javascript">time</code> }}</span>.

<span class="token list punctuation">-</span> The sample size is N = <span class="highlight token code-snippet code keyword">{{ <code class="language-javascript">data<span class="token punctuation">.</span>length</code> }}</span>.
<span class="token list punctuation">-</span> Participants were on average <span class="highlight token code-snippet code keyword">{{ <code class="language-javascript">math<span class="token punctuation">.</span><span class="token function">mean</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span></code> }}</span> years old, with a maximum of <span class="highlight token code-snippet code keyword">{{ <code class="language-javascript">Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span></code> }}</span>, and a minimum of <span class="highlight token code-snippet code keyword">{{ <code class="language-javascript">Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span></code> }}</span>.
<span class="token list punctuation">-</span> <span class="highlight token code-snippet code keyword">{{ <code class="language-javascript">data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>happy <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">)</span><span class="token punctuation">.</span>length</code> }}</span> of them were happy (<span class="highlight token code-snippet code keyword">{{ <code class="language-javascript">Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>happy <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">/</span> data<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span></code> }}</span>%).</code></pre>
			<pre class="opacity-30">



// imported data

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token keyword">const</span> data <span class="token operator">=</span> {{ JSON.stringify(data, null, 4) }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></pre>
		</template>
		<template #output>
			<h3>Sample description</h3>
			<p  :class="{loading: loading}" class="mb-2">The last update of the sample was at <span class="dynamic">{{ time }}</span>.</p>
			<ul :class="{loading: loading}" >
				<li>The sample size is N = <span class="dynamic">{{ data.length }}</span>.</li>
				<li>
					Participants were on average
					<span class="dynamic">{{
						Math.round(
							data.reduce(
								(summedAge, date) => summedAge + date.age,
								0
							) / data.length
						)
					}}</span>
					years old, with a maximum of
					<span class="dynamic">{{ Math.max(...data.map(x => x.age)) }}</span>, and a minimum of
					<span class="dynamic">{{ Math.min(...data.map(x => x.age)) }}</span>.
				</li>
				<li>
					<span class="dynamic">{{ data.filter(x => x.happy == true).length }}</span> of them were
					happy (<span class="dynamic">{{
						Math.round(
							(data.filter(x => x.happy == true).length /
								data.length) *
								100
						)
					}}</span>%).
				</li>
			</ul>
		</template>
	</Editor>
	<div class="w-full mt-8 text-center left-0">
		<Button @click="addNewData">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 animate-pulse"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
					clip-rule="evenodd"
				/>
			</svg>
			<span>Add new data</span>
		</Button>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	const getTime = () => new Date().toLocaleTimeString();

	const getRandomInt = (min: number, max: number) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
	};

	// variable
	let lastTime = ref(getTime());
	let time = ref(getTime());
	let data = ref([{ age: 30, happy: true }]);
	let loading = ref(false);

	const addNewData = () => {
		loading.value = true;
		setTimeout(function () {
			time.value = getTime();
			for (let index = 0; index < getRandomInt(5, 10); index++) {
				data.value.unshift({
					age: getRandomInt(8, 93),
					happy: getRandomInt(0, 10) > 4,
				});
			}
			loading.value = false;
		}, 500);
	};


	addNewData();
</script>
