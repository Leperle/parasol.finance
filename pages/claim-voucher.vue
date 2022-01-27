<template>
	<section class="pb-5">
		<div class="max-w-7xl mx-auto text-center px-4 space-y-6 sm:px-6 lg:px-8 pb-10">
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
			<div class="max-w-3xl mx-auto py-6 space-y-2 lg:max-w-none">
				<p class="flex gap-x-2 justify-center items-center text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
					<svg class="w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
					Claim Your Voucher
				</p>
				<p class="text-lg text-gray-300">
					If you hold <a href="https://jup.ag/swap/USDC-PSOL" class="text-purple-500">$PSOL</a> since the beginning you might be eligible for a bonus!
				</p>
			</div>
			<div v-if="haveVoucher()" class="mt-5">
				<p>You already have the Voucher, you can now order the NFT.</p>
				<NuxtLink to="/nft-store" class="inline-flex text-xl items-center gap-x-1 px-6 mt-5 py-3 border border-transparent font-medium rounded-md shadow-sm text-white bg-gradient-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
					Buy NFT Access Key
				</NuxtLink>
			</div>
			<div v-else>
				<img class="mx-auto max-w-sm px-5" src="https://i.imgur.com/4Oxnfjq.png" alt="bonus" />
				<button v-if="this.$wallet.isConnected" @click="claim" type="button" class="inline-flex text-xl mt-7 items-center gap-x-1 px-6 py-3 border border-transparent font-medium rounded-md shadow-sm text-white bg-gradient-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<svg v-if="loading" class="animate-spin mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
					<svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
					<span v-if="loading">Processing...</span>
					<span v-else>Claim My Voucher</span>
				</button>
				<button v-else @click="connectWallet" type="button" class="inline-flex text-xl items-center mt-7 gap-x-1 px-6 py-3 border border-transparent font-medium rounded-md shadow-sm text-white bg-gradient-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<PhantomWalletLogo class="h-5 w-5 mr-2"/>
					<span>Connect Phantom</span>
				</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "claim-voucher",
	data() {
		return {
			loading: false,
			participants: [],
		}
	},
	mounted() {
		this.participants = require('assets/participants.json');
	},
	methods: {
		async claim() {
			this.loading = true;
			const post = await this.$axios.$get(`https://public-api.solscan.io/account/tokens?account=${this.$wallet.publicKey}`);
			this.loading = false;
			if(true) {
				let psolAccount = post.find(x => x.tokenSymbol === 'PSOL');
				console.log(psolAccount);
				let holdingAmount = psolAccount.tokenAmount.uiAmount;
				if (holdingAmount >= this.participants[this.$wallet.publicKey]) {
					window.localStorage.setItem('voucher', 'true');
					this.$root.$emit('thanks-voucher');
				}
				else {
					alert("Did you do yield farming of PSOL on Cropper Finance ? claim your voucher manually.\n" +
						"\n" +
						"Complete this form: https://forms.gle/QrPwX9gsQD3jUgsX6");
				}
			}
		},
		connectWallet: function () {
			if (!this.isPhantomAvailable()) {
				confirm("Please ensure to have phantom wallet installed before. (You can download it at phantom.app)")
				window.open("https://phantom.app/", "_blank");
			} else {
				if (this.$wallet.isConnected) {
					window.solana.disconnect();
				} else {
					window.solana.connect({onlyIfTrusted: false})
						.then(({publicKey}) => {
							this.$wallet.isConnected = window.solana.isConnected;
							this.$wallet.publicKey = publicKey.toString();
						})
						.catch(() => {
							// Handle connection failure as usual
						});
				}
			}
		},
		haveVoucher() {
			return window.localStorage.getItem('voucher') !== null;
		}
	}
}
</script>

<style scoped>

</style>
