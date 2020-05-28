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
								<label class="control-label" for="successInput">Success</label>
								<input class="form-control" id="successInput" type="text" value="Input success">
							</div>
							<div class="form-group has-warning">
								<label class="control-label" for="warningInput">Warning</label>
								<input class="form-control" id="warningInput" type="text" value="Input warning">
							</div>
							<div class="form-group has-error">
								<label class="control-label" for="errorInput">Error</label>
								<input class="form-control" id="errorInput" type="text" value="Input error">
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
								<label class="control-label" for="largeInput">Large</label>
								<input class="form-control input-lg" id="largeInput" type="text" value="Large input">
							</div>
							<div class="form-group">
								<label class="control-label" for="defaultInput">Default</label>
								<input class="form-control" id="defaultInput" type="text" value="Default input">
							</div>
							<div class="form-group">
								<label class="control-label" for="smallInput">Small</label>
								<input class="form-control input-sm" id="smallInput" type="text" value="Small input">
							</div>
							<div class="form-group">
								<label class="control-label">Input addons</label>
								<div class="input-group">
									<span class="input-group-addon">$</span>
									<input type="text" class="form-control">
								<span class="input-group-btn">
									<button class="btn btn-default" type="button">Button</button>
								</span>
								</div>
							</div>
							<div class="form-group">
								<div class="input-group">
								<span class="input-group-addon">
									<input type="radio">
								</span>
									<input type="text" class="form-control">
								</div>
							</div>
							<div class="form-group">
								<div class="input-group">
								<span class="input-group-addon">
									<input type="checkbox">
								</span>
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
								<label class="control-label" for="passInput">Password</label>
								<input class="form-control" id="passInput" type="password" value="hunter2">
							</div>
							<div class="form-group">
								<label class="control-label" for="numInput">Number</label>
								<input class="form-control" id="numInput" type="number" value="2548">
							</div>
							<div class="form-group">
								<label class="control-label" for="emailInput">Email</label>
								<input class="form-control" id="emailInput" type="email" value="x@y.com">
							</div>
							<div class="form-group">
								<label class="control-label" for="urlInput">URL</label>
								<input class="form-control" id="urlInput" type="url" value="http://www.place.com">
							</div>
							<div class="form-group">
								<label class="control-label" for="telInput">Tel</label>
								<input class="form-control" id="telInput" type="tel" value="999-555-1234">
							</div>
							<div class="form-group">
								<label class="control-label" for="colorInput">Color</label>
								<input class="form-control" id="colorInput" type="color" value="um">
							</div>
							<div class="form-group">
								<label class="control-label" for="searchInput">Search</label>
								<input class="form-control" id="searchInput" type="search" value="um">
							</div>
							<div class="form-group">
								<label class="control-label">Range</label>
								<input class="form-control-range" type="range">
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
								<label class="control-label">Textarea</label>
								<textarea class="form-control" rows="3"></textarea>
							</div>
						</fieldset>
					</form>
				</div>
				<div class="col-sm-2">
					<label>Radios</label>
					<div class="form-check">
						<input type="radio" class="form-check-input" name="radio">
						<label class="form-check-label">Radio option 1</label>
					</div>
					<div class="form-check">
						<input type="radio" class="form-check-input" name="radio">
						<label class="form-check-label">Radio option 2</label>
					</div>
					<div class="form-check">
						<input type="radio" class="form-check-input" name="radio" disabled>
						<label class="form-check-label">Disabled Radio</label>
					</div>
				</div>
				<div class="col-sm-2">
					<label>Checkboxes</label>
					<div class="form-check">
						<input type="checkbox" class="form-check-input">
						<label class="form-check-label">CB option 1</label>
					</div>
					<div class="form-check">
						<input type="checkbox" class="form-check-input">
						<label class="form-check-label">CB option 2</label>
					</div>
					<div class="form-check">
						<input type="checkbox" class="form-check-input" disabled>
						<label class="form-check-label">Disabled CB</label>
					</div>
				</div>
				<div class="col-sm-2">
					<form>
						<fieldset>
							<div class="form-group">
								<label class="control-label">Select</label>
								<select class="form-control" ng-options="item.value as item.label for item in selOpts" ng-model="selected">
									<option v-for="option in options" :key="option"></option>
								</select>
							</div>
						</fieldset>
					</form>
				</div>
				<div class="col-sm-2">
					<form>
						<fieldset>
							<div class="form-group">
								<label class="control-label">Multiselect</label>
								<select multiple ng-multiple="true" class="form-control" ng-options="item.value as item.label for item in selOpts" ng-model="selectedMulti"></select>
							</div>
						</fieldset>
					</form>
				</div>
			</div>

			<hr/>

			<div class="row">
				<div class="col-sm-6">
					<div class="well">
						<form class="form-horizontal" ng-submit="submit()">
							<fieldset>
								<legend>Legend</legend>
								<div class="form-group">
									<label for="inputEmail" class="col-sm-2 control-label">Email</label>
									<div class="col-sm-10">
										<input type="email" class="form-control" id="inputEmail" placeholder="Email">
									</div>
								</div>
								<div class="form-group">
									<label for="inputPassword" class="col-sm-2 control-label">Password</label>
									<div class="col-sm-10">
										<input type="password" class="form-control" id="inputPassword" placeholder="Password">
										<div class="checkbox">
											<label>
												<input type="checkbox"> Checkbox
											</label>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="textArea" class="col-sm-2 control-label">Textarea</label>
									<div class="col-sm-10">
										<textarea class="form-control" rows="3" id="textArea"></textarea>
										<span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">Radios</label>
									<div class="col-sm-10">
										<div class="radio">
											<label>
												<input type="radio" name="optionsRadios" id="optionsRadio1" value="option1" checked="">
												Option one is this
											</label>
										</div>
										<div class="radio">
											<label>
												<input type="radio" name="optionsRadios" id="optionsRadio2" value="option2">
												Option two is something else
											</label>
										</div>
									</div>
								</div>
								<div class="form-group">
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
								<div class="form-group">
									<div class="col-sm-10 col-lg-offset-2">
										<input type="button" class="btn btn-default" value="Reset" onClick="this.form.reset()"/>
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
</template>

<script>
	export default {
		name: 'FormsView',
		data() {
			return {
				options: ['Option A', 'Option B', 'Option C']
			}
		}
	}
</script>