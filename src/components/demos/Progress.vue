<template>
	<div class="row">
		<div class="col">
			<h5>Base Progress</h5>
			<div class="row">
				<div class="col">
					<h6>Basic</h6>
					<div v-for="val in [0, 25, 50, 75, 100]" :key="val" class="progress mt-1">
						<div class="progress-bar" role="progressbar" :style="{width: val + '%'}">{{ val }}%</div>
					</div>
				</div>
				<div class="col">
					<h6>Styles</h6>
					<div v-for="style in styles" :key="style" class="progress mt-1">
						<div class="progress-bar w-100" :class="'bg-' + style" role="progressbar"></div>
					</div>
				</div>
				<div class="col">
					<h6>Nested</h6>
					<div class="progress mt-1">
						<div class="progress-bar bg-primary" style="width: 10%;" role="progressbar"></div>
						<div class="progress-bar bg-success" style="width: 25%;" role="progressbar"></div>
						<div class="progress-bar bg-warning" style="width: 40%;" role="progressbar"></div>
					</div>
					<h6>Striped</h6>
					<div class="progress mt-1">
						<div class="progress-bar progress-bar-striped bg-primary w-100" role="progressbar"></div>
					</div>
					<h6>Animated</h6>
					<div class="progress mt-1">
						<div class="progress-bar progress-bar-striped progress-bar-animated bg-primary w-100" role="progressbar"></div>
					</div>
				</div>
			</div>
			<h5>Component Progress</h5>
			<div class="row">
				<div class="col">
					<b-input type="number" v-model="value"></b-input>
					<b-progress :value="value" :max="max" show-progress></b-progress>
					<b-progress :max="max" show-value animated>
						<b-progress-bar :value="value * .6" variant="success"></b-progress-bar>
						<b-progress-bar :value="value * .25" variant="warning"></b-progress-bar>
						<b-progress-bar :value="value * .15" variant="danger"></b-progress-bar>
					</b-progress>
				</div>
				<div class="col">
					<b-progress :value="value" :max="max" variant="info" class="mb-1"></b-progress>
					<b-progress :value="value" :max="max" variant="info" class="mb-1" striped></b-progress>
					<b-progress :value="value" :max="max" variant="info" animated></b-progress>
				</div>
			</div>
			<h5>Base Spinner</h5>
			<div class="row">
				<div class="col">
					<h6>Border</h6>
					<div class="row">
						<div class="col">
							<div class="spinner-border" role="status">
								<span class="sr-only">Loading...</span>
							</div>
							<div v-for="style in styles" :key="style" class="spinner-border" :class="'text-' + style" role="status">
								<span class="sr-only">Loading...</span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="spinner-border spinner-border-sm" role="status">
								<span class="sr-only">Loading...</span>
							</div>
							<div v-for="style in styles" :key="style" class="spinner-border spinner-border-sm" :class="'text-' + style" role="status">
								<span class="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<h6>Growing</h6>
					<div class="row">
						<div class="col">
							<div class="spinner-grow" role="status">
								<span class="sr-only">Loading...</span>
							</div>
							<div v-for="style in styles" :key="style" class="spinner-grow" :class="'text-' + style" role="status">
								<span class="sr-only">Loading...</span>
							</div>						
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="spinner-grow spinner-grow-sm" role="status">
								<span class="sr-only">Loading...</span>
							</div>
							<div v-for="style in styles" :key="style" class="spinner-grow spinner-grow-sm" :class="'text-' + style" role="status">
								<span class="sr-only">Loading...</span>
							</div>						
						</div>
					</div>
				</div>
				<div class="col">
					<h6>Buttons</h6>
					<div class="row">
						<div class="col">
							<button class="btn btn-primary mr-1" type="button" disabled>
								<span class="spinner-border spinner-border-sm" role="status"></span>
								<span class="sr-only">Loading...</span>
							</button>
							<button class="btn btn-primary" type="button" disabled>
								<span class="spinner-border spinner-border-sm" role="status"></span> Loading...
							</button>						
						</div>
					</div>
					<div class="row mt-1">
						<div class="col">
							<button class="btn btn-primary mr-1" type="button" disabled>
								<span class="spinner-grow spinner-grow-sm" role="status"></span>
								<span class="sr-only">Loading...</span>
							</button>
							<button class="btn btn-primary" type="button" disabled>
								<span class="spinner-grow spinner-grow-sm" role="status"></span> Loading...
							</button>						
						</div>
					</div>
					<br/>
				</div>
			</div>
			<h5>Component Spinner</h5>
			<div class="row">
				<div class="col">
					<div class="row">
						<div class="col">
							<b-spinner label="Loading..."></b-spinner>
							<b-spinner v-for="style in styles" :key="style" :variant="style" label="Loading..."></b-spinner>						
						</div>
					</div>
					<div class="row">
						<div class="col">
							<b-spinner small label="Loading..."></b-spinner>
							<b-spinner small v-for="style in styles" :key="style" :variant="style" label="Loading..."></b-spinner>						
						</div>
					</div>
					<br/>
				</div>
				<div class="col">
					<div class="row">
						<div class="col">
							<b-spinner type="grow" label="Loading..."></b-spinner>
							<b-spinner type="grow" v-for="style in styles" :key="style" :variant="style" label="Loading..."></b-spinner>						
						</div>
					</div>
					<div class="row">
						<div class="col">
							<b-spinner type="grow" small label="Loading..."></b-spinner>
							<b-spinner type="grow" small v-for="style in styles" :key="style" :variant="style" label="Loading..."></b-spinner>						
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ProgressView",
		data() {
			return {
				styles: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
				value: 50,
				max: 200
			};
		}
	}
</script>