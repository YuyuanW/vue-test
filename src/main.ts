import './registerServiceWorker';

import Vue from 'vue';

import Layout from '@/components/BottomNav/Layout.vue';
import Icon from '@/components/Icon.vue';
import Nav from '@/components/Nav.vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('Layout',Layout)
Vue.component('Nav',Nav) //这句话不起作用 只能写到App.vue中了
Vue.component('Icon',Icon)

new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')

// 提交就很烦 git commit -m 'xxxx' --no-verify
