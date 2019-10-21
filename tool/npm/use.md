### 20191021

[mylink](http://dhjy.site/tools/npm.html)

```
1. 本地安装node
        > node -v
        v 10.16.0
    2. 全局安装cnpm
        > npm install -g cnpm --registry=https://registry.npm.taobao.org
    3. 全局安装@vue-cli
        > cnpm install -g @vue/cli
        > vue --version
        @vue.cli 4.0.3
    4. 创建app01
        > vue create app01
    5. 安装依赖
        > cd app01
        // 安装axios qs
        > cnpm install axios qs --save
        // 安装element
        > vue add element
```

#### 1228

npm 查看本地安装的包版本号

```
 npm ls <packageName>        // 本地包
 npm ls <packageName> -g     // 全局安装包

 ~a.b.c :    取最新的c的版本号值，a与b保持不变
 ^a.b.c :    取b和c均为最新版本号，a保持不变
```

#### before

- npm init 命令为你的应用创建一个 package.json 文件

- npm install 命令可自动安装依赖列表中所列出的所有模块,包括代码依赖和辅助依赖。

- npm install grunt # 本地安装

- npm install -g grunt-cli # 全局安装

- npm uninstall vuex
  npm install vuex@0.6.1 --save

- npm list cut-ui // 查看版本号

- npm ls cut-ui //查看版本号
