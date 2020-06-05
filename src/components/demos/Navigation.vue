<template>
	<div class="row">
		<div class="col">
			<h5>Navs</h5>
			<ul class="nav">
				<li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">Action</a>
						<a class="dropdown-item" href="#">Another action</a>
					</div>
				</li>
			</ul>
			<ul class="nav justify-content-center">
				<li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li>
			</ul>
			<ul class="nav flex-column">
				<li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li>
			</ul>
			
			<h5>Tabs</h5>
			<ul class="nav nav-tabs mb-2">
				<li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li>
			</ul>
			
			<b-tabs>
				<b-tab title="First" active>
					<p>This is the first tab</p>
				</b-tab>
				<b-tab title="Second">
					<p>This is the second tab</p>
				</b-tab>
				<b-tab title="Disabled" disabled>
					<p>Shouldn't see this</p>
				</b-tab>
			</b-tabs>
			
			<h5>Pills</h5>
			<ul class="nav nav-pills mb-2">
				<li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li>
			</ul>
			<ul class="nav nav-pills nav-fill">
				<li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li>
			</ul>
		</div>
		<div class="col">
			<h5>Breadcrumb</h5>
			<nav>
				<ol class="breadcrumb">
					<li v-for="crumb in breadcrumbs2" :key="crumb" class="breadcrumb-item" :class="{active: activeCrumb === crumb}">
						<a v-if="activeCrumb !== crumb" href="#">{{ crumb }}</a>
						<div v-else>{{ crumb }}</div>
					</li>
				</ol>
			</nav>
			<nav>
				<ol class="breadcrumb">
					<li v-for="crumb in breadcrumbs3" :key="crumb" class="breadcrumb-item" :class="{active: activeCrumb === crumb}">
						<a v-if="activeCrumb !== crumb" href="#">{{ crumb }}</a>
						<div v-else>{{ crumb }}</div>
					</li>
				</ol>
			</nav>
			
			<b-breadcrumb :items="compBreadcrumbs"></b-breadcrumb>
			
			<h5>Pagination</h5>
			<nav>
				<ul class="pagination pagination-sm">
					<li class="page-item"><a class="page-link" href="#">
						<span class="mdi mdi-arrow-left"></span>
					</a></li>
					<li v-for="ind in pages" :key="ind" class="page-item" :class="{active: activePage === ind}">
						<a class="page-link" href="#">{{ ind }}</a>
					</li>
					<li class="page-item"><a class="page-link" href="#">
						<span class="mdi mdi-arrow-right"></span>
					</a></li>
				</ul>
			</nav>
			<nav>
				<ul class="pagination">
					<li class="page-item"><a class="page-link" href="#">
						<span class="mdi mdi-arrow-left"></span>
					</a></li>
					<li v-for="ind in pages" :key="ind" class="page-item" :class="{active: activePage === ind}">
						<a class="page-link" href="#">{{ ind }}</a>
					</li>
					<li class="page-item"><a class="page-link" href="#">
						<span class="mdi mdi-arrow-right"></span>
					</a></li>
				</ul>
			</nav>
			<nav>
				<ul class="pagination pagination-lg">
					<li class="page-item"><a class="page-link" href="#">
						<span class="mdi mdi-arrow-left"></span>
					</a></li>
					<li v-for="ind in pages" :key="ind" class="page-item" :class="{active: activePage === ind}">
						<a class="page-link" href="#">{{ ind }}</a>
					</li>
					<li class="page-item"><a class="page-link" href="#">
						<span class="mdi mdi-arrow-right"></span>
					</a></li>
				</ul>
			</nav>
			<b-pagination v-model="activePage" :total-rows="9" :per-page="3"></b-pagination>
		</div>
	</div>
</template>


<script>
	export default {
		name: "NavigationView",
		data() {
			return {
				breadcrumbs2: ['Home', 'Active'],
				breadcrumbs3: ['Home', 'Library', 'Active'],
				activeCrumb: 'Active',
				compBreadcrumbs: [
					{
						text: 'Home',
						href: '#'
					},
					{
						text: 'Library',
						to: { name: 'Navigation' }
					},
					{
						text: 'Active',
						href: '#',
						active: true
					}
				],
				pages: [1, 2, 3],
				activePage: 2
			}
		}
	}
</script>