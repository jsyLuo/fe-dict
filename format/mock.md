[官网链接](http://mockjs.com/examples.html)


> 引用数组
```
'questions|5': [
    {
        'options|2-4': [
        '@csentence(2, 8)'
        ],
        'item': function() { return this.options[0]; }
    }
]
```

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

> 同事例子

```
{
  "data": function() {
    var error="未找到"+"@GET['type']"+"对应的mock数据";
  	var data={
      "struts2": {
        "id": "evt_brain_strutsshwa_20180101@brain_strutsshwa@est_112.65.252.68_etrade.bocifunds.com_1526467823511",
    		"unitName":"上海科技成果转化促进会网",
        "siteName":"中银国际证券基金网上交易登录",
        "domain":"etrade.bocifunds.com",
        "incName":"安恒",
        "url":"https://etrade.bocifunds.com/etrading/",
        "findTime":"2017-03-01 19:45:55",
        "region":"上海市",
        "protocol":"https"
      },
      "webshell": {
        "id": "evt_brain_strutsshwa_20180101@brain_strutsshwa@est_112.65.252.68_etrade.bocifunds.com_1526467823511",
        "fondTime": "2018-08-31 @time",
        "unitName":"上海科技成果转化促进会网",
        "siteName": "网站名称",
        "url": "@url",
        "targetUrl": "https://etrade.bocifunds.com/etrading/",
        "targetIp": "192.168.3.*",
        "targetRegion": "目的区域",
        "type": "类型",
        "level": "等级",
        "tamperTime":"2017-03-01 19:45:55",
        "fondFirm": "发现厂商",
        "featureNum": 10,
        "scanObj":"http://www.tt91.com/ghgy/gunfead.asp",
        "desc":"上海科技成果转化促进会网站存在严重安全隐患",
        "clientVersions":"1.0.1.0",
        "mainframe":"LAPTOP-RKELLPC3"
      }
    }  
    return data["@GET['type']"] || error
  }
}
```