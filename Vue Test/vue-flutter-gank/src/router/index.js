import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@/components/index')), 'index')
const login = r => require.ensure([], () => r(require('@/components/login')), 'login')
const specials = r => require.ensure([], () => r(require('@/components/specials')), 'specials')
const special = r => require.ensure([], () => r(require('@/components/special')), 'special')
const detail = r => require.ensure([], () => r(require('@/components/detail')), 'detail')

const routers = new Router({
    routes: [
        {
            path: '',
            component: index
        }, {
            path: '/login',
            component: login
        }, {
            path: '/specials',
            component: specials,
        }, {
            path: '/specials/:type',
            component: special
        }, {
            path: '/post/:id',
            component: detail
        },
    ]
})

export default routers
