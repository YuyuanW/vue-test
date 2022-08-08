import './registerServiceWorker';

import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Vue.component('Nav',Nav) 这句话不起作用 只能写到App.vue中了
 
new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
