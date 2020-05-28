<template>
	<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
		<a class="navbar-brand" href="#"><span class="mdi mdi-coffee"></span> EMS CAFE</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item dropdown">
					<a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Application
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#" v-for="(app, index) in apps" :key="`app-${index}`">{{ app }}</a>
					</div>
				</li>
				<li class="nav-item" style="display: flex; align-items: center">
					<form class="form-inline text-light">
						<span class="mdi mdi-tab-plus" style="margin-right: 4px;" v-b-tooltip.hover.noninteractive title="New Tab"></span>
						<b-form-checkbox class="custom-control-input-warning" v-model="samewindow" name="same-window-switch" switch></b-form-checkbox>
						<span class="mdi mdi-tab-unselected" v-b-tooltip.hover.noninteractive title="Same Tab"></span>		
					</form>
				</li>
			</ul>
			<ul class="navbar-nav">
				<frame-message-viewer></frame-message-viewer>
				<li class="nav-item active dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
							v-b-tooltip.hover.noninteractive title="Help">
						<span class="mdi mdi-help-circle"></span>
					</a>
					<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">CAFE User Guide</a>
						<a class="dropdown-item" href="#">Application User Guide</a>
						<a class="dropdown-item" href="#">CAFE Administration Guide</a>
						<a class="dropdown-item" href="#">Application Administration Guide</a>
					</div>
				</li>
				<li class="nav-item active dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span class="mdi mdi-account"></span> {{ user.name }}
					</a>
					<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">Log out</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	import FrameMessageViewer from './FrameMessageViewer.vue'
	
	export default {
		name: 'NavBar',
		data: () => {
			return {
				user: {
					name: 'dummy'
				},
				apps: [
					'ACE Viewer',
					'PCC Operating Report',
					'OASIS Administrator',
					'Shift Log'
				],
				samewindow: false
			}
		},
		components: {
			FrameMessageViewer
		}
	}
</script>

<style scoped>
	nav {
		height: 50px;
	}
</style>