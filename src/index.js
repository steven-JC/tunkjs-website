import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import tunk from "tunk";
import "tunk-vue";
import promiseMiddleware from "tunk-promise-middleware";
import functionMiddleware from "tunk-function-middleware";
import actionMiddleware from "tunk-action-middleware";
import request from "tunk-request";
import cookie from "tunk-cookie";


import routes from './pages/route';
import App from './pages/App.vue';

Vue.use(VueRouter);
Vue.use(tunk);

tunk.addMiddleware([actionMiddleware, functionMiddleware, promiseMiddleware]);
tunk.mixin(request());
tunk.mixin(cookie);


var modules = require.context('./modules', true, /\.js$/);
modules.keys().forEach((item)=>{
	console.log(item.replace(/\./,'./modules'))
	modules(item);
});

const scrollBehavior = (to, from, savedPosition) => {
	if (savedPosition) {
		return savedPosition
	} else {
		const position = {}
		if (to.hash) {
			position.selector = to.hash
		}
		if (to.matched.some(m => m.meta.scrollToTop)) {
			position.x = 0
			position.y = 0
		}
		return position
	}
}

const router = new VueRouter({
	mode: 'history',
	scrollBehavior,
	routes
});

console.log(routes);

const app = new Vue({
	router
}).$mount('main')

