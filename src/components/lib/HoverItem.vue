<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useAppStore } from '@/store/app'

let app = useAppStore()
const props = defineProps({
	title: {
		type: String,
		default: 'Title',
	},
	text: {
		type: String,
		default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum nisi lectus, eget rutrum mauris ornare nec.',
	},
	icon: {
		type: String,
		default: 'bolt',
	},
	style: {
		type: Number,
		default: 1,
	},
})
let col = {
	background: app.colors.c5,
	text: app.colors.c1,
	opacity: '0.25',
}
if (props.style == 2) {
	col.background = app.colors.c3
	col.text = app.colors.c5
	col.opacity = '0.5'
}
else if (props.style == 3) {
	col.background = app.colors.c1
	col.text = app.colors.c5
	col.opacity = '0.5'
}
</script>

<template>
	<div class="main">
		<div class="row">
			<span class="material-symbols-outlined icon">{{ icon }}</span>
			<div>
				<p class="title h2">{{ title }}</p>
				<p class="text">{{ text }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.main {
	padding: 20px;
	margin: 10px;
	background-color: v-bind("col.background");
	border-radius: 10px;
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
	transition: all 0.25s ease;
}

.main:hover {
	box-shadow: v-bind("'0px 0px 10px rgba(0, 0, 0, ' + col.opacity + ')'");
}

.title {
	font-size: 1.5rem;
	// font-weight: 600;
	color: v-bind("col.text");
}

.text {
	font-size: 1rem;
	font-weight: 400;
	color: v-bind("col.text");
}

.icon {
	color: v-bind("col.text");
	margin-right: 10px;
	background-image: v-bind;
	font-size: 1.75rem;
}
</style>
