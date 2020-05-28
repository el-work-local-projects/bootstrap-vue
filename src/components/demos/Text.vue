<template>
	<div class="row">
		<div class="col">
			<div class="row">
				<div class="col">
					<h1>Heading 1</h1>
					<h2>Heading 2</h2>
					<h3>Heading 3</h3>
					<h4>Heading 4</h4>
					<h5>Heading 5</h5>
					<h6>Heading 6</h6>
					<p class="lead">Leading paragraph</p>
					<p>Citation by <cite title="Nowhere Important">Nowhere Important</cite></p>
				</div>
				<div class="col">
					<h2>Example body text</h2>
					<p>Text goes here. A link looks like <a href="#">this</a>.</p>
					<p><small>This is the fine print.</small></p>
					<p>The following is <strong>bold text</strong>.</p>
					<p>The following is <em>italicized text</em>.</p>
					<p>Abbreviations look like <abbr title="abbreviation">abbr</abbr>.</p>
					<p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>1234567890</p>
				</div>
				<div class="col">
					<h2>Emphasis classes</h2>
					<div class="row">
						<div class="col">
							<p class="text-primary">Primary text</p>
							<p class="text-secondary">Secondary text</p>
							<p class="text-success">Success text</p>
							<p class="text-info">Info text</p>
							<p class="text-warning">Warning text</p>
							<p class="text-danger">Danger text</p>						
						</div>
						<div class="col">
							<p class="text-muted">Muted text</p>
							<p class="text-light bg-dark">Light text</p>
							<p class="text-dark">Dark text</p>
							<p class="text-body">Body text</p>
							<p class="text-white bg-dark">White text</p>
							<p class="text-black-50">Black 50 text</p>
							<p class="text-white-50 bg-dark">White 50 text</p>						
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<b-form-textarea v-model="content" placeholder="Type text here to see it in the various styles..." rows=3 max-rows=6></b-form-textarea>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<h1>{{content}}</h1>
					<h2>{{content}}</h2>
					<h3>{{content}}</h3>
					<h4>{{content}}</h4>
					<h5>{{content}}</h5>
					<h6>{{content}}</h6>
					<p class="lead">{{content}}</p>
				</div>
				<div class="col">
					<p>{{content}}</p>
					<p><a href="#">{{content}}</a></p>
					<p><small>{{content}}</small></p>
					<p><strong>{{content}}</strong></p>
					<p><em>{{content}}</em></p>
					<p><abbr :title="content">{{content}}</abbr></p>
				</div>
				<div class="col">
					<div class="row">
						<div class="col">
							<p class="text-primary">{{content}}</p>
							<p class="text-secondary">{{content}}</p>
							<p class="text-success">{{content}}</p>
							<p class="text-info">{{content}}</p>
							<p class="text-warning">{{content}}</p>
							<p class="text-danger">{{content}}</p>						
						</div>
						<div class="col">
							<p class="text-muted">{{content}}</p>
							<p class="text-light bg-dark">{{content}}</p>
							<p class="text-dark">{{content}}</p>
							<p class="text-body">{{content}}</p>
							<p class="text-white bg-dark">{{content}}</p>
							<p class="text-black-50">{{content}}</p>
							<p class="text-white-50 bg-dark">{{content}}</p>						
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TextView',
		data() {
			return {
				content: ''
			}
		}
	}
</script>