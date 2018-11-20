import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Verify from '@/components/Verify'

Vue.use(Router)


export default new Router({
	mode: 'history',
	base: '/',
	routes: [
		{ 
			path: '/', name: 'HelloWorld', component: HelloWorld
		},{
			path: '/verify', component: Verify, name: 'Verify'
		}
	]
})
