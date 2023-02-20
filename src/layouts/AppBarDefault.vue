<template>
	<header class="header center">
		<h1>Welcome to my library</h1>
	</header>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';

let app = useAppStore();
</script>

<style scoped>
.header {
  background-color: v-bind("app.colors.primary");
  color: white;
  text-align: center;
	height: 60px;
}
</style>
