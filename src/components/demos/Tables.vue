<template>
	<div class="row">
		<div class="col">
			<h4>Sizes</h4>
			<div class="row">
				<div class="col">
					<h5>Plain</h5>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Username</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="user in content" :key="user.id">
								<th scope="row">{{ user.id }}</th>
								<td>{{ user.fn }}</td>
								<td>{{ user.ln }}</td>
								<td>{{ user.user }}</td>
							</tr>
						</tbody>
					</table>
				</div>				
				<div class="col">
					<h5>Small</h5>
					<table class="table table-sm">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Username</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="user in content" :key="user.id">
								<th scope="row">{{ user.id }}</th>
								<td>{{ user.fn }}</td>
								<td>{{ user.ln }}</td>
								<td>{{ user.user }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<h4>Styles</h4>
			<div class="row">
				<div class="col">
					<div class="row">
						<div class="col">
							<h5>Plain</h5>
							<table class="table table-sm">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>						
						<div class="col">
							<h5>Light Header</h5>
							<table class="table table-sm">
								<thead class="thead-light">
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<h5>Striped</h5>
							<table class="table table-sm table-striped">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>						
						<div class="col">
							<h5>Bordered</h5>
							<table class="table table-sm table-bordered">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<h5>Borderless</h5>
							<table class="table table-sm table-borderless">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>						
						<div class="col">
							<h5>Hoverable</h5>
							<table class="table table-sm table-hover">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="row">
						<div class="col">
							<h5>Dark</h5>
							<table class="table table-sm table-dark">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>						
						<div class="col">
							<h5>Dark Header</h5>
							<table class="table table-sm">
								<thead class="thead-dark">
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<h5>Dark Striped</h5>
							<table class="table table-sm table-striped table-dark">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>						
						<div class="col">
							<h5>Dark Bordered</h5>
							<table class="table table-sm table-bordered table-dark">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<h5>Dark Borderless</h5>
							<table class="table table-sm table-borderless table-dark">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>						
						<div class="col">
							<h5>Dark Hoverable</h5>
							<table class="table table-sm table-hover table-dark">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">First Name</th>
										<th scope="col">Last Name</th>
										<th scope="col">Username</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in content" :key="user.id">
										<th scope="row">{{ user.id }}</th>
										<td>{{ user.fn }}</td>
										<td>{{ user.ln }}</td>
										<td>{{ user.user }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<h4>Colors</h4>
			<div class="row">
				<div class="col">
					<table class="table">
						<tbody>
							<tr v-for="color in colors" :key="color" :class="'table-' + color">
								<th scope="row">{{ color }}</th>
								<td>Text</td>
								<td>Text</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col">
					<table class="table table-dark">
						<tbody>
							<tr v-for="color in colors" :key="color" :class="'bg-' + color">
								<th scope="row">{{ color }}</th>
								<td>Text</td>
								<td>Text</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<h4>Responsive</h4>
			<div class="row">
				<div class="col">
					<div class="table-responsive">
						<table class="table">
							<tbody>
								<tr>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
									<td>aaaaa</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TablesView",
		data() {
			return {
				colors: ['active', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
				content: [
					{
						id: 1,
						fn: 'No',
						ln: 'Body',
						user: '@nb'
					},
					{
						id: 2,
						fn: 'Some',
						ln: 'Body',
						user: '@sb'
					}
				]
			}
		}
	}
</script>