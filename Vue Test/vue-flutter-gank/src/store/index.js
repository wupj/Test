import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import i18n from '@/locales'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        category: [{
            type: 'Girl',
            name: i18n.t('lang.girl'),
            desc: i18n.t('lang.girlDesc'),
            image: require('@/assets/girl.jpg')
        }, {
            type: 'Android',
            name: 'Android',
            desc: 'Always deliver more than expected.（Larry Page）',
            image: require('@/assets/android.jpg')
        }, {
            type: 'iOS',
            name: 'IOS',
            desc: 'Innovation distinguishes between a leader and a follower.（Steve Jobs）',
            image: require('@/assets/ios.jpg')
        }, {
            type: 'Flutter',
            name: 'Flutter',
            desc: 'The man who has made up his mind to win will never say “ Impossible”。（ Napoleon ）',
            image: require('@/assets/flutter.jpg')
        }, {
            type: 'frontend',
            name: i18n.t('lang.frontend'),
            desc: 'Education is a progressive discovery of our own ignorance. （ W. Durant ）',
            image: require('@/assets/frontend.jpg')
        }, {
            type: 'backend',
            name: i18n.t('lang.backend'),
            desc: 'If you do not learn to think when you are young, you may never learn. （ Edison ）',
            image: require('@/assets/backend.jpg')
        }, {
            type: 'app',
            name: 'APP',
            desc: 'Do not, for one repulse, forgo the purpose that you resolved to effort. （ Shakespeare ）',
            image: require('@/assets/app.jpg')
        }, {
            type: 'promote',
            name: i18n.t('lang.promote'),
            desc: 'Just the recommend ~',
            image: require('@/assets/promote.jpg')
        }]
    },
    getters: {
        getCategory(state) {
            return state.category
        },
        getCategoryType(state) {
            let categoryType = {}
            _.forEach(state.category, (item) => {
                categoryType[item.type] = item.name
            })
            return categoryType
        }
    }
})
