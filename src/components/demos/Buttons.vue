<template>
	<div class="row">
		<div class="col">
			<div class="row">
				<div class="col">
					<b-form-checkbox v-model="btnsDisabled" name="disableBtnSwitch" switch> Disable buttons</b-form-checkbox>
					<div class="table-responsive">
						<table class="table table-bordered table-striped">
							<thead class="thead-dark">
							<tr>
								<th></th>
								<th v-for="type in buttonTypes" :key="type">{{type}}</th>
							</tr>
							</thead>
							<tbody>
							<tr v-for="size in buttonSizes" :key="size">
								<th>{{size}}</th>
								<td v-for="type in buttonTypes" :key="type">
									<button type="button" class="btn" :class="['btn-' + type, 'btn' + size, {'disabled': btnsDisabled}]">Button</button>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
					<div class="table-responsive">
						<table class="table table-bordered">
							<thead class="thead-dark">
							<tr>
								<th></th>
								<th v-for="type in buttonTypes" :key="type">{{type}}</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<th>outline</th>
								<td v-for="type in buttonTypes" :key="type">
									<button type="button" class="btn" :class="['btn-outline-' + type, {'disabled': btnsDisabled}]">Button</button>
								</td>
							</tr>
							<tr>
								<th>dropdown</th>
								<td v-for="type in buttonTypes" :key="type">
									<div class="btn-group">
										<button class="btn dropdown-toggle" :class="['btn-' + type, {'disabled': btnsDisabled}]" data-toggle="dropdown">Button</button>
										<div class="dropdown-menu">
											<a class="dropdown-item">Action</a>
											<a class="dropdown-item">Action 2</a>
											<a class="dropdown-item">Action 3</a>
											<div class="dropdown-divider"></div>
											<a class="dropdown-item">Separated</a>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th>combo</th>
								<td v-for="type in buttonTypes" :key="type">
									<div class="btn-group">
										<button type="button" class="btn" :class="['btn-' + type, {'disabled': btnsDisabled}]">Button</button>
										<button class="btn dropdown-toggle dropdown-toggle-split" :class="['btn-' + type, {'disabled': btnsDisabled}]" data-toggle="dropdown"></button>
										<div class="dropdown-menu">
											<a class="dropdown-item">Action</a>
											<a class="dropdown-item">Action 2</a>
											<a class="dropdown-item">Action 3</a>
											<div class="dropdown-divider"></div>
											<a class="dropdown-item">Separated</a>
										</div>
									</div>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h4>Block Button</h4>
					<button class="btn btn-secondary btn-block">Button</button>
					
					<h4>Button Groups</h4>
					<div class="btn-toolbar">
						<div class="btn-group mr-2">
							<a class="btn btn-secondary">1</a>
							<a class="btn btn-secondary">2</a>
							<a class="btn btn-secondary">3</a>
							<a class="btn btn-secondary">4</a>
						</div>
						<div class="btn-group mr-2">
							<a class="btn btn-secondary">5</a>
							<a class="btn btn-secondary">6</a>
							<a class="btn btn-secondary">7</a>
						</div>
						<div class="btn-group">
							<a class="btn btn-secondary">8</a>
							<div class="btn-group">
								<a class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
								<div class="dropdown-menu">
										<a class="dropdown-item">Action</a>
										<a class="dropdown-item">Action 2</a>
										<a class="dropdown-item">Action 3</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item">Separated</a>
									</div>
							</div>
						</div>
					</div>
					
					<h4>Justified Group (Manual Setup)</h4>
					<div class="btn-group d-flex">
						<a class="btn btn-secondary">Left</a>
						<a class="btn btn-secondary">Middle</a>
						<a class="btn btn-secondary">Right</a>
					</div>
					
					<h4>Vertical Group</h4>
					<div class="btn-group-vertical">
						<a class="btn btn-secondary">1</a>
						<a class="btn btn-secondary">2</a>
						<a class="btn btn-secondary">3</a>
						<a class="btn btn-secondary">4</a>
					</div>
				</div>
				<div class="col">
					<h4>Toggle Button</h4>
					<b-button :pressed.sync="btnToggle" variant="secondary">Toggle</b-button>
					
					<h4>Radio Buttons</h4>
					<b-form-group>
						<b-form-radio-group v-model="btnRadio" :options="options" buttons name="button-radio"></b-form-radio-group>
					</b-form-group>
					
					<h4>Checkbox Buttons</h4>
					<b-form-group>
						<b-form-checkbox-group v-model="btnCbSelected" :options="options" name="button-checkbox" buttons></b-form-checkbox-group>
					</b-form-group>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ButtonsView',
		data() {
			return {
				btnsDisabled: false,
				buttonTypes: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'],
				buttonSizes: ['-sm', '', '-lg'],
				btnToggle: false,
				btnRadio: '',
				btnCbSelected: [],
				options: [
					{text: 'Left', value: 'left'},
					{text: 'Middle', value: 'middle'},
					{text: 'Right', value: 'right'}
				]
			}
		}
	}
</script>