<script setup lang="ts">
import { useAppStore } from "@/store/app";

let app = useAppStore();
</script>

<template>
	<main class="main">
		<router-view />
	</main>
</template>

<style scoped lang="scss">
.main {
	background-color: v-bind("app.colors.background");
	min-height: calc(100vh - 100px);
}
</style>
