import axios from 'axios'
import qs from 'qs'
import {Message, Loading} from 'element-ui'
import i18n from '@/locales'

// 设置后端api路径
axios.defaults.baseURL = 'https://gank.io/api/v2'
axios.defaults.timeout = 5 * 100000
// 设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
var loadingInstance

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
    config => {
        loadingInstance = Loading.service({
            lock: true,
            text: i18n.t('lang.ladingData'),
            spinner: 'el-icon-loading',
        })
        return config
    }, err => {
        loadingInstance.close()
        Message.error(i18n.t('lang.requestError'))
        return Promise.reject(err)
})

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(res => {
    if (res.data.status === 100) {
        loadingInstance.close()
        return res
    } else {
        if (res.data.code) {
            loadingInstance.close()
            Message.error(res.data.msg)
        }
    }
}, err => {
    loadingInstance.close()
    Message.error(i18n.t('lang.requestFailed'))
    return Promise.reject(err)
})

// 发送请求
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, qs.stringify(params))
            .then(
                res => {
                    resolve(res.data)
                },
                err => {
                    reject(err.data)
                }
            )
            .catch(err => {
                reject(err.data)
            })
    })
}

export function fetchGet(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}

export default axios
