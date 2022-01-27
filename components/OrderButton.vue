<template>
	<button v-if="this.$wallet.isConnected" class="flex items-center w-full uppercase justify-center mt-5 px-5 py-3 text-base font-medium rounded-md bg-gradient-primary text-white">
		<SmallCountdown />
	</button>
	<button v-else @click="connectWallet"
			class="flex items-center w-full gap-2 uppercase justify-center mt-5 px-5 py-3 text-base font-medium rounded-md bg-gradient-primary text-white hover:from-pink-600 hover:to-purple-500">
		<PhantomWalletLogo class="h-5 w-5"/>
		<span>Connect Phantom</span>
	</button>
</template>

<script>
export default {
	name: "OrderButton",
	props: {
		amount: 0
	},
	methods: {
		order() {
			this.orderTiers(this.amount);
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
		}
	}
}
</script>

<style scoped>

</style>
