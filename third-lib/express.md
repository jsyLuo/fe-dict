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

### 四、监视工具1
`cnpm install -g supervisor`
```
  "scripts": {
    "start": "node ./bin/www",
    "mystart": "supervisor ./bin/www"
  },
```
`supervisor ./bin/www`

### 五、监视工具2
1、`npm install -g nodemon`  

[参考](https://blog.csdn.net/godha/article/details/17300293)
> 在doc下输入上面的，就安装成功了，以后我们启动我们的项目的时候，就输入nodemon server.js    

>以前是node server.js  
这样，每次我们的js文件修改后，node就会自动重启，就省的我们手动去重启了，这样方便了很多。

>PS:
```
还有注意一下，这里有一个坑：我一直使用下面的方法启动node: node 

这样启动是没有问题的，因为环境变量中配置了node了嘛，但是如果nodemon d:/js/node/app.js

这样nodemon监视的是启动目录，而不是d:/js/node这个目录，比如 c:\program>nodemon d:/js/node/app.js
他实际上监视的是c:\program这个目录，你需要修改启动目录里才可以。
```





