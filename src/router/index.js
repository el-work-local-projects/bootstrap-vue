import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Text from '../components/demos/Text.vue';
import Labels from '../components/demos/Labels.vue';
import Buttons from '../components/demos/Buttons.vue';
import Tables from '../components/demos/Tables.vue';
import ComponentTables from '../components/demos/ComponentTables.vue';
import Forms from '../components/demos/Forms.vue';
import ComponentForms from '../components/demos/ComponentForms.vue';
import Navigation from '../components/demos/Navigation.vue';
import Alerts from '../components/demos/Alerts.vue';
import TimeSelection from '../components/demos/TimeSelection.vue';
import Progress from '../components/demos/Progress.vue';
import ListGroups from '../components/demos/ListGroups.vue';
import Dialogs from '../components/demos/Dialogs.vue';
import Containers from '../components/demos/Containers.vue';

export default new VueRouter({
	routes: [
	{
		path: '/',
		name: 'Root',
		component: Text
	},
	{
		path: '/text',
		name: 'Text',
		component: Text
	},
	{
		path: '/labels',
		name: 'Labels',
		component: Labels
	},
	{
		path: '/buttons',
		name: 'Buttons',
		component: Buttons
	},
	{
		path: '/tables',
		name: 'Tables',
		component: Tables
	},
	{
		path: '/component-tables',
		name: 'ComponentTables',
		component: ComponentTables
	},
	{
		path: '/forms',
		name: 'Forms',
		component: Forms
	},
	{
		path: '/component-forms',
		name: 'ComponentForms',
		component: ComponentForms
	},
	{
		path: '/navigation',
		name: 'Navigation',
		component: Navigation
	},
	{
		path: '/alerts',
		name: 'Alerts',
		component: Alerts
	},
	{
		path: '/time-selection',
		name: 'TimeSelection',
		component: TimeSelection
	},
	{
		path: '/progress',
		name: 'Progress',
		component: Progress
	},
	{
		path: '/list-groups',
		name: 'ListGroups',
		component: ListGroups
	},
	{
		path: '/dialogs',
		name: 'Dialogs',
		component: Dialogs
	},
	{
		path: '/containers',
		name: 'Containers',
		component: Containers
	}
	]
});