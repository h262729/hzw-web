import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Lazyload } from 'mint-ui';

import "lib-flexible";

import "./assets/iconFont/iconfont.js"
import "./assets/css/common.css";

Vue.config.productionTip = false;
Vue.use(Lazyload, {
  preLoad: 0,
  error: '/images-app/lazyload.jpeg',
  loading: '/images-app/lazyload.jpeg',
  attempt: 1
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
