import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'
import 'mint-ui/lib/style.css'
import axios from 'axios';
import Mint from 'mint-ui';

Vue.use(Mint);
Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
