import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from '@/router/index'
import store from '@/store/index'
import animated from 'animate.css'
import i18n from '@/locales/index'

import {fetchGet, fetchPost} from '@/utils/http'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(animated)

Vue.prototype.$get = fetchGet
Vue.prototype.$post = fetchPost

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')
