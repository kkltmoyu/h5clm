import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie';
import {
  appRouter
} from './routerConfig';
console.log('appRouter is ', appRouter)
Vue.use(Router);

// 路由配置
const RouterConfig = {
	// mode: 'history',
	routes: appRouter
};

const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
  if (!Cookies.get('TD-Smart-Choice-Token') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
    next({
      name: 'login'
    });

  } else {
      debugger
  }
});

router.afterEach((to) => {
  window.scrollTo(0, 0);
});

export default router;


