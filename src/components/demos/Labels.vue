<template>
	<div class="row">
		<div class="col">
			<div class="row">
				<div class="col">
					<h4>Badges</h4>
					<div class="table-responsive">
						<table class="table table-bordered table-striped">
							<thead class="thead-dark">
							<tr>
								<th></th>
								<th v-for="type in types" :key="type">{{type}}</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<th>h1</th>
								<td v-for="type in types" :key="type">
									<h1><span class="badge" :class="'badge-' + type">Text</span></h1>
								</td>
							</tr>
							<tr>
								<th>h2</th>
								<td v-for="type in types" :key="type">
									<h2><span class="badge" :class="'badge-' + type">Text</span></h2>
								</td>
							</tr>
							<tr>
								<th>h3</th>
								<td v-for="type in types" :key="type">
									<h3><span class="badge" :class="'badge-' + type">Text</span></h3>
								</td>
							</tr>
							<tr>
								<th>h4</th>
								<td v-for="type in types" :key="type">
									<h4><span class="badge" :class="'badge-' + type">Text</span></h4>
								</td>
							</tr>
							<tr>
								<th>h5</th>
								<td v-for="type in types" :key="type">
									<h5><span class="badge" :class="'badge-' + type">Text</span></h5>
								</td>
							</tr>
							<tr>
								<th>h6</th>
								<td v-for="type in types" :key="type">
									<h6><span class="badge" :class="'badge-' + type">Text</span></h6>
								</td>
							</tr>
							<tr>
								<th>p</th>
								<td v-for="type in types" :key="type">
									<p><span class="badge" :class="'badge-' + type">Text</span></p>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h4>Badge Types</h4>
					<div class="table-responsive">
						<table class="table table-bordered table-striped">
							<thead class="thead-dark">
							<tr>
								<th></th>
								<th v-for="type in types" :key="type">{{type}}</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<th>Plain</th>
								<td v-for="type in types" :key="type">
									<span class="badge" :class="'badge-' + type">Text</span>
								</td>
							</tr>
							<tr>
								<th>Pill</th>
								<td v-for="type in types" :key="type">
									<span class="badge badge-pill" :class="'badge-' + type">Text</span>
								</td>
							</tr>
							<tr>
								<th>Link</th>
								<td v-for="type in types" :key="type">
									<a href="#" class="badge" :class="'badge-' + type">Text</a>
								</td>
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
		name: "LabelsView",
		data() {
			return {
				types: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
			}
		}
	}
</script>