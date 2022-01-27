<template>
	<div v-if="shown" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed top-0 bottom-0 z-30 left-0 right-0 pointer-events-none">
			<div class="pyro">
				<div class="before"></div>
				<div class="after"></div>
			</div>
		</div>
		<div class="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
			<div @click="shown = !shown" class="fixed inset-0 bg-black bg-opacity-30 transition-opacity" aria-hidden="true"></div>
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
			<div class="inline-block align-bottom bg-white rounded-xl px-12 py-8 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
				<div>
					<div class="mx-auto flex items-center justify-center h-24 w-24">
						<img alt="bouncing-logo" src="https://raw.githubusercontent.com/parasol-finance/white-paper/main/logo.png" />
					</div>
					<div class="mt-3 text-center sm:mt-5">
						<h3 class="text-2xl leading-6 font-medium text-gray-900" id="modal-title">
							Welcome Onboard!
						</h3>
						<div class="mt-2">
							<p class="text-gray-500">
								We have received your $PSOL, you will receive your NFTiers in a while, in the meantime you can join us on Telegram!
							</p>
						</div>
<!--						<div class="mt-3">-->
<!--							<a href="https://t.me/parasolfinance" target="_blank" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-primary text-base font-medium text-white sm:text-sm">-->
<!--								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24"><path style="fill: white;" d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>-->
<!--								Join Parasol Finance on Telegram-->
<!--							</a>-->
<!--						</div>-->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ThankYou",
	data() {
		return {
			shown: false
		}
	},
	mounted() {
		this.$root.$on('thanks', () => this.shown = !this.shown);
	}
}
</script>

<style scoped>

</style>
