<template>
	<section id="hero" class="mt-8">
		<div class="mx-auto max-w-7xl px-5 grid grid-cols-12 gap-0">
			<div class="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" style="z-index: -1;">
				<svg class="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
					<defs>
						<pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<rect x="0" y="0" width="4" height="4" class="text-purple-900" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
				</svg>
				<svg class="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
					<defs>
						<pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<rect x="0" y="0" width="4" height="4" class="text-purple-900 text-opacity-60" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
				</svg>
			</div>
			<div class="col-span-12 lg:col-span-6 text-center lg:text-left lg:flex lg:items-center">
				<div class="pb-3">
					<a href="https://solana.com/" target="_blank" class="inline-flex items-center text-white bg-pink-600 bg-opacity-0 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
						<svg class="h-7" viewBox="0 0 96 86" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M95.5053 67.8049L79.658 84.8288C79.3134 85.1986 78.8966 85.4934 78.4334 85.6949C77.9703 85.8964 77.4706 86.0003 76.9656 86H1.8398C1.48134 86 1.13068 85.8951 0.830924 85.6982C0.531164 85.5013 0.295357 85.221 0.152475 84.8917C0.00959266 84.5624 -0.03414 84.1985 0.0266501 83.8446C0.0874403 83.4908 0.250105 83.1624 0.494658 82.8999L16.3543 65.876C16.6979 65.5072 17.1134 65.2129 17.5751 65.0115C18.0368 64.81 18.5349 64.7056 19.0385 64.7048H94.1602C94.5187 64.7048 94.8693 64.8097 95.1691 65.0066C95.4688 65.2035 95.7046 65.4838 95.8475 65.8131C95.9904 66.1424 96.0341 66.5063 95.9734 66.8601C95.9126 67.214 95.7499 67.5423 95.5053 67.8049ZM79.658 33.5236C79.3134 33.1538 78.8966 32.859 78.4334 32.6575C77.9703 32.456 77.4706 32.3521 76.9656 32.3524H1.8398C1.48134 32.3524 1.13068 32.4573 0.830924 32.6542C0.531164 32.8511 0.295357 33.1314 0.152475 33.4607C0.00959266 33.79 -0.03414 34.1539 0.0266501 34.5078C0.0874403 34.8616 0.250105 35.19 0.494658 35.4525L16.3543 52.4764C16.6979 52.8452 17.1134 53.1394 17.5751 53.3409C18.0368 53.5424 18.5349 53.6468 19.0385 53.6476H94.1602C94.5187 53.6476 94.8693 53.5427 95.1691 53.3458C95.4688 53.1489 95.7046 52.8686 95.8475 52.5393C95.9904 52.21 96.0341 51.8461 95.9734 51.4922C95.9126 51.1384 95.7499 50.81 95.5053 50.5475L79.658 33.5236ZM1.8398 21.2952H76.9656C77.4706 21.2955 77.9703 21.1917 78.4334 20.9902C78.8966 20.7887 79.3134 20.4938 79.658 20.124L95.5053 3.1001C95.7499 2.83758 95.9126 2.50922 95.9734 2.15538C96.0341 1.80153 95.9904 1.4376 95.8475 1.10831C95.7046 0.779013 95.4688 0.498699 95.1691 0.301804C94.8693 0.10491 94.5187 1.21255e-05 94.1602 0L19.0385 0C18.5349 0.000858433 18.0368 0.105251 17.5751 0.306715C17.1134 0.508179 16.6979 0.802426 16.3543 1.17124L0.498747 18.1951C0.25443 18.4574 0.0918367 18.7854 0.0309086 19.1389C-0.0300194 19.4923 0.0133662 19.8559 0.155745 20.1851C0.298123 20.5142 0.533305 20.7945 0.832447 20.9918C1.13159 21.189 1.48169 21.2944 1.8398 21.2952Z" fill="white"/>
						</svg>
						<span class="ml-4 text-sm">Built on Solana Blockchain</span>
						<svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
						</svg>
					</a>
					<h1 class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-7 lg:text-4xl xl:text-6xl">
						<span class="md:block">The First Community</span>
						<span class="text-transparent bg-clip-text bg-gradient-primary leading-normal whitespace-nowrap md:block"><span class="text-white">Governed</span> IDO Platform</span>
					</h1>
					<p class="mt-7 text-base text-gray-300 font-medium text-xl">
						Parasol Finance is the first-ever community governed IDO platform built on Solana with the needs of both projects and investors alike.
					</p>
					<div class="flex justify-center mt-6 sm:justify-between">
						<p class="text-yellow-300 text-lg font-bold mb-3 truncate">
							Buy your NFT access key now! (limited quantity) 🎉
						</p>
					</div>
					<div class="mt-8 grid lg:flex gap-3 grid-cols-1 lg:grid-cols-2 justify-start">
						<a href="https://jup.ag/swap/USDC-PSOL" target="_blank" class="flex items-center justify-center px-10 bg-purple-600 py-3 text-base font-medium rounded-full shadow-lg text-white bg-gradient-primary hover:from-pink-600 hover:to-purple-500">
							<LogoWhite class="h-5 w-5 mr-2" />
							Buy Parasol ($PSOL)
						</a>
						<button @click="joinCommunity" type="button" class="flex items-center justify-center px-7 py-3 text-base font-medium border border-white hover:bg-white hover:text-purple-600 rounded-full shadow-lg text-white hover:to-purple-500">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
							</svg>
							Join The Community
						</button>
					</div>
				</div>
			</div>
			<div class="mt-20 sm:mt-24 lg:mt-0 lg:col-span-6 hidden lg:flex justify-end">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-full p-20" style="position: absolute; width: 580px; top: 110px;" viewBox="0 0 545.936 628.168">
					<defs>
						<linearGradient id="linear-gradient" x1="1.204" y1="-0.074" x2="0.306" y2="1.04" gradientUnits="objectBoundingBox">
							<stop offset="0" stop-color="#7939ff"/>
							<stop offset="1" stop-color="#b064fe"/>
						</linearGradient>
					</defs>
					<g id="Group_42" data-name="Group 42" transform="translate(-477.032 -435.916)">
						<g id="Group_37" data-name="Group 37">
							<path id="Path_16" data-name="Path 16" d="M837.3,661.2V591.957L656.885,487.781,484.476,587.094a14.827,14.827,0,0,0-7.444,12.84v60.7L656.885,557.024Z" fill="url(#linear-gradient)"/>
							<path id="Path_17" data-name="Path 17" d="M869.892,786.964l59.961-35.586V537.214L757.443,437.9a14.823,14.823,0,0,0-14.827,0l-52.518,30.6L869.922,572.088Z" fill="url(#linear-gradient)"/>
						</g>
						<path id="Path_18" data-name="Path 18" d="M664.684,591.245,484.446,694.888a14.823,14.823,0,0,0-7.414,12.809v356.387h59.961V733.971L726.958,624.9Z" fill="url(#linear-gradient)"/>
						<path id="Path_19" data-name="Path 19" d="M630.108,994.128V717.069L570.147,752v311.963h59.961Z" fill="url(#linear-gradient)"/>
						<g id="Group_39" data-name="Group 39">
							<g id="Group_38" data-name="Group 38">
								<path id="Path_20" data-name="Path 20" d="M837.3,661.2V591.957L656.885,487.781,484.476,587.094a14.827,14.827,0,0,0-7.444,12.84v60.7L656.885,557.024Z" fill="url(#linear-gradient)"/>
							</g>
							<path id="Path_21" data-name="Path 21" d="M664.684,591.245,484.446,694.888a14.823,14.823,0,0,0-7.414,12.809v356.387h59.961V733.971L726.958,624.9Z" fill="url(#linear-gradient)"/>
							<path id="Path_22" data-name="Path 22" d="M630.108,994.128V717.069L570.147,752v311.963h59.961Z" fill="url(#linear-gradient)"/>
						</g>
						<g id="Group_40" data-name="Group 40">
							<path id="Path_23" data-name="Path 23" d="M842.551,902.615,1022.968,798.44V599.756a14.827,14.827,0,0,0-7.355-12.811l-52.577-30.632V763.537L782.62,867.712Z" fill="url(#linear-gradient)"/>
							<path id="Path_24" data-name="Path 24" d="M656.885,833.491l.594,69.243,185.665,107.112,172.41-99.342a14.827,14.827,0,0,0,7.414-12.84V836.99L843.144,941.166Z" fill="url(#linear-gradient)"/>
							<path id="Path_25" data-name="Path 25" d="M656.885,941.166v69.243l85.761,49.315a14.83,14.83,0,0,0,14.827,0l52.577-30.1Z" fill="url(#linear-gradient)"/>
							<path id="Path_26" data-name="Path 26" d="M963.036,556.43V764.219L782.62,868.394l59.931,34.34,180.417-104.175V599.875a14.827,14.827,0,0,0-7.355-12.812Z" fill="url(#linear-gradient)"/>
							<path id="Path_27" data-name="Path 27" d="M656.885,833.491l.594,69.243,185.665,107.675,172.44-99.876a14.828,14.828,0,0,0,7.384-12.841v-60.7L843.144,941.166Z" fill="url(#linear-gradient)"/>
							<path id="Path_28" data-name="Path 28" d="M656.885,1010.409l85.761,49.315a14.83,14.83,0,0,0,14.827,0l52.577-30.1L656.974,941.166Z" fill="url(#linear-gradient)"/>
						</g>
						<g id="Group_41" data-name="Group 41">
							<path id="Path_29" data-name="Path 29" d="M842.551,902.615,1022.968,798.44V599.756a14.827,14.827,0,0,0-7.355-12.811l-52.577-30.632V763.537L782.62,867.712Z" fill="url(#linear-gradient)"/>
							<path id="Path_30" data-name="Path 30" d="M656.885,833.491l.594,69.243,185.665,107.112,172.41-99.342a14.827,14.827,0,0,0,7.414-12.84V836.99L843.144,941.166Z" fill="url(#linear-gradient)"/>
							<path id="Path_31" data-name="Path 31" d="M656.885,941.166v69.243l85.761,49.315a14.83,14.83,0,0,0,14.827,0l52.577-30.1Z" fill="url(#linear-gradient)"/>
							<path id="Path_32" data-name="Path 32" d="M963.036,556.43V764.219L782.62,868.394l59.931,34.34,180.417-104.175V599.875a14.827,14.827,0,0,0-7.355-12.812Z" fill="url(#linear-gradient)"/>
							<path id="Path_33" data-name="Path 33" d="M656.885,833.491l.594,69.243,185.665,107.675,172.44-99.876a14.828,14.828,0,0,0,7.384-12.841v-60.7L843.144,941.166Z" fill="url(#linear-gradient)"/>
							<path id="Path_34" data-name="Path 34" d="M656.885,1010.409l85.761,49.315a14.83,14.83,0,0,0,14.827,0l52.577-30.1L656.974,941.166Z" fill="url(#linear-gradient)"/>
						</g>
					</g>
				</svg>
				<!--				<img class="bouncing" alt="bouncing-logo" style="width: 70%;" src="https://raw.githubusercontent.com/parasol-finance/white-paper/main/logo.png" />-->
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Hero",
	methods: {
		joinCommunity: function() {
			this.$root.$emit('joinCommunity');
		}
	}
}
</script>

<style scoped>
#hero
{
	min-height: calc(100vh - 20vh - 21vh);
}
</style>
