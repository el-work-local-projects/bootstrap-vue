<template>
	<li class="nav-item active" v-b-tooltip.hover.noninteractive title="Messages">
		<a class="nav-link pr-0" role="button" v-b-modal.frame-message-modal>
			<span class="mdi mdi-message" style="font-size: 18px"></span>
			<span style="position: relative; left: -6px; top: 6px;" 
					class="badge" :class="messages.length === 0 ? '' : 'badge-' + messages[0].type">{{ messages.length }}</span>
		</a>
	
		<b-modal id="frame-message-modal" title="CAFE Messages">
			<div v-for="(msgs, app) in groupedMessages" :key="app">
				<h5>{{ app }}</h5>
				<hr/>
				<b-alert v-for="msg in msgs" :key="msg.message" :variant="msg.type" show 
						dismissible @dismissed="deleteMessage(msg)">
							{{ msg.message }}
				</b-alert>
			</div>
			<template v-slot:modal-footer>
				<b-button block @click="undoDismissals">Undo Dismissals</b-button>
			</template>
		</b-modal>
	</li>
</template>

<script>
	function loadMessages() {
		return [
			{
				type: 'info',
				message: 'Test message 1',
				applications: [
					'EOS Viewer',
					'Shift Log'
				]
			},
			{
				type: 'success',
				message: 'Test message 2',
				applications: [
					'CAFE'
				]
			}
		];
	}

	export default {
		name: 'FrameMessageViewer',
		data: () => {
			return {
				messages: []
			}
		},
		created() {
			this.messages = loadMessages();
		},
		computed: {
			groupedMessages() {
				let grouped = {};
				for (let msg of this.messages) {
					for (let app of msg.applications) {
						if (!grouped[app]) {
							grouped[app] = [];
						}
						grouped[app].push(msg);
					}
				}
				return grouped;
			}
		},
		methods: {
			deleteMessage(msg) {
				this.messages.splice(this.messages.indexOf(msg), 1);
			},
			undoDismissals() {
				this.messages = [
					{
						type: 'info',
						message: 'Test message 1',
						applications: [
							'EOS Viewer',
							'Shift Log'
						]
					},
					{
						type: 'success',
						message: 'Test message 2',
						applications: [
							'CAFE'
						]
					}
				];
			}
		}
	}
</script>

<style scoped>

</style>