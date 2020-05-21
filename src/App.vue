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

<style>
	@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
	@import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
	@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css";
	
	html {
		height: 100%;
	}
	
	body {
		height: 100%;
	}
	
	#app {
		height: 100%;
	}
	
	.app-content {
		height: calc(100% - 80px);
	}
</style>
