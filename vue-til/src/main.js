import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';
Vue.config.productionTip = false;
import { formatDate } from '@/utils/filters';

Vue.filter('formatDate', formatDate);
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
