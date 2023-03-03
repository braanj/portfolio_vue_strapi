import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.prototype.$baseUrl = process.env.VUE_APP_BACK_END_HOST;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
