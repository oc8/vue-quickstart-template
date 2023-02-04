<script setup lang="ts">
import { useAppStore } from '@/store/app';

let app = useAppStore();
var currentYear = new Date().getFullYear()
</script>

<template>
	<footer>
      <p>Copyright © {{ currentYear }} oc8</p>
	</footer>
</template>

<style scoped lang="scss">
footer {
  background-color: v-bind("app.colors.cleangrey");
  text-align: center;
  padding: 10px;
	height: 40px;
}
</style>
