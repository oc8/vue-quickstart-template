<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { useAppStore } from '@/store/app';

let app = useAppStore();
const props = defineProps({
	height: {
		type: Number,
		default: 50,
	},
	active: {
		type: Boolean,
		default: false,
	}
})

let on = ref(props.active);
let circle = ref();
let background = ref();
function action() {
	if (!circle.value || !background.value) return;
	if (on.value) {
		circle.value.classList.remove('active');
		background.value.classList.remove('color-active');
	} else {
		circle.value.classList.add('active');
		background.value.classList.add('color-active');
	}
	on.value = !on.value;
}
onMounted(() => {
	if (on.value) {
		circle.value.classList.add('active');
		background.value.classList.add('color-active');
	}
})
</script>

<template>
	<button ref="background" class="background stack" v-on:click="action()">
		<div ref="circle" class="circle center">
			<img v-if="on" src="@/assets/sun.svg" alt="light mode" class="mode" />
			<img v-if="!on" src="@/assets/moon.svg" alt="dark mode" class="mode" />
		</div>
	</button>
</template>

<style scoped>
.background {
	width: v-bind("height * 2 + 'px'");
	height: v-bind("height + 'px'");
	border-radius: 50px;
	background-color: v-bind("app.colors.c3");
	transition: all 0.25s ease;
}

.circle {
	position: absolute;
	top: 10%;
	left: 5%;
	/* padding-left: 80%; */
	width: 40%;
	height: 80%;
	background-color: white;
	border-radius: 50%;
	box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
	transition: all 0.25s ease-in-out;
}

.active {
	left: 55%;
}

.color-active {
	background-color: v-bind("app.colors.c2");
}

.mode {
	width: 80%;
	height: 80%;
}
</style>
