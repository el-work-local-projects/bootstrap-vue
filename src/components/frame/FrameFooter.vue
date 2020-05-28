<template>
	<div id="footer">
		<nav class="navbar fixed-bottom navbar-light bg-light border-top">
			<ul class="navbar-nav">
				<li>
					<p>Report problems to the EMS Support Center (<span class="mdi mdi-phone" aria-hidden="false"></span> 555-555-5555)</p>
				</li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li v-once>
					<p>Copyright <span class="mdi mdi-copyright" aria-hidden="false"></span> 
					{{ now | date }} Southern Company <span class="mdi mdi-billiards-rack"></span></p>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'FrameFooter',
		data: () => {
			return {
				now: new Date()
			}
		},
		filters: {
			date: function(value) {
				return value.getYear() + 1900;
			}
		}
	}
</script>

<style scoped>
	nav {
		height: 30px;
		padding-top: 5px;
		padding-bottom: 5px;
	}
	p {
		font-size: 12px;
		margin: 0;
	}
</style>