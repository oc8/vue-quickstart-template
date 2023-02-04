// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

const myColors = {
	intenseblue: '#0017C4',
	simpleblue: '#2D73FF',
	cleangrey: '#EDEDF0',
	deepblue: '#050B3B',
	white: '#ffffff',
}
const themes: any = {
	'dark': {
		name: 'dark',
		background: myColors.deepblue,
		text: myColors.white,
		primary: myColors.simpleblue,
		secondary: myColors.intenseblue,
		...myColors
	},
	'light': {
		name: 'light',
		background: myColors.white,
		text: myColors.deepblue,
		primary: myColors.intenseblue,
		secondary: myColors.simpleblue,
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
