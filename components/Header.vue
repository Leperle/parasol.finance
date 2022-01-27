<!--suppress HtmlUnknownAttribute -->
<template>
	<header>
		<div :class="`${this.fullwidth ? 'lg:px-20 py-10' : 'mx-auto max-w-7xl py-10 px-5'} flex justify-center lg:justify-between`">
			<div>
				<div class="flex items-center justify-between w-full md:w-auto">
					<NuxtLink class="flex-shrink-0 flex items-center" to="/">
						<Logo class="h-10 mr-2" />
						<h1 class="text-2xl font-extrabold leading-7 ml-2">Parasol <span class="">Finance</span></h1>
					</NuxtLink>
				</div>
			</div>
			<div class="hidden space-x-10 md:flex items-center md:ml-10">
				<NuxtLink to="/" exact-active-class="active" class="nav-link font-medium text-white hover:text-gray-300">
					Overview
				</NuxtLink>
				<NuxtLink to="/nft-store" exact-active-class="active" :class="`${this.$router.name === '/claim-voucher' ? 'active' : ''} font-medium nav-link text-white hover:text-gray-300`">
					NFT Access Key
				</NuxtLink>
				<NuxtLink :to="{path: '/', hash: 'roadmap'}" exact-active-class="active" v-scroll-to="{el: '#roadmap'}" class="font-medium nav-link text-white hover:text-gray-300">
					Roadmap
				</NuxtLink>
				<a href="https://docs.parasol.finance" target="_blank" class="font-medium nav-link text-white hover:text-gray-300">
					Documentation
				</a>
				<a href="https://forms.gle/jypcaJgvPgrkYmRDA" class="font-medium text-white nav-link hover:text-gray-300">
					Apply for IDO
				</a>
				<ConnectWallet />
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: {
		fullwidth: Boolean
	}
}
</script>

<style scoped>
.nav-link {
	display: inline-block;
	position: relative;
}

.nav-link:after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 2px;
	bottom: -5px;
	left: 0;
	background-color: white;
	transform-origin: bottom right;
	transition: transform 0.25s ease-out;
}

.nav-link:hover:after, .nav-link.active:after {
	transform: scaleX(1);
	transform-origin: bottom left;
}
</style>
