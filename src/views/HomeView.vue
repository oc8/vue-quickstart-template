<script lang="ts" setup>
import SwitchThemeItem from '@/components/SwitchThemeItem.vue'
import { ref } from 'vue'
import { useAppStore } from '@/store/app'
import HoverItem from '@/components/HoverItem.vue';

let app = useAppStore();
</script>

<template>
	<div class="max-height">
		<div class="height-100 center column">
			<SwitchThemeItem :active="true" class="theme" @click="app.setTheme(app.theme == 'light' ? 'dark' : 'light')" />
			<div class="row">
				<div class="column left">
					<p class="h1">Title 1</p>
					<p class="h2">Title 2</p>
					<p class="h3">Title 3</p>
					<div class="row">
						<div class="color" :style="'background-color:' + app.colors.c1"></div>
						<div class="color" :style="'background-color:' + app.colors.c2"></div>
						<div class="color" :style="'background-color:' + app.colors.c3"></div>
					</div>
					<div class="row">
						<div class="color" :style="'background-color:' + app.colors.c4"></div>
						<div class="color" :style="'background-color:' + app.colors.c5"></div>
						<div class="color" :style="'background-color:' + app.colors.c6"></div>
					</div>
				</div>
				<div class="column">
					<HoverItem class="hover" />
					<HoverItem class="hover" :style="2"/>
					<HoverItem class="hover" :style="3"/>
				</div>
			</div>
			<!-- <p class="h3 p">This project is a web application with:</p>
			<ul>
				<li>
					<img src="https://skillicons.dev/icons?i=vue,vite,ts,)" alt="logo" class="logo" />
				</li>
			</ul> -->
			<router-view />
		</div>
	</div>
</template>

<style scoped lang="scss">
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

.hover {
	// width: 50%;
}

.color {
	width: 100px;
	height: 100px;
	border-radius: 10px;
	margin: 10px;
}
</style>
