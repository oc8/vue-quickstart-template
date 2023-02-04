import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [{
	path: '/',
	component: () => import('@/layouts/IndexDefault.vue'),
	children: [
		{
			path: '',
			name: 'Home',
			component: HomeView
		},
	]
}
]

const router = createRouter({
	history: createWebHistory(), // for hash mode use createWebHashHistory()
	routes
})

export default router
