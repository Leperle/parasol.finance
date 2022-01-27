<template>
	<section v-if="preview" class="">
		<div class="lg:pt-12">
			<div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
				<div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
					<p class="text-2xl lg:text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
						Choose Your NFT Access Key
					</p>
					<p class="text-xl text-gray-300">
						Ready to Buy your NFT Access Key using $PSOL token.
						<a class="text-purple-500" target="_blank"
						   href="https://medium.com/@parasol-finance/parasol-finance-nfts-as-tiers-4dcfd48ca7e">Read
							More.</a>
					</p>
					<NuxtLink to="/claim-voucher" class="flex justify-center items-center gap-2 text-lg lg:text-3xl pt-6 font-extrabold text-purple-500">
						<svg class="w-5 lg:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
						Early Investor? Claim Your Voucher!
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="relative mt-3 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24 text-gray-700">
			<div class="relative">
				<div class="relative z-10 max--w-7xl mx-auto">
					<div class="mx-auto space-y-4 lg:max-w-12xl- lg:px-20 lg:grid lg:grid-cols-4 lg:gap-5 lg:space-y-0">
						<NftCard v-for="nft in nfts" :video="nft.video" :name="nft.name" :price="nft.price"
								 :vestingPeriod="nft.vestingPeriod" :hint="nft.hint"
								 :vestingFees="nft.vestingFees" :key="nft.name" :bonusLevel="getBonusLevel()" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section v-else class="countdown w-full flex flex-col gap-3 pb-12 items-center justify-center text-center">
		<div class="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" style="z-index: -1;">
			<svg
				class="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
				width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
				<defs>
					<pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20"
							 patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-indigo-900" fill="currentColor"/>
					</pattern>
				</defs>
				<rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
			</svg>
			<svg class="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2" width="404"
				 height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
				<defs>
					<pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20"
							 patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-indigo-900 text-opacity-60"
							  fill="currentColor"/>
					</pattern>
				</defs>
				<rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
			</svg>
		</div>
		<h1 class="text-3xl lg:text-5xl font-extrabold">
			<span
				class="text-transparent bg-clip-text bg-gradient-primary leading-normal whitespace-nowrap inline-block">
				Parasol Finance
			</span>
			<span class="text-white">| NFT Access Keys</span>
		</h1>
		<vue-countdown tag="div" class="flex gap-2 lg:gap-6 mb-3 justify-around text-center items-center" :time="presaleTimeOffset"
					   :interval="100" v-slot="{ days, hours, minutes, seconds, milliseconds }">
			<div class="flex flex-col text-center">
				<span class="text-6xl lg:text-9xl font-extrabold">{{ days }}</span>
				<span class="text-gray-200 text-xl text-center">Days</span>
			</div>
			<div class="text-6xl lg:text-9xl pt-3 font-extrabold text-gray-200 mb-12">:</div>
			<div class="flex flex-col">
				<span class="text-6xl lg:text-9xl font-extrabold">{{ hours }}</span>
				<span class="text-gray-200 text-xl text-center">Hours</span>
			</div>
			<div class="text-6xl lg:text-9xl pt-3 font-extrabold text-gray-200 mb-12">:</div>
			<div class="flex flex-col">
				<span class="text-6xl lg:text-9xl font-extrabold">{{ minutes }}</span>
				<span class="text-gray-200 text-xl text-center">Minutes</span>
			</div>
			<div class="text-6xl lg:text-9xl pt-3 font-extrabold text-gray-200 mb-12">:</div>
			<div class="flex flex-col">
				<span class="text-6xl lg:text-9xl font-extrabold">{{ seconds }}</span>
				<span class="text-gray-200 text-xl text-center">Seconds</span>
			</div>
		</vue-countdown>
		<p class="text-base lg:text-2xl font-light text-center">Parasol Finance is adopting a unique and never-before-seen<br/>mechanism
			for our upcoming IDO launchpad.</p>
		<div class="mt-10 flex gap-5 flex-col lg:flex-row justify-center items-center">
			<div class="rounded-md shadow">
				<button @click="play"
						class="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white text-white bg-gradient-primary hover:from-pink-600 hover:to-purple-500 md:py-4 md:text-lg md:px-10">
					<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
					Compare NFT Access Keys
				</button>
			</div>
			<div class="rounded-md shadow">
				<a href="https://medium.com/@parasol-finance/parasol-finance-nfts-as-tiers-4dcfd48ca7e" target="_blank"
				   class="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-full text-gray-200 hover:bg-white hover:text-gray-800 md:py-4 md:text-lg md:px-10">
					<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						 xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					Read More About The Concept
				</a>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: "nft-store",
	data() {
		return {
			participants: [],
			preview: false,
			now: new Date(),
			presaleDate: new Date("Tue, 1 Feb 2022 21:00:21 GMT"),
			presaleTimeOffset: 0,
			nfts: [
				{
					video: require('assets/videos/1.mp4'),
					hint: 'Unlimited',
					name: 'Dreamer',
					price: 210,
					vestingPeriod: 12,
					vestingFees: 21
				},
				{
					video: require('assets/videos/2.mp4'),
					hint: 'Unlimited',
					name: 'Rider',
					price: 2100,
					vestingPeriod: 8,
					vestingFees: 21
				},
				{
					video: require('assets/videos/3.mp4'),
					hint: 'Only 100',
					name: 'Chiller',
					price: 21000,
					vestingPeriod: 6,
					vestingFees: 21
				},
				{
					video: require('assets/videos/4.mp4'),
					hint: 'Only 10',
					name: 'MoonWalker',
					price: 210000,
					vestingPeriod: 4,
					vestingFees: 21
				}
			]
		}
	},
	mounted() {
		this.presaleTimeOffset = this.presaleDate - new Date();
		this.participants = require('assets/participants.json');
		if (this.$route.query.direct) {
			this.preview = true;
		}
	},
	methods: {
		play() {
			this.preview = !this.preview;
		},
		isEarlyInvestor: function () {
			return this.$wallet.isConnected && this.participants.hasOwnProperty(this.$wallet.publicKey)
		},
		haveVoucher() {
			return window.localStorage.getItem('voucher') !== null;
		},
		getBonusLevel() {
			let bonusLevel = 0;
			if (this.haveVoucher()) {
				bonusLevel++;
			}
			if (this.isEarlyInvestor()) {
				bonusLevel++;
			}
			return bonusLevel;
		}
	}
}
</script>

<style scoped>
section.countdown {
	height: calc(100vh - 176px - 120px);
}
</style>
