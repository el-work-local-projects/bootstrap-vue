<template>
	<div class="row">
		<div class="col">
			<h5>Modals</h5>
			<div class="row">
				<div class="col-3">
					<h6>Native</h6>
					<button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Open Modal</button>
					<div id="exampleModal" class="modal fade" role="dialog" tabindex="-1">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title">Title</h5>
									<button type="button" class="close" data-dismiss="modal">
										<span>&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<p>Body</p>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-primary">Okay</button>
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-9">
					<h6>Component</h6>
				</div>
			</div>
			<h5>Tooltips</h5>
			<div class="row">
				<div class="col">
				
				</div>
			</div>
			<h5>Popovers</h5>
			<div class="row">
				<div class="col">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DialogsView',
		data() {
			return {
			
			};
		}
	}
</script>