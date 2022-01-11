<script setup lang="ts">
	import { useStore } from '@/store';
	import VitailseLogo from '@/assets/logo.png';
	import 'prism-theme-vars/base.css';
import ChapterFlexibility1 from '@/components/chapters/ChapterFlexibility.vue';
	useHead({
		title: 'Fiderio | Create and publish the 21th century way',
	});

	const store = useStore();
	const { t } = useI18n();
</script>

<template>
	<div class="text-lg">
		<section>
			<ChapterHybridity/>
			<ChapterFlexibility/>
			<div class="max-w-screen-lg mx-auto lg:pb-12 items-center">
				<div
					class="grid grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-2 md:gap-y-8 gap-x-8"
				>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div
							style="
								color: #4c3cfe;
								font-size: 20px;
								font-weight: bold;
								margin-bottom: 15px;
							"
						>
							&lt; 50ms
						</div>
						<div>
							<p class="pb-2"><strong>Built for speed</strong></p>
							<p style="color: grey">
								Your Terminal is fast. So is Fig.
							</p>
						</div>
					</div>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div
							style="
								color: #4c3cfe;
								font-size: 20px;
								font-weight: bold;
								margin-bottom: 15px;
							"
						>
							⌘
						</div>
						<div>
							<p class="pb-2"><strong>Keyboard first</strong></p>
							<p style="color: grey">
								But you can use your mouse if you'd like
							</p>
						</div>
					</div>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#4c3cfe"
								style="
									background-color: none;
									border-radius: 10px;
									width: 45px;
									height: 45px;
									padding: 8px;
									position: relative;
									right: 10px;
									bottom: 5px;
								"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
								></path>
							</svg>
						</div>
						<div>
							<p class="pb-2"><strong>Crowdsourced</strong></p>
							<p style="color: grey">
								Completion specs are open source and built by
								the community
							</p>
						</div>
					</div>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#4c3cfe"
								style="
									background-color: none;
									border-radius: 10px;
									width: 45px;
									height: 45px;
									padding: 8px;
									position: relative;
									right: 10px;
									bottom: 5px;
								"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
								></path>
							</svg>
						</div>
						<div>
							<p class="pb-2">
								<strong>Individuals &amp; teams</strong>
							</p>
							<p style="color: grey">
								Use Fig for public CLI tools, or for your team's
								internal ones
							</p>
						</div>
					</div>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#4c3cfe"
								style="
									background-color: none;
									border-radius: 10px;
									width: 45px;
									height: 45px;
									padding: 8px;
									position: relative;
									right: 10px;
									bottom: 5px;
								"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
								></path>
							</svg>
						</div>
						<div>
							<p class="pb-2"><strong>Local</strong></p>
							<p style="color: grey">
								Fig loads up once then remains entirely local
							</p>
						</div>
					</div>
					<div
						class="text-left p-4 md:p-8"
						style="
							background: radial-gradient(
								circle at top,
								rgba(41, 41, 46, 1) 0%,
								rgba(25, 25, 28, 1) 100%
							);
							box-shadow: 0px 11.4128px 35.1163px
								rgba(0, 0, 0, 0.3);
							border-radius: 7px;
							color: white;
						"
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="#4c3cfe"
								style="
									background-color: none;
									border-radius: 10px;
									width: 45px;
									height: 45px;
									padding: 8px;
									position: relative;
									right: 10px;
									bottom: 5px;
								"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
								></path>
							</svg>
						</div>
						<div>
							<p class="pb-2"><strong>Private</strong></p>
							<p style="color: grey">
								Sensitive data is never tracked
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<route lang="yaml">
name: home
</route>
