<template>
	<div class="row">
		<div class="col">
			<div class="row">
				<b-form class="col">
					<b-form-group v-for="type in inputTypes" :key="type" :label="type">
						<b-form-input :id="`input-type-${type}`" :type="type" value="Value"></b-form-input>
					</b-form-group>
				</b-form>
				<b-form class="col">
					<b-form-group label="File">
						<b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file or drop it here..."
							drop-placeholder="Drop file here..."></b-form-file>
						<b-form-file v-model="file" accept=".vue" :state="Boolean(file)" placeholder=".vue only"></b-form-file>
						<b-form-file v-model="file" plain></b-form-file>
					</b-form-group>
					
					<b-form-group label="Tags">
						<b-form-tags v-model="datalist"></b-form-tags>
						<b-form-tags v-model="datalist" tag-pills tag-variant="primary"></b-form-tags>
					</b-form-group>
					
					<b-form-group label="Sizes">
						<b-form-input size="sm" placeholder="Small"></b-form-input>
						<b-form-input placeholder="Default"></b-form-input>
						<b-form-input size="lg" placeholder="Large"></b-form-input>
					</b-form-group>
					
					<label>Autofocus</label>
					<b-form-input autofocus placeholder="Was autofocused"></b-form-input>
				
					<label for="form-help-input">Form text help</label>
					<b-input type="text" id="form-help-input"></b-input>
					<b-form-text id="form-help-text">Help text goes here</b-form-text>
					
					<label for="form-validation-input">Form field validation</label>
					<b-input v-model="username" :state="validation" id="form-validation-input"></b-input>
					<b-form-invalid-feedback>Username must be 5-12 characters long.</b-form-invalid-feedback>
					<b-form-valid-feedback>Username valid!</b-form-valid-feedback>
					
					<label for="form-input-list">Input with data list</label>
					<b-form-input list="input-list" id="form-input-list"></b-form-input>
					<b-form-datalist id="input-list" :options="datalist"></b-form-datalist>
				</b-form>
				<b-form class="col">
					<label for="dt-1">Datepicker</label>
					<b-form-datepicker id="dt-1" v-model="date"></b-form-datepicker>		
					
					<label for="dt-2">Disabled</label>			
					<b-form-datepicker id="dt-2" v-model="date" :disabled="true"></b-form-datepicker>	
					
					<label for="dt-3">Min/Max</label>
					<b-form-datepicker id="dt-3" v-model="date" :min="dateSettings.min" :max="dateSettings.max" :state="dateValid"></b-form-datepicker>							
					
					<label for="dt-1">Controls</label>
					<b-form-datepicker id="dt-4" v-model="date" today-button reset-button close-button></b-form-datepicker>
					
					<label for="dt-1">Button Only</label>
					<b-input-group>
						<b-form-input v-model="date" type="text" placeholder="YYYY-MM-DD" autocomplete="off"></b-form-input>
						<b-input-group-append>
							<b-form-datepicker id="dt-4" v-model="date" button-only today-button reset-button close-button></b-form-datepicker>
						</b-input-group-append>
					</b-input-group>	
					
					<label>Timepicker</label>
					<b-form-timepicker v-model="time"></b-form-timepicker>
					
					<label>Disabled</label>
					<b-form-timepicker v-model="time" disabled></b-form-timepicker>
					
					<label>24 Hour</label>
					<b-form-timepicker v-model="time" :hour12="false"></b-form-timepicker>
					
					<label>Seconds</label>
					<b-form-timepicker v-model="time" show-seconds></b-form-timepicker>
					
					<label>Controls</label>
					<b-form-timepicker v-model="time" now-button reset-button></b-form-timepicker>
					
					<label>Button Only</label>
					<b-input-group>
						<b-form-input v-model="time" type="text" placeholder="HH:mm:ss"></b-form-input>
						<b-input-group-append>
							<b-form-timepicker v-model="time" button-only right show-seconds now-button reset-button></b-form-timepicker>
						</b-input-group-append>
					</b-input-group>
				</b-form>
			</div>

			<hr/>

			<div class="row">
				<div class="col">
					<label>Rating</label>
					<b-form-rating v-model="rating"></b-form-rating>
					
					<label>Spinbutton</label>
					<b-form-spinbutton v-model="spin" min="0" max="100"></b-form-spinbutton>
					
					<label>Textarea</label>
					<b-form-textarea v-model="textarea" rows="3" max-rows="6"></b-form-textarea>
				</div>
				<div class="col">
					<h6>Radios</h6>
					<label>Single</label>
					<b-form-radio v-model="radio.single" name="single-radio" value="A">Radio A</b-form-radio>
					<b-form-radio v-model="radio.single" name="single-radio" value="B" disabled>Disabled</b-form-radio>
					
					<b-form-group label="Multiple">
						<b-form-radio-group v-model="radio.multi" :options="options" name="radio-multiple"></b-form-radio-group>
					</b-form-group>
					
					<b-form-group label="Sizes">
						<b-form-radio size="sm">Small</b-form-radio>
						<b-form-radio>Default</b-form-radio>
						<b-form-radio size="lg">Large</b-form-radio>
					</b-form-group>
					
					<b-form-group label="Button">
						<b-form-radio-group v-model="radio.multi" :options="options" name="radio-multiple-2" buttons></b-form-radio-group>
					</b-form-group>
				</div>
				<div class="col">
					<h6>Checkboxes</h6>
					<label>Single</label>
					<b-form-checkbox id="cb-solo" v-model="checked.single" value="accept" unchecked-value="not_accept">
						I accept the terms
					</b-form-checkbox>
					
					<b-form-checkbox disabled>Disabled</b-form-checkbox>
					
					<b-form-group label="Multiple">
						<b-form-checkbox-group id="cb-group" v-model="checked.multi" :options="options"></b-form-checkbox-group>
					</b-form-group>
					
					<b-form-group label="Sizes">						
						<b-form-checkbox size="sm">Small</b-form-checkbox>
						<b-form-checkbox>Default</b-form-checkbox>
						<b-form-checkbox size="lg">Large</b-form-checkbox>
					</b-form-group>
					
					<b-form-group label="Button">
						<b-form-checkbox-group v-model="checked.multi" :options="options" buttons></b-form-checkbox-group>
					</b-form-group>
					
					<b-form-group label="Switch">
						<b-form-checkbox switch>Enabled</b-form-checkbox>
						<b-form-checkbox switch disabled>Disabled</b-form-checkbox>
					</b-form-group>
				</div>
				<div class="col">
					<h6>Select</h6>
					<label>Single</label>
					<b-form-select v-model="select.single" :options="options"></b-form-select>
					
					<label>Grouped Options</label>
					<b-form-select v-model="select.grouped">
						<b-form-select-option value="A">Option A</b-form-select-option>
						<b-form-select-option-group label="Grouped options">
							<b-form-select-option value="B">Option B</b-form-select-option>
							<b-form-select-option value="C">Option C</b-form-select-option>
						</b-form-select-option-group>
					</b-form-select>
					
					<label>Multiple</label>
					<b-form-select multiple v-model="select.multi" :options="options"></b-form-select>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ComponentFormsView',
		data() {
			const now = new Date();
			let min = new Date(now);
			min.setDate(min.getDate() - 1);
			let max = new Date(now);
			max.setDate(max.getDate() + 1);
			
			return {
				username: '',
				inputTypes: [
					'text',
					'number',
					'email',
					'password',
					'search',
					'url',
					'tel',
					'date',
					'time',
					'range',
					'color'
				],
				datalist: ['Cat', 'Dog', 'Bear', 'Bird'],
				options: ['Opt A', 'Opt B', 'Opt C'],
				textarea: '',
				radio: {
					single: '',
					multi: ''
				},
				checked: {
					single: 'not_accpet',
					multi: []
				},
				select: {
					single: '',
					grouped: '',
					multi: []
				},
				file: null,
				rating: null,
				spin: 50,
				date: '',
				dateSettings: {
					min: min,
					max: max
				},
				time: ''
			}
		},
		computed: {
			validation() {
				return this.username.length > 4 && this.username.length < 13;
			},
			dateValid() {
				const now = new Date();
				let day = new Date(this.date);
				let diff = now.getDate() - day.getDate();
				return diff < 2 && diff > -2;
			}
		}
	}
</script>