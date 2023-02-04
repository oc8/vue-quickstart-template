<script lang="ts" setup>
import { ref } from 'vue'
import SwitchThemeItem from '@/components/SwitchThemeItem.vue'
import { useAppStore } from '@/store/app'

let app = useAppStore();
const count = ref(0)
</script>

<template>
	<div class="max-height">
		<div class="height-100 center column">
			<SwitchThemeItem :active="true" class="theme" @click="app.setTheme(app.theme == 'light'? 'dark': 'light')" />
			<p class="h3">This project is a web application with:</p>
			<ul>
				<li>
					<img src="https://skillicons.dev/icons?i=vue,vite,ts,)" alt="logo" class="logo" />
				</li>
			</ul>
			<router-view />
			<button class="p" @click="count++">{{ count }}</button>
		</div>
	</div>
</template>

<style scoped>
.max-height {
	height: calc(100vh - 100px);
}
.theme {
	position: absolute;
	top: 75px;
	right: 10px;
}
.logo {
	margin: 10px 0;
	margin-right: -55px;
}
</style>
