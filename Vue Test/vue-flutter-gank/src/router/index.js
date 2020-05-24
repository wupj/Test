import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@/components/index')), 'index')
const login = r => require.ensure([], () => r(require('@/components/login')), 'login')
const specials = r => require.ensure([], () => r(require('@/components/specials')), 'specials')
const api = r => require.ensure([], () => r(require('@/components/api')), 'api')
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
            children: []
        }, {
            path: '/api',
            component: api
        }, {
            path: '/post/:id',
            component: detail
        },
    ]
})

export default routers
