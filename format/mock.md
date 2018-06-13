[官网链接](http://mockjs.com/examples.html)

> 数组

```
    "list|5-20": [
      {
      "ip":"@ip",
      "date": "@datetime",
      "lessUser": "@cname",
      "id": "@string(1,10)",
      "total": "@natural(50,500)",
      "group_id|1": ["11","22","33","44","55"],
       "aaa|1-2": true,
       "bbb|1": true

      }]
  "data|5": [
    {
      "status|+1": [0,1,2], 
      "bind": 1,
      "enable|1": [0,1],
      "status|1": [0,1],
      "status|12": ["@integer(1, 2)"],
      "offline_nums|6": ["@integer(0, 100)"],
      "alarm_nums|6": ["@integer(0, 100)"],
      "name|+1": ["WEB","BBS","SCD","WSV","BBC","<input>","<script>alert(1)</script>"]
    }
  ]
```

## 说明
```
属性值是布尔型 Boolean
'name|1': boolean

随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。

'name|min-max': value

随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。
```