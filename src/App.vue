<template>
  <div id="app">
    <NavBar></NavBar>
	<div class="container-fluid app-content">
		<form id="selector" class="form-inline mt-1 pb-1 border-bottom border-secondary">
			<label class="mr-2">Feature:</label>
			<b-form-select v-model="mode" :options="modeOptions"></b-form-select>
		</form>
		<router-view id="selection"></router-view>
	</div>
	<FrameFooter></FrameFooter>
  </div>
</template>

<script>
import NavBar from './components/frame/NavBar.vue'
import FrameFooter from './components/frame/FrameFooter.vue'

export default {
  name: 'App',
  data() {
	return {
		mode: 'text',
		modeOptions: [
			'text',
			'labels',
			'buttons',
			'tables',
			'component-tables',
			'forms',
			'component-forms'
		]
	}
  },
  watch: {
	mode() {
		this.$router.push(this.mode);
	}
  },
  components: {
    NavBar,
	FrameFooter
  }
}
</script>

<style lang="scss">
	@import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
	@import "@/styles/global.scss";
	
	html {
		height: 100%;
	}
	
	body {
		height: 100%;
		background-color: gray("200");
	}
	
	#app {
		height: 100%;
	}
	
	.app-content {
		height: calc(100% - 80px);
	}
	
	#selector {
		height: 44px;
	}
	
	#selection {
		height: calc(100% - 44px);
		overflow: auto;
	}
	
	.custom-control-input-warning .custom-control-input:checked ~ .custom-control-label::before {
		background: theme-color("warning") linear-gradient(180deg, theme-color-level(warning, -5), theme-color("warning")) repeat-x;
	}
</style>
