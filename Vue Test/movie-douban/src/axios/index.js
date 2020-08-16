import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";

// 备份key 0df993c66c0c636e29ecbb5344252a
const APIKEY = "0b2bdeda43b5688921839c8ecb20399b";

axios.interceptors.request.use(
  config => {
    // loading
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  }
);

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (
    response &&
    (response.status === 200 ||
      response.status === 304 ||
      response.status === 400)
  ) {
    return response;
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: 404,
    msg: "网络异常"
  };
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === 404) {
    Message.error(res.msg);
  }
  if (res.data && !res.data.success) {
    Message.error(res.data.error_msg);
  }
  return res;
}

function getParams(data) {
  return Object.assign(data, { apikey: APIKEY });
}

export default {
  post(url, data) {
    return axios({
      method: "post",
      baseURL: "https://api.douban.com/v2/movie",
      url,
      data: qs.stringify(getParams(data)),
      timeout: 10000,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
      .then(response => {
        return checkStatus(response);
      })
      .then(res => {
        return checkCode(res);
      });
  },
  get(url, params) {
    return axios({
      method: "get",
      baseURL: "https://api.douban.com/v2/movie",
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(response => {
        return checkStatus(response);
      })
      .then(res => {
        return checkCode(res);
      });
  }
};
