> 正则验证格式

  ```
    // 默认网关 ipv4
  ipv4: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
  // 默认网关ipv6
  ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
  
  ```
> ipv4之前后台给了一个计算方法比较ipv4起始ip和结束ip
支持*，可以4个*，如*.*.*.* ，当支持*时候，左边*相当于0，右边*相当于255
左边小于等于右边
郑云超*256   胡涛涛乘以255  

```
    let calTotal = (value) => {
      let ip = value.split('.')
      let a = parseInt(ip[0])
      let b = parseInt(ip[1])
      let c = parseInt(ip[2])
      let d = parseInt(ip[3])
      return a * 255 * 255 * 255 + b * 255 * 255 + c * 255 + d
    }

    let checkIp = (rule, value, callback) => {
      let regIp = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/
      if (value.indexOf('-') > 0) {
        let IPV = value.split('-')
        let beginIp = IPV[0]
        let endIp = IPV[1]
        if (!regIp.test(beginIp) || !regIp.test(endIp)) {
          callback(new Error('IP格式不正确'))
        } else if (calTotal(beginIp) > calTotal(endIp)) {
          callback(new Error('起始IP格式不能大于结束IP'))
        } else { callback() }
      } else {
        if (value && !regIp.test(value)) {
          callback(new Error('IP格式不正确'))
        } else {
          callback()
        }
      }
    }
```

> ipv6相关的一些问题  

[网易博客 - IPv6 大小的比较逐个字符](http://iamkiss.blog.163.com/blog/static/6175443201361725552606/)  

[CSDN - 2个String(其实是IPv6地址)如何进行大小比较](https://bbs.csdn.net/topics/250061756)  
[stack overflow- IPv6 as a comparable JavaScript string?](https://stackoverflow.com/questions/30329991/ipv6-as-a-comparable-javascript-string) 
[sg- me ask question about ipv6 compare](https://segmentfault.com/q/1010000016633162?_ea=4695211)  
[myself github code check](https://github.com/pangniur/sth-little/blob/master/singleFile/ipv6.html)

> 他们说

```
npm 上有个叫 pad-ipv6 的包
ipv4就是分割每个元素，然后parseInt这样比大小的吧,没必要乘以255了

```
问: 两个字符串的ascii比较，，是不是按顺序，从第一位比到最后一位?    
答： 是的  如 '2' > '10'  true
```



