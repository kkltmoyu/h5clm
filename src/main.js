import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import util from './assets/js/utils';
import axios from 'axios';
// import _ from 'lodash';
import echarts from 'echarts/lib/echarts'
import resource from './assets/js/resources'

Vue.config.productionTip = false

Vue.use(MintUI);

Vue.prototype.$axios = axios;
Vue.prototype.$utils = util;
Vue.prototype.$echarts = echarts;
Vue.prototype.$resource = resource;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
