// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

const myColors = {
	c1: '#050B3B',
	c2: '#0017C4',
	c3: '#2D73FF',
	c4: '#EDEDF0',
	c5: '#ffffff',
	c6: '#ffffff',
}
const themes: any = {
	'dark': {
		name: 'dark',
		background: myColors.c1,
		text: myColors.c5,
		primary: myColors.c3,
		secondary: myColors.c2,
		...myColors
	},
	'light': {
		name: 'light',
		background: myColors.c5,
		text: myColors.c1,
		primary: myColors.c2,
		secondary: myColors.c3,
		...myColors
	},
}

export const useAppStore = defineStore('app', {
	state: () => ({
		colors: ref(themes['light']),
		theme: 'light',
	}),
	actions: {
		setTheme(theme: string) {
			this.colors = themes[theme]
			this.theme = theme
		}
	}
})
