import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "./axios";
import router from "./router";
import Element from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import "@/assets/styles/index.scss";

Vue.use(Element);

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
