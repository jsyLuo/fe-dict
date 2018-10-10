> first axios.js
```
import { realRecord } from '@/api/record'
import _ls from '@/utils/_ls'

  // 如通过xmlhttprequest 状态码标识 逻辑需写在下面error中

  if (response.status >= 200 && response.status < 300) {
    // 请求成功

    // if is recording then get record num
    if (response.request.responseURL.indexOf('getRectemplate') === -1) {  // 不是自己才请求
      const isRecording = _ls.get('isRecording')
      if (isRecording) {
        // getRealRecordNum()
        realRecord({id: 3389}).then((res) => {
          console.log(res)
        })
      }
    }

    return response.data
  } 
```
> record.js
```
import axios from 'axios'
import qs from 'qs'
import { http as config } from '@/config'
import { getToken } from '@/utils/_auth'
import { getLang } from '@/utils/_locale'
import { inject } from '@/utils/_string'

// 请求超时时长
axios.defaults.timeout = config.timeout
// 请求头设置
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = config.baseURL
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
  return new axios(_api)
}

export function realRecord (data) {
  return fetch({
    url: '/rec/getRectemplate',
    method: 'get',
    data
  })
}
// 是否正在录制
export function isRecording() {
  return fetch({
    url: '/rec/isRectemplate',
    method: 'get'
  })
}

```

> main.vue
```
      let statusObj = await isRecording()
      if (statusObj.data > 0) {
        _ls.set('isRecording', true)
        // this.$store.dispatch('record/setRecordStatus', true)
      } else {
        _ls.set('isRecording', false)
        // this.$store.dispatch('record/setRecordStatus', false)
      }
```