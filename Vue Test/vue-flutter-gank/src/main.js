import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from '@/router/index'
import {fetchGet, fetchPost} from '@/utils/http'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.prototype.$get = fetchGet
Vue.prototype.$post = fetchPost

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
