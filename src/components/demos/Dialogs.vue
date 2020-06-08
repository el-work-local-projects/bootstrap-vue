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
					<b-button @click="showModal('bv-modal-one')">Open Modal</b-button>
					<b-modal id="bv-modal-one" title="Component Modal First Layer">
						<p>First layer modal</p>
						<b-button @click="showModal('bv-modal-two')">Open Modal</b-button>
					</b-modal>
					<b-modal id="bv-modal-two" title="Component Modal Second Layer">
						<p>Second layer modal</p>
					</b-modal>
					
					<b-button class="ml-1" @click="showModal('close-limit')">Limited Close</b-button>
					<b-modal id="close-limit" ref="modal" title="Validated Closure" 
							@show="resetClosureForm" @hidden="resetClosureForm" @ok="handleSubmission">
						<form ref="validatedForm" @submit.stop.prevent="handleSubmit">
							<b-form-group :state="nameState" label="Name" invalid-feedback="Name required">
								<b-form-input v-model="name" :state="nameState" required></b-form-input>
							</b-form-group>
						</form>
					</b-modal>
					
					<b-button class="ml-1" @click="showModal('xl')">XL</b-button>
					<b-button class="ml-1" @click="showModal('lg')">LG</b-button>
					<b-button class="ml-1" @click="showModal('sm')">SM</b-button>
					
					<b-modal id="xl" size="xl" title="Extra Large">Content</b-modal>
					<b-modal id="lg" size="lg" title="Large">Content</b-modal>
					<b-modal id="sm" size="sm" title="Small">Content</b-modal>
					
					<b-button class="ml-1" @click="showModal('scroll')">Scrollable</b-button>
					<b-modal id="scroll" title="Scrollable" scrollable>
						<p v-for="ind in 30" :key="ind">Text goes here</p>
					</b-modal>
					
					<b-button class="ml-1" @click="showModal('no-btn')">No Buttons</b-button>
					<b-modal id="no-btn" title="No buttons">
						<p>Text goes here</p>
						<template v-slot:modal-footer="{}">
							<div></div>
						</template>
					</b-modal>
				</div>
			</div>
			<h5>Tooltips</h5>
			<div class="row">
				<div class="col">
					<h6>Component</h6>
					<div class="row mb-1">
						<div class="col">
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.top title="Tooltip">Tip: top</b-button>
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.topleft title="Tooltip">Tip: topleft</b-button>
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.topright title="Tooltip">Tip: topright</b-button>
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.bottom title="Tooltip">Tip: bottom</b-button>
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.bottomleft title="Tooltip">Tip: bottomleft</b-button>
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.bottomright title="Tooltip">Tip: bottomright</b-button>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.right title="Tooltip">Tip: right</b-button>
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.righttop title="Tooltip">Tip: righttop</b-button>
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.rightbottom title="Tooltip">Tip: rightbottom</b-button>
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.left title="Tooltip">Tip: left</b-button>
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.lefttop title="Tooltip">Tip: lefttop</b-button>
							<b-button size="sm" class="mr-1" v-b-tooltip.hover.leftbottom title="Tooltip">Tip: leftbottom</b-button>
						</div>
					</div>
				</div>
			</div>
			<h5>Popovers</h5>
			<div class="row">
				<div class="col">
					<h6>Component</h6>
					<div class="row mb-1">
						<div class="col">
							<b-button size="sm" class="mr-1" v-b-popover.hover.top="'Popover'" title="Title">Pop: top</b-button>
							<b-button size="sm" class="mr-1" v-b-popover.hover.topleft="'Popover'" title="Title">Pop: topleft</b-button>
							<b-button size="sm" class="mr-1" v-b-popover.hover.topright="'Popover'" title="Title">Pop: topright</b-button>
							<b-button size="sm" class="mr-1" v-b-popover.hover.bottom="'Popover'" title="Title">Pop: bottom</b-button>
							<b-button size="sm" class="mr-1" v-b-popover.hover.bottomleft="'Popover'" title="Title">Pop: bottomleft</b-button>
							<b-button size="sm" class="mr-1" v-b-popover.hover.bottomright="'Popover'" title="Title">Pop: bottomright</b-button>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<b-button size="sm" class="mr-1" v-b-popover.hover.right="'Popover'" title="Title">Pop: right</b-button>
							<b-button size="sm" class="mr-1" v-b-popover.hover.righttop="'Popover'" title="Title">Pop: righttop</b-button>
							<b-button size="sm" class="mr-1" v-b-popover.hover.rightbottom="'Popover'" title="Title">Pop: rightbottom</b-button>
							<b-button size="sm" class="mr-1" v-b-popover.hover.left="'Popover'" title="Title">Pop: left</b-button>
							<b-button size="sm" class="mr-1" v-b-popover.hover.lefttop="'Popover'" title="Title">Pop: lefttop</b-button>
							<b-button size="sm" class="mr-1" v-b-popover.hover.leftbottom="'Popover'" title="Title">Pop: leftbottom</b-button>
						</div>
					</div>
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
				name: '',
				nameState: null
			};
		},
		methods: {
			showModal(id) {
				this.$bvModal.show(id);
			},
			checkFormValidity() {
				const valid = this.$refs.validatedForm.checkValidity();
				this.nameState = valid;
				return valid;
			},
			resetClosureForm() {
				this.name = '';
				this.nameState = null;
			},
			handleSubmission(bvModalEvent) {
				bvModalEvent.preventDefault();
				this.handleSubmit();
			},
			handleSubmit() {
				if (!this.checkFormValidity()) {
					return;
				}
				this.$nextTick(() => {
					this.$bvModal.hide('close-limit');
				});
			}
		}
	}
</script>