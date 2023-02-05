<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted, defineProps } from 'vue'
import { useAppStore } from '@/store/app';

let app = useAppStore();
let props = defineProps({
	'steps': {
		type: Array,
		required: true
	},
	'currentStep': {
		type: Number,
		required: true
	}
})
let newSteps = []
for (let i = 0; i < props.steps.length; i++) {
	newSteps.push({ value: props.steps[i], index: i });
}
</script>

<template>
	<div class="column mw stepper">
		<div class="row">
			<div class="center mw" v-for="step in newSteps">
				<div class="line" :style="step.index > 0? '' : 'opacity: 0'"></div>
				<div class="row center round">
					<div class="icon center">
						<p v-if="step.index >= currentStep">{{ step.index + 1 }}</p>
						<span v-else-if="step.index < currentStep" class="material-symbols-outlined done-icon">
							done
						</span>
					</div>
				</div>
				<div class="line" :style="step.index < newSteps.length - 1? '' : 'opacity: 0'"></div>
			</div>
		</div>
		<div class="row">
			<div class="center mw" v-for="step in newSteps">
				<p class="text">{{ step.value }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.stepper {
	background-color: v-bind("app.colors.background");
	border-radius: 10px;
	padding: 10px;
	margin: 10px 0;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
}
.round {
	margin: 0 10px;
}
.line {
	width: 100%;
	height: 2px;
	background-color: v-bind("app.colors.primary");
}

.icon {
	width: 30px;
	height: 30px;
	color: v-bind("app.colors.background");
	font-weight: 500;
	border-radius: 50%;
	background-color: v-bind("app.colors.accent");
	margin-bottom: 5px;
}

.done-icon {
	font-size: 30px;
	color: white;
	width: 30px;
	height: 30px;
	background-color: v-bind("app.colors.secondary");
	border-radius: 50%;
}

.text {
	color: v-bind("app.colors.accent");
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	max-width: 100px;
}
</style>
