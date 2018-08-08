import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { Message, MessageBox } from 'cut-ui'
import qs from 'qs'
import { http as config, router as routerConfig } from '@/config'
import { getToken, setUrlToken, removeToken } from '@/utils/_auth'
import { getLang } from '@/utils/_locale'
import { inject } from '@/utils/_string'

// 指定状态码跳转页面
const redirectPageCodes = routerConfig.redirectPageCodes || {}
const errorPageCode = routerConfig.errorPageCode || []

// 请求超时时长
axios.defaults.timeout = config.timeout
// 请求头设置
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = config.baseURL
// 超时后轮询配置
axios.defaults.retry = config.retry
axios.defaults.retryDelay = config.retryDelay

// 错误信息显示时间
const messageDuration = config.messageDuration

// 错误提示 页面
function showErrorPage (statue, data) {
  if (data) {
    data.type = statue
    const logout = data && data.data ? data.data.logout : false
    // 清空token
    if (logout) removeToken()
  }
  router.push({ name: 'error', params: data })
}
// 错误提示 信息条
function showErrorToast (errmsg) {
  Message({
    showClose: true,
    message: errmsg,
    type: 'error',
    duration: messageDuration
  })
}
// 错误提示 信息窗
function showErrorDialog (status, data) {
  const message = data ? data.message : ''
  const next = data && data.data ? data.data.next : ''
  const nextPath = data && data.data ? data.data.next_path : ''
  const logout = data && data.data ? data.data.logout : false
  function process() {
    if (logout) removeToken()
    if (next) window.location.href = next
    if (nextPath) router.push({path: nextPath})
  }
  // 对话框
  MessageBox(message, '提示', {
    confirmButtonText: '确定',
    type: 'warning'
  }).then(() => {
    // 跳转页面
    process()
  }).catch(() => {})
}
// 错误提示 直接跳转
function showErrorRedirect (status, data) {
  const message = data ? data.message : ''
  const next = data && data.data ? data.data.next : ''
  const nextPath = data && data.data ? data.data.next_path : ''
  const logout = data && data.data ? data.data.logout : false
  function process() {
    if (logout) removeToken()
    if (next) window.location.href = next
    if (nextPath) router.push({path: nextPath})
  }
  // 提示信息
  showErrorToast(message)
  // 跳转页面
  setTimeout(process, 2000)
}

// 每次重载页面后 尝试从url中更新token
setUrlToken()
// request拦截器 这里可以添加请求发起后的操作
axios.interceptors.request.use((cfg) => {
  // 动态设置每个请求的token参数
  cfg.headers['Authorization'] = 'Bearer ' + getToken()
  // 动态设置每个请求的语言参数
  cfg.headers['Accept-Language'] = getLang()
  // 参数序列化相关处理
  if (config.requestStringify && ['post', 'put', 'patch'].includes(cfg.method)) {
    cfg.data = qs.stringify(cfg.data)
  }
  return cfg
}, (error) => {
  // 请求错误处理
  console.warn('错误的请求参数')
  console.error(error)
  return Promise.reject(error)
})

// respone拦截器 这里可以添加请求结束后的操作
axios.interceptors.response.use((response) => {
  // 录制进行时 && 非录制请求本身时
  if (store.state.recordGoing && response.request.responseURL.indexOf('/record/result') === -1) {
    // 请求录制结果
    store.dispatch('updateRecordUpdated')
  }
  // 如自定义code来标示请求状态，当code返回401为权限有问题，登出并返回到登录页
  // 如通过xmlhttprequest 状态码标识 逻辑需写在下面error中

  if (response.status >= 200 && response.status < 300) {
    // 请求成功
    return response.data
  } else if (errorPageCode.includes(response.status)) {
    // 未认证 提示
    showErrorPage(response.status, response.data)
  } else if (redirectPageCodes[response.status]) {
    // 去指定页面
    router.push(redirectPageCodes[response.status])
  } else {
    // error 提示
    Message({
      showClose: true,
      message: response.data || response.statusText,
      type: 'error',
      duration: messageDuration
    })
  }
  // 异常处理 后端抛出的错误
  // console.warn(response.status + ' ' + response.statusText + ' for ' + response.config.url)
  return Promise.reject(response)
}, (error) => {
  if (error.response) {
    // 状态码处理
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (['page'].includes(error.response.data.error_type)) {
      // 提示页面
      showErrorPage(error.response.status, error.response.data)
    } else if (['toast'].includes(error.response.data.error_type)) {
      // 提示消息
      showErrorToast(error.response.data.message || error.message)
    } else if (['dialog'].includes(error.response.data.error_type)) {
      // 提示窗口
      showErrorDialog(error.response.status, error.response.data)
    } else if (['redirect'].includes(error.response.data.error_type)) {
      // 直接跳转
      showErrorRedirect(error.response.status, error.response.data)
    } else if (errorPageCode.includes(error.response.status)) {
      // 提示页面
      showErrorPage(error.response.status, error.response.data)
    } else if (redirectPageCodes[error.response.status]) {
      // 去指定页面
      router.push(redirectPageCodes[error.response.status])
    } else {
      // 提示消息
      showErrorToast(error.response.data.message || error.message)
    }
  } else if (error.request) {
    // 超时处理
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request)
    let config = error.config
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(error)

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0

    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
      // Reject with the error
      return Promise.reject(error)
    }

    // Increase the retry count
    config.__retryCount += 1

    // Create new promise to handle exponential backoff
    let backoff = new Promise(function(resolve) {
      setTimeout(function() {
        resolve()
      }, config.retryDelay || 1)
    })

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function() {
      return axios(config)
    })
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
  }
  console.log(error.config)
  return Promise.reject(error)
})

// 封装实现 api路径的变量注入
const fetch = function (_api) {
  // 特别参数用于获取统一的 axios对象 方便操作 例如生成cancelToken
  if (_api === 'getCutAxios') {
    let cToken = axios.CancelToken
    let cancelToken = cToken.source()
    return cancelToken
  }
  // 向url路径中注入参数
  if (_api.pathData) {
    _api.url = inject(_api.url, _api.pathData)
    delete _api.pathData
  }
  // 根据method将data参数分为params或data传参
  if (_api.data && ['GET', 'DELETE'].includes(_api.method.toUpperCase())) {
    if (_api.params) {
      Object.assign(_api.params, _api.data)
    } else {
      _api.params = _api.data
    }
    delete _api.data
  }
  // 发起实际请求
  return axios(_api)
}

export default function (Vue) {
  return !Vue ? fetch : (Vue.prototype.$http = fetch)
}
