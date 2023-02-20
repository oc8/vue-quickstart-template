<script setup lang="ts">
import { useAppStore } from '@/store/app';

let app = useAppStore();
var currentYear = new Date().getFullYear()
</script>

<template>
	<footer>
      <p class="text">Copyright © {{ currentYear }} oc8</p>
	</footer>
</template>

<style scoped lang="scss">
footer {
  background-color: v-bind("app.colors.c4");
  text-align: center;
  padding: 10px;
	height: 40px;
}
.text {
	color: v-bind("app.colors.c1");
}
</style>
