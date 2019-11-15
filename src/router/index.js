import Vue from 'vue'
import Router from 'vue-router'
import {
  appRouter
} from './routerConfig';

Vue.use(Router);

// 路由配置
const RouterConfig = {
	routes: appRouter
};

const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((to) => {
  window.scrollTo(0, 0);
});

export default router;