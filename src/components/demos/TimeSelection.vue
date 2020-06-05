<template>
	<div class="row">
		<div class="col">
			<h5>Calendar</h5>
			<b-form-checkbox switch v-model="disableCal">Disabled</b-form-checkbox>
			<b-calendar v-model="date" :date-format-options="calOptions.format" :min="calOptions.min" :max="calOptions.max"
					:disabled="disableCal"></b-calendar>
		</div>
		<div class="col">
			<h5>Time</h5>
			<b-form-checkbox switch v-model="disableTime">Disabled</b-form-checkbox>
			<b-time v-model="time" :disabled="disableTime"></b-time>
			<br/>
			<b-time v-model="time" show-seconds :disabled="disableTime"></b-time>
			<br/>
			<b-time v-model="time" hide-header :disabled="disableTime"></b-time>
			<br/>
			<b-time v-model="time" hide-header :hour12="false" :disabled="disableTime"></b-time>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TimeSelectionView",
		data() {
			const now = new Date();
			let min = new Date(now);
			min.setDate(min.getDate() - 5);
			let max = new Date(now);
			max.setDate(max.getDate() + 5);
		
			return {
				date: '',
				calOptions: {
					format: {
						year: 'numeric',
						month: 'numeric',
						day: 'numeric'
					},
					min: min,
					max: max
				},
				disableCal: false,
				time: '',
				disableTime: false
			};
		}
	}
</script>