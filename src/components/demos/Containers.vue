<template>
	<div class="row">
		<div class="col">
			<h5>Card</h5>
			<div class="row">
				<div class="col-3">
					<h6>Native</h6>
					<div class="card">
						<img src="../../assets/logo.png" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">Card Title</h5>
							<h6 class="card-subtitle text-muted">Card subtitle</h6>
							<p class="card-text">Card text goes here</p>
							<button type="button" class="btn btn-primary">Hey look a button</button>
						</div>
					</div>
				</div>
				<div class="col-2">
					<h6>Native List</h6>
					<div class="card">
						<div class="card-header">List</div>
						<ul class="list-group list-group-flush">
							<li v-for="ind in 3" :key="ind" class="list-group-item">Item {{ ind }}</li>
						</ul>
						<div class="card-footer">Footer</div>
					</div>
				</div>
				<div class="col-4">
					<h6>Native Styles</h6>
					<div class="row">
						<div class="col">
							<div class="card text-white bg-primary">
								<div class="card-header">Header</div>
								<div class="card-body">
									<p class="card-text">Style</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card text-white bg-secondary">
								<div class="card-header">Header</div>
								<div class="card-body">
									<p class="card-text">Style</p>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="card text-white bg-success">
								<div class="card-header">Header</div>
								<div class="card-body">
									<p class="card-text">Style</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card text-white bg-danger">
								<div class="card-header">Header</div>
								<div class="card-body">
									<p class="card-text">Style</p>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="card text-white bg-warning">
								<div class="card-header">Header</div>
								<div class="card-body">
									<p class="card-text">Style</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card text-white bg-info">
								<div class="card-header">Header</div>
								<div class="card-body">
									<p class="card-text">Style</p>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="card bg-light">
								<div class="card-header">Header</div>
								<div class="card-body">
									<p class="card-text">Style</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card text-white bg-dark">
								<div class="card-header">Header</div>
								<div class="card-body">
									<p class="card-text">Style</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-3">
					<h6>Component</h6>
					<b-card title="Title" img-src="@/assets/logo.png" img-top>
						<b-card-sub-title>Card subtitle</b-card-sub-title>
						<b-card-text>Card text goes here</b-card-text>
						<b-button variant="primary">Another button</b-button>
					</b-card>
				</div>
			</div>
			<h5>Carousel</h5>
			<div class="row">
				<div class="col">
					<h6>Native</h6>
					<div id="native-carousel-controls" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item active">
								<img src="@/assets/logo.png" class="d-block w-100" style="height: 330px;">
							</div>
							<div class="carousel-item">
								<img src="@/assets/cats.jpg" class="d-block w-100">
							</div>
							<div class="carousel-item">
								<img src="@/assets/fritz_daffodils.jpg" class="d-block w-100">
							</div>
						</div>
						<a class="carousel-control-prev" href="#native-carousel-controls" role="button" data-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="carousel-control-next" href="#native-carousel-controls" role="button" data-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
				</div>
				<div class="col">
					<h6>Component</h6>
					<b-carousel id="comp-carousel" :interval="4000" controls indicators style="text-shadow: 1px 1px 2px #333;">
						<b-carousel-slide caption="Vue" text="Vue logo" img-src="@/assets/logo.png" style="height: 330px;"></b-carousel-slide>
						<b-carousel-slide caption="Cats" text="Small furry demons" img-src="@/assets/cats.jpg"></b-carousel-slide>
						<b-carousel-slide caption="Fritz" text="Best boy" img-src="@/assets/fritz_daffodils.jpg"></b-carousel-slide>
					</b-carousel>
				</div>
			</div>
			<h5>Jumbotron</h5>
			<div class="row">
				<div class="col">
					<h6>Native</h6>
					<div class="jumbotron">
						<h1 class="display-4">Main content</h1>
						<p class="lead">Descriptive content</p>
						<hr class="my-4">
						<p>Buy this product now for way too much money</p>
						<a class="btn btn-primary" href="#" role="button">Buy now</a>
					</div>
				</div>
				<div class="col">
					<h6>Component</h6>
					<b-jumbotron header="Main content" lead="Descriptive content">
						<p>Buy this product for way too much money</p>
						<b-button variant="primary" href="#">Buy now</b-button>
					</b-jumbotron>
				</div>
			</div>
			<h5>Media Object</h5>
			<div class="row">
				<div class="col">
					<h6>Native</h6>
					<div class="media">
						<img src="@/assets/taff-blep.jpg" class="mr-3">
						<div class="media-body">
							<h5 class="mt-0">Header</h5>
							Body text goes here and can go on for a while maybe long enough for a text wrap imagine this 
							is a social media post or a stack overflow answer or something.
							
							
							<div class="media">
								<img src="@/assets/taff-blep.jpg" class="mr-3">
								<div class="media-body">
									<h5 class="mt-0">Header</h5>
									Nested post criticizing earlier post.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<h6>Component</h6>
					<b-media>
						<template v-slot:aside>
							<b-img src="@/assets/taff-blep.jpg"></b-img>							
						</template>						
						<h5 class="mt-0">Header</h5>
						<p>
							Body text goes here and can go on for a while maybe long enough for a text wrap imagine this 
							is a social media post or a stack overflow answer or something.
						</p>
						
						<b-media>
							<template v-slot:aside>
								<b-img src="@/assets/taff-blep.jpg"></b-img>							
							</template>						
							<h5 class="mt-0">Header</h5>
							<p>
								Nested post criticizing earlier post.
							</p>
						</b-media>
					</b-media>
				</div>
			</div>
			<h5>Avatar</h5>
			<div class="row">
				<div class="col">
					<h6>Standalone</h6>
					<b-avatar size="sm" class="mr-1"></b-avatar>
					<b-avatar class="mr-1"></b-avatar>
					<b-avatar size="lg" class="mr-1"></b-avatar>
					<b-avatar square class="mr-1"></b-avatar>
					<b-avatar rounded class="mr-1"></b-avatar>
					<b-avatar variant="primary" text="LU" class="mr-1"></b-avatar>
					<b-avatar class="mr-1"><span class="mdi mdi-cat"></span></b-avatar>
					<b-avatar variant="light" src="@/assets/taff-blep.jpg"></b-avatar>
				</div>
				<div class="col">
					<h6>As list icons</h6>
					<b-list-group>
						<b-list-group-item class="d-flex align-items-center">
							<b-avatar class="mr-3"></b-avatar>
							<span class="mr-auto">Random User</span>
							<b-badge>5</b-badge>
						</b-list-group-item>
						<b-list-group-item class="d-flex align-items-center">
							<b-avatar class="mr-3" src="@/assets/taff-blep.jpg"></b-avatar>
							<span class="mr-auto">Taffy the Loud Cat</span>
							<b-badge>99</b-badge>
						</b-list-group-item>
					</b-list-group>
				</div>
				<div class="col">
					<h6>As buttons</h6>
					<b-avatar button></b-avatar>
					<b-avatar button variant="light" src="@/assets/taff-blep.jpg"></b-avatar>
				</div>
			</div>
			<h5>Sidebar</h5>
			<div class="row">
				<div class="col">
					<b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
					<b-sidebar id="sidebar-1" title="Sidebar" shadow>
						<div class="px-3 py-2">
							<p>Put whatever you want in here. Menus, images, item details, whatever.</p>
						</div>
					</b-sidebar>
					
					<b-button v-b-toggle.sidebar-2>Toggle Right Sidebar</b-button>
					<b-sidebar id="sidebar-2" title="Sidebar" right shadow>
						<div class="px-3 py-2">
							<p>Put whatever you want in here. Menus, images, item details, whatever.</p>
						</div>
					</b-sidebar>
					
					<b-button v-b-toggle.sidebar-3>Toggle Styled Sidebar</b-button>
					<b-sidebar id="sidebar-3" title="Sidebar" right shadow bg-variant="dark" text-variant="light">
						<div class="px-3 py-2">
							<p>Put whatever you want in here. Menus, images, item details, whatever.</p>
						</div>
					</b-sidebar>
					
					<b-button v-b-toggle.sidebar-4>Toggle Backdrop Sidebar</b-button>
					<b-sidebar id="sidebar-4" title="Sidebar" backdrop shadow bg-variant="dark" text-variant="light">
						<div class="px-3 py-2">
							<p>Put whatever you want in here. Menus, images, item details, whatever.</p>
						</div>
					</b-sidebar>
					
					<b-button v-b-toggle.sidebar-5>Toggle Custom Sidebar</b-button>
					<b-sidebar id="sidebar-5" title="Sidebar" no-header shadow bg-variant="dark" text-variant="light">
						<template v-slot:default="{ hide }">
							<div class="p-3">
								<h4>Title without close button</h4>
								<p>Text goes here again</p>
								<nav class="mb-3">
									<b-nav vertical>
										<b-nav-item active @click="hide">Active</b-nav-item>
										<b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
										<b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
									</b-nav>
								</nav>
							</div>
						</template>
						<template v-slot:footer="{ hide }">
							<div class="d-flex bg-dark text-light align-items-center px-3 py-2">
								<strong class="mr-auto">Footer</strong>
								<b-button @click="hide">Close</b-button>
							</div>
						</template>
					</b-sidebar>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ContainersView',
		data() {
			return {
			
			};
		}
	}
</script>