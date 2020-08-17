import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import i18n from "./locales";
import Element from "element-ui";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "element-ui/lib/theme-chalk/index.css";
import "swiper/swiper-bundle.css";
import "@/assets/styles/index.scss";

Vue.use(Element);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
