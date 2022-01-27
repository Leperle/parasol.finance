<template>
	<vue-countdown tag="div" class="bg-primary bg-opacity-80 text-center rounded-lg flex justify-center items-center gap-3" :time="presaleTimeOffset" :interval="100" v-slot="{ days, hours, minutes, seconds, milliseconds }">
		<div class="flex flex-col text-center">
			<span class="text-2xl font-extrabold">{{ days }}</span>
			<span class="font-bold text-xs">Days</span>
		</div>
		<div class="text-lg font-extrabold pb-3">:</div>
		<div class="flex flex-col">
			<span class="text-2xl font-extrabold">{{ hours }}</span>
			<span class="font-bold text-xs">Hours</span>
		</div>
		<div class="text-lg font-extrabold pb-3">:</div>
		<div class="flex flex-col">
			<span class="text-2xl font-extrabold">{{ minutes }}</span>
			<span class="font-bold text-xs">Minutes</span>
		</div>
<!--		<div class="text-lg font-extrabold pb-3">:</div>-->
<!--		<div class="flex flex-col">-->
<!--			<span class="text-2xl font-extrabold">{{ seconds }}</span>-->
<!--			<span class="font-bold text-xs">Seconds</span>-->
<!--		</div>-->
	</vue-countdown>
</template>

<script>
export default {
	name: "Countdown",
	data() {
		return {
			now: new Date(),
			presaleDate: new Date("Tue, 1 Feb 2022 21:00:21 GMT"),
			presaleTimeOffset: 0,
		}
	},
	mounted() {
		this.presaleTimeOffset = this.presaleDate - new Date();
	}
}
</script>

<style scoped>
.flex span {
}
</style>
