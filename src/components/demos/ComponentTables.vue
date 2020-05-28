<template>
	<div class="row">
		<div class="col">
			<div class="row">
				<div class="col">
					<h5>Plain</h5>
					<b-table striped hover :items="content" primary-key="id"></b-table>
				</div>
				<div class="col">
					<h5>Style Variants</h5>
					<b-table striped hover :items="styledContent" primary-key="id"></b-table>
				</div>
			</div>
			<div class="row">	
				<div class="col-6">
					<h5>Defined Fields</h5>
					<b-table striped hover :fields="fields" :items="content" primary-key="id"></b-table>
				</div>
				<div class="col-3">
					<h5>Responsive</h5>
					<b-table striped hover responsive :fields="fields" :items="content" primary-key="id"></b-table>
				</div>
				<div class="col-3">
					<h5>Responsive Sticky</h5>
					<b-table striped hover responsive sticky-header="150px" :fields="fields" :items="content" primary-key="id"></b-table>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h5>Featureful</h5>
					<b-form-checkbox v-model="loading" name="loadingSwitch" switch> Loading</b-form-checkbox>
					<b-table dark striped bordered hover small sticky-header
							:fields="fields" :items="styledContent" :busy="loading" primary-key="id">
						<template v-slot:thead-top>
							<b-tr>
								<b-th></b-th>
								<b-th colspan="2">User Name</b-th>
							</b-tr>
						</template>
						<template v-slot:table-busy>
							<div class="text-center text-warning">
								<b-spinner class="align-middle"></b-spinner>
							</div>
						</template>
					</b-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>	
	export default {
		name: "ComponentTablesView",
		data() {
			return {
				fields: [
					{
						key: 'user',
						label: 'User ID',
						variant: 'success',
						sortable: true
					},
					{
						key: 'firstName',
						label: 'Given Name',
						sortable: true
					},
					{
						key: 'last_name',
						label: 'Surname'
					}
				],
				content: [
					{
						id: 1,
						firstName: 'No',
						'last_name': 'Body',
						user: '@nb'
					},
					{
						id: 2,
						firstName: 'Some',
						'last_name': 'Body',
						user: '@sb'
					},
					{
						id: 3,
						firstName: 'John',
						'last_name': 'Smith',
						user: '@jsmith'
					}
				],
				loading: false
			}
		},
		computed: {
			styledContent() {
				let clone = JSON.parse(JSON.stringify(this.content));
				clone[0]._rowVariant = 'danger';
				clone[1]._cellVariants = {
					firstName: 'warning', user: 'info'
				};
				return clone;
			}
		}
	}
</script>