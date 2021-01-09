import Vue from 'vue';
import Vuex from 'vuex';
import iviewui from 'view-design';
import App from './App.vue';
import router from './router';
import store from './store';
// Vue自带的，不用管
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(iviewui);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
