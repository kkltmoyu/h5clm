import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'mint-ui/lib/style.css'
import util from './assets/js/utils';
import axios from 'axios';
import echarts from 'echarts/lib/echarts'
import resource from './assets/js/resources'
import Mint from 'mint-ui';

Vue.use(Mint);
Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$utils = util;
Vue.prototype.$echarts = echarts;
Vue.prototype.$resource = resource;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
