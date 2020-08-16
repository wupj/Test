import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  // 默认语言
  locale: sessionStorage.getItem("locale") || "zh",
  // 引入对应的语言包文件
  messages: {
    zh: require("./zh.json"),
    en: require("./en.json")
  }
});

export default i18n;
