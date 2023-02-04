// import { loadFonts } from './webfontloader'
import pinia from '../store'
import router from '../router'
import '../styles/default.scss'

export function registerPlugins(app: any) {
	// loadFonts()
	app
		.use(router)
		.use(pinia)
}
