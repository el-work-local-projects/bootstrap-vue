<template>
	<div class="row">
		<div class="col">
			<h5>Styles</h5>
			<div v-for="type in types" :key="type" class="alert" :class="'alert-' + type" role="alert">
				Alert of type {{ type }} with a <a class="alert-link" href="#">link</a>
			</div>
		</div>
		<div class="col">
			<h5>Dismissable</h5>
			<button type="button" class="btn btn-secondary" @click="addDismissableAlert()">Summon Another</button>
			<div v-for="alert in dismissAlerts" :key="alert.id" class="alert alert-primary alert-dismissible fade show" role="alert">
				Button to dismiss
				<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
			</div>
			
			<h5>Component Alerts</h5>
			<h6>Normal</h6>
			<b-alert show>Normal Alert</b-alert>
			<b-alert variant="success" show>Normal Alert</b-alert>
			
			<h6>Dismissible</h6>
			<b-button @click="showDismissalAlert" variant="secondary">Show Dismissal Alert</b-button>
			<b-alert :show="dismissCountdown" dismissible variant="warning" @dismissed="resetCountdown" @dismiss-count-down="countdownChanged">
				<p>Alert will be automatically dismissed after {{ dismissCountdown }} seconds.</p>
				<b-progress variant="warning" style="height: 4px;" :max="dismissTime" :value="dismissCountdown"></b-progress>
			</b-alert>
			
			<h6>Dismissible Static</h6>
			<b-button @click="toggleStaticAlert" variant="secondary">Toggle Static Alert</b-button>
			<b-alert :show="showStatic" dismissible variant="danger" @dismissed="showStatic = false">
				Alert without auto dismissal
			</b-alert>
		</div>
		<div class="col">
			<h5>Toasts</h5>
			<div class="toast fade show" role="alert">
				<div class="toast-header">
					<strong>Toast</strong>
					<button type="button" class="close" data-dismiss="toast">
						<span>&times;</span>
					</button>
				</div>
				<div class="toast-body">
					This is a toast.
				</div>
			</div>
			
			<h5>Component Toasts</h5>
			<b-button @click="addToast(false)" variant="secondary" class="mr-2">Add Toast</b-button>
			<b-button @click="addToast(true)" variant="secondary">Add Toast (Sticky)</b-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AlertsView",
		data() {
			return {
				types: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
				dismissID: 2,
				dismissAlerts: [{id: 1}],
				dismissTime: 8,
				dismissCountdown: 0,
				showStatic: false,
				toastCount: 0
			}
		},
		methods: {
			addDismissableAlert() {
				this.dismissAlerts.push({id: this.dismissID++});
			},
			countdownChanged(dismissCountdown) {
				this.dismissCountdown = dismissCountdown;
			},
			resetCountdown() {
				this.dismissCountdown = 0;
			},
			showDismissalAlert() {
				this.dismissCountdown = this.dismissTime;
			},
			toggleStaticAlert() {
				this.showStatic = !this.showStatic;
			},
			addToast(noAutoHide) {
				this.$bvToast.toast('This is a placed toast.', {
					title: 'Component Toast',
					solid: true,
					variant: this.types[this.toastCount % this.types.length],
					toaster: 'b-toaster-bottom-full',
					noAutoHide: noAutoHide
				});
				this.toastCount++;
			}
		}
	}
</script>