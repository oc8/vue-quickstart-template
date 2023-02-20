<template>
	<button ref="background" class="background stack" v-on:click="action()">
		<div ref="circle" class="circle"></div>
	</button>
</template>

<script setup lang="ts">
import { ref, inject, onMounted, defineProps } from 'vue'

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

<style scoped>
.background {
	width: v-bind("height * 2 + 'px'");
	height: v-bind("height + 'px'");
	border-radius: 50px;
	background-color: rgb(134, 223, 0);
	background-color: grey;
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
	background-color: rgb(134, 223, 0);
}
</style>
