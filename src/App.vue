<template>
  <div id="app">
    <NavBar></NavBar>
	<div class="container-fluid app-content">Content</div>
	<FrameFooter></FrameFooter>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FrameFooter from './components/FrameFooter.vue'

export default {
  name: 'App',
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
	
	.custom-control-input-warning .custom-control-input:checked ~ .custom-control-label::before {
		background: theme-color("warning") linear-gradient(180deg, theme-color-level(warning, -5), theme-color("warning")) repeat-x;
	}
</style>
