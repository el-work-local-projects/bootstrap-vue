<template>
	<div class="row">
		<div class="col">
			<div class="row">
				<div class="col-sm-4">
					<form>
						<fieldset>
							<div class="form-group">
								<label for="focusedInput">Default</label>
								<input class="form-control" id="focusedInput" type="text" value="Click me">
							</div>
							<div class="form-group">
								<label for="disabledInput">Disabled</label>
								<input class="form-control" id="disabledInput" type="text" value="Disabled input..." disabled>
							</div>
							<div class="form-group">
								<label for="disabledInput">Read only</label>
								<input class="form-control" id="disabledInput" type="text" value="Read only input..." readonly>
							</div>
							<div class="form-group has-success">
								<label for="successInput">Success</label>
								<input class="form-control is-valid" id="successInput" type="text" value="Input success">
								<div class="valid-feedback">
									Input is valid.
								</div>
							</div>
							<div class="form-group">
								<label for="errorInput">Error</label>
								<input class="form-control is-invalid" id="errorInput" type="text" value="Input error">
								<div class="invalid-feedback">
									Please provide a valid input.
								</div>
							</div>
							<div class="form-group">
								<label>Plaintext</label>
								<input class="form-control-plaintext" type="text" value="Plaintext input">
							</div>
						</fieldset>
					</form>
				</div>
				<div class="col-sm-4">
					<form>
						<fieldset>
							<div class="form-group">
								<label for="largeInput">Large</label>
								<input class="form-control form-control-lg" id="largeInput" type="text" value="Large input">
							</div>
							<div class="form-group">
								<label for="defaultInput">Default</label>
								<input class="form-control" id="defaultInput" type="text" value="Default input">
							</div>
							<div class="form-group">
								<label for="smallInput">Small</label>
								<input class="form-control form-control-sm" id="smallInput" type="text" value="Small input">
							</div>
							<div class="form-group">
								<label>Input addons</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text">$</span>
									</div>
									<input type="text" class="form-control">
									<div class="input-group-append">
										<button class="btn btn-secondary" type="button">Button</button>
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-prepend">
										<div class="input-group-text">
											<input type="radio">
										</div>
									</div>
									<input type="text" class="form-control">
								</div>
							</div>
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-prepend">
										<div class="input-group-text">
											<input type="checkbox">
										</div>
									</div>
									<input type="text" class="form-control">
								</div>
							</div>
						</fieldset>
					</form>
				</div>
				<div class="col-sm-4">
					<form>
						<fieldset>
							<div class="form-group">
								<label for="passInput">Password</label>
								<input class="form-control" id="passInput" type="password" value="hunter2">
							</div>
							<div class="form-group">
								<label for="numInput">Number</label>
								<input class="form-control" id="numInput" type="number" value="2548">
							</div>
							<div class="form-group">
								<label for="emailInput">Email</label>
								<input class="form-control" id="emailInput" type="email" value="x@y.com">
							</div>
							<div class="form-group">
								<label for="urlInput">URL</label>
								<input class="form-control" id="urlInput" type="url" value="http://www.place.com">
							</div>
							<div class="form-group">
								<label for="telInput">Tel</label>
								<input class="form-control" id="telInput" type="tel" value="999-555-1234">
							</div>
							<div class="form-group">
								<label for="colorInput">Color</label>
								<input class="form-control" id="colorInput" type="color" value="um">
							</div>
							<div class="form-group">
								<label for="searchInput">Search</label>
								<input class="form-control" id="searchInput" type="search" value="um">
							</div>
							<div class="form-group">
								<label>Range</label>
								<input class="form-control-range" type="range">
							</div>
							<div class="form-group">
								<label>Custom Range</label>
								<input class="custom-range" type="range">
							</div>
							<div class="form-group">
								<label>File</label>
								<input class="form-control" type="file">
							</div>
							<div class="custom-file">
								<input class="custom-file-input" type="file" id="customFile">
								<label class="custom-file-label" for="customFile">Custom File</label>
							</div>
						</fieldset>
					</form>
				</div>
			</div>

			<hr/>

			<div class="row">
				<div class="col-2">
					<label>Text</label>
					<small class="form-text text-muted">Requires additional pylons</small>
				</div>
				<div class="col-sm-2">
					<form>
						<fieldset>
							<div class="form-group">
								<label>Textarea</label>
								<textarea class="form-control" rows="3"></textarea>
							</div>
						</fieldset>
					</form>
				</div>
				<div class="col-sm-2">
					<label>Radios</label>
					<div class="form-check">
						<input type="radio" class="form-check-input" name="radio" id="radio-1">
						<label class="form-check-label" for="radio-1">Radio option 1</label>
					</div>
					<div class="form-check">
						<input type="radio" class="form-check-input" name="radio" id="radio-2">
						<label class="form-check-label" for="radio-2">Radio option 2</label>
					</div>
					<div class="form-check">
						<input type="radio" class="form-check-input" name="radio" id="radio-d" disabled>
						<label class="form-check-label" for="radio-d">Disabled Radio</label>
					</div>
				</div>
				<div class="col-sm-2">
					<label>Checkboxes</label>
					<div class="form-check">
						<input type="checkbox" class="form-check-input" id="cb-1">
						<label class="form-check-label" for="cb-1">CB option 1</label>
					</div>
					<div class="form-check">
						<input type="checkbox" class="form-check-input" id="cb-2">
						<label class="form-check-label" for="cb-2">CB option 2</label>
					</div>
					<div class="form-check">
						<input type="checkbox" class="form-check-input" disabled id="cb-3">
						<label class="form-check-label" for="cb-3">Disabled CB</label>
					</div>
					<div class="custom-control custom-switch">
						<input type="checkbox" class="custom-control-input" id="customSwitch1">
						<label class="custom-control-label" for="customSwitch1">Switch</label>
					</div>
					<div class="custom-control custom-switch">
						<input type="checkbox" class="custom-control-input" disabled id="customSwitch2">
						<label class="custom-control-label" for="customSwitch2">Disabled switch</label>
					</div>
				</div>
				<div class="col-sm-2">
					<form>
						<fieldset>
							<div class="form-group">
								<label>Select</label>
								<select class="form-control" v-model="selected.select">
									<option v-for="option in options" :key="option">{{option}}</option>
								</select>
								<label>Custom Select</label>
								<select class="custom-select" v-model="selected.select">
									<option v-for="option in options" :key="option">{{option}}</option>
								</select>
							</div>
						</fieldset>
					</form>
				</div>
				<div class="col-sm-2">
					<form>
						<fieldset>
							<div class="form-group">
								<label>Multiselect</label>
								<select class="form-control" v-model="selected.multiselect" multiple>
									<option v-for="option in options" :key="option">{{option}}</option>
								</select>
							</div>
						</fieldset>
					</form>
				</div>
			</div>

			<hr/>

			<div class="row">
				<div class="col-8">
					<div class="card">
						<div class="card-body">
							<form ng-submit="submit()">
								<fieldset>
									<legend>Legend</legend>
									<div class="form-group row">
										<label for="inputEmail" class="col-2 control-label">Email</label>
										<div class="col-10">
											<input type="email" class="form-control" id="inputEmail" placeholder="Email">
										</div>
									</div>
									<div class="form-group row">
										<label for="inputPassword" class="col-sm-2 control-label">Password</label>
										<div class="col-sm-10">
											<input type="password" class="form-control" id="inputPassword" placeholder="Password">
											<div class="form-check">
												<input type="checkbox" class="form-check-input" id="cb-card">
												<label class="form-check-label" for="cb-card">Checkbox</label>
											</div>
										</div>
									</div>
									<div class="form-group row">
										<label for="textArea" class="col-2 control-label">Textarea</label>
										<div class="col-10">
											<textarea class="form-control" rows="3" id="textArea"></textarea>
											<small class="orm-text text-muted">A longer block of help text that breaks onto a new line and may extend beyond one line.</small>
										</div>
									</div>
									<div class="form-group row">
										<label class="col-2 control-label">Radios</label>
										<div class="col-10">
											<div class="form-check">
												<input type="radio" class="form-check-input" name="radio" id="radio-card-1">
												<label class="form-check-label" for="radio-card-1">Option one is this</label>
											</div>
											<div class="form-check">
												<input type="radio" class="form-check-input" name="radio" id="radio-card-2">
												<label class="form-check-label" for="radio-card-2">Option two is something else</label>
											</div>
										</div>
									</div>
									<div class="form-group row">
										<label for="select" class="col-sm-2 control-label">Selects</label>
										<div class="col-sm-10">
											<select class="form-control" id="select">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
											<br>
											<select class="form-control" multiple="">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</select>
										</div>
									</div>
									<div class="form-group row">
										<div class="col-10 offset-2">
											<input type="button" class="btn btn-secondary" value="Reset" onClick="this.form.reset()"/>
											<input type="submit" class="btn btn-primary" value="Submit"/>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FormsView',
		data() {
			return {
				options: ['Option A', 'Option B', 'Option C'],
				selected: {
					radio: '',
					checkbox: [],
					select: '',
					multiselect: []
				}
			}
		}
	}
</script>