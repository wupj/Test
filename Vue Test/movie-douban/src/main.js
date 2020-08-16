import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import i18n from "./locales";
import Element from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import "@/assets/styles/index.scss";

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
