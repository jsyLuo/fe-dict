[express 官网中文](http://expressjs.com/en/guide/routing.html)

[express 菜鸟教程](http://www.runoob.com/nodejs/nodejs-express-framework.html)
### 一、

* 通过 npm init 命令为你的应用创建一个 package.json 文件
* 安装 Express 并将其保存到依赖列表中  

  `$npm install express --save`

* 如果只是临时安装 Express，不想将它添加到依赖列表中，只需略去 --save 参数即可：  
`$npm install express`

### 二、

通过应用生成器工具 express 可以快速创建一个应用的骨架。
`$ npm install express-generator -g`

在当前工作目录下创建一个命名为 myapp 的应用：
`$ express myapp`

### 三、
提示：所谓的后台接口，就是通过express建立路由

### 四、
`cnpm install -g supervisor`
```
  "scripts": {
    "start": "node ./bin/www",
    "mystart": "supervisor ./bin/www"
  },
```
`supervisor ./bin/www`

