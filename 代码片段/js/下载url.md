#### question
window.open打不开网址   
百度之后发现是被浏览器拦截了  

解决办法是  
使用a标签href替代window.open的方法
[csdn博客](https://blog.csdn.net/weixiaoonline/article/details/54924919)
[csdn帖子](https://bbs.csdn.net/topics/390529358)
```
<body>
    <button onclick="func()">jump to baidu</button>
</body>
<script>
    function func() {
        var url = 'http://www.baidu.com'
        window.open(url)
        var a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        a.parentNode.removeChild(a);
    }
</script>
```


 
#### 同事源版本
```
/**
 * @description 下载插件，传入Promise后，符合数据格式自动打开页面下载，数据格式{data:{url}}
 */
import http from '@/config/http'
import regexp from '@/utils/_regexp'
import {Loading, Notification} from 'cut-ui'

export default {
  install: (Vue, options) => {
    Vue.prototype.$dw = async (promise) => {
      let loading = Loading.service({fullscreen: true, text: '拼命下载中...'})
      let form = ''
      form = document.getElementById('download-private-id')
      if (!form) {
        form = document.createElement('form')
        form.setAttribute('id', 'download-private-id')
        document.body.appendChild(form)
      }
      let {error_code: errorCode, message, data: {url}} = await promise
      setTimeout(() => { loading.close() }, 1000)
      if (errorCode === undefined || errorCode === 200) {
        if (url && !(new RegExp(regexp.url)).test(url)) {
          url = url.substr(0, 1) === '/' ? url.substr(1, url.length - 1) : url
          url = http.baseURL + url
        }
        form.setAttribute('action', url)
        form.setAttribute('method', 'post')
        form.submit()
        return true
      }
      Notification.error({title: '错误', message: message, duration: 5000})
    }
  }
}

```