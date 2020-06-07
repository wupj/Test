import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const locales = {
    zh: require('./zh.json'),
    en: require('./en.json'),
}
const i18n = new VueI18n({
    locale: sessionStorage.getItem('language') || 'zh',
    messages: locales
})

export const setup = lang => {
    if (lang === undefined) {
        lang = sessionStorage.getItem('language')
        if (locales[lang] === undefined) {
            lang = 'zh'
        }
    }
    sessionStorage.setItem('language', lang)

    Object.keys(locales).forEach(lang => {
        document.body.classList.remove(`lang-${lang}`)
    })
    document.body.classList.add(`lang-${lang}`)
    document.body.setAttribute('lang', lang)
    Vue.config.lang = lang
    i18n.locale = lang
}

setup()

window.i18n = i18n
export default i18n
