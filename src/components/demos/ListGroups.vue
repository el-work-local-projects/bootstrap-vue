<template>
	<div class="row">
		<div class="col">
			<div class="row">
				<div class="col">
					<h6>Basic</h6>
					<ul class="list-group">
						<li class="list-group-item">Normal</li>
						<li class="list-group-item active">Active</li>
						<li class="list-group-item disabled">Disabled</li>
						<li class="list-group-item list-group-item-action">Action</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Badge
							<span class="badge badge-primary badge-pill">#</span>
						</li>
					</ul>
				</div>
				<div class="col">
					<h6>Action</h6>
					<div class="list-group">
						<a href="#" class="list-group-item list-group-item-action">Action Link</a>
						<button type="button" class="list-group-item list-group-item-action">Action Button</button>
						<button type="button" class="list-group-item list-group-item-action" disabled>Disabled Button</button>
					</div>
				</div>
				<div class="col">
					<h6>Flush</h6>
					<div class="list-group list-group-flush">
						<a href="#" class="list-group-item list-group-item-action">Action Link</a>
						<button type="button" class="list-group-item list-group-item-action">Action Button</button>
						<button type="button" class="list-group-item list-group-item-action" disabled>Disabled Button</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h6>Styled</h6>
					<ul class="list-group">
						<li v-for="style in styles" :key="style" class="list-group-item" 
							:class="'list-group-item-' + style">{{ style }}</li>
					</ul>
				</div>
				<div class="col">
					<h6>Styled Action</h6>
					<ul class="list-group">
						<li v-for="style in styles" :key="style" class="list-group-item list-group-item-action" 
							:class="'list-group-item-' + style">{{ style }}</li>
					</ul>
				</div>
				<div class="col">
					<h6>Horizontal</h6>
					<ul class="list-group list-group-horizontal">
						<li class="list-group-item">Normal</li>
						<li class="list-group-item active">Active</li>
						<li class="list-group-item disabled">Disabled</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ListGroupsView',
		data() {
			return {
				styles: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
			};
		}
	}
</script>