[npm-install-wont-install-devdependencies| stackoverflow](https://stackoverflow.com/questions/34700610/npm-install-wont-install-devdependencies)



#### 官网
[install文档链接](https://docs.npmjs.com/cli/install)
>Install the dependencies in the local node_modules folder.
By default, **npm install**  will install all modules listed as dependencies in package.json.



#### blog 
[npm package.json中的dependencies和devDependencies的区别](https://www.cnblogs.com/jes_shaw/p/4497836.html)
一个node package有两种依赖，一种是dependencies一种是devDependencies，其中前者依赖的项该是正常运行该包时所需要的依赖项，而后者则是开发的时候需要的依赖项，像一些进行单元测试之类的包。

如果你将包下载下来在包的根目录里运行

npm install 
默认会安装两种依赖，如果你只是单纯的使用这个包而不需要进行一些改动测试之类的，可以使用

npm install --production
只安装dependencies而不安装devDependencies。

如果你是通过以下命令进行安装

npm install packagename
那么只会安装dependencies，如果想要安装devDependencies，需要输入

npm install packagename --dev  

#### 帖子1
[npm 安装参数中的 --save-dev 是什么意思](https://segmentfault.com/q/1010000000403629)

>当你为你的模块安装一个依赖模块时，正常情况下你得先安装他们（在模块根目录下npm install module-name），然后连同版本号手动将他们添加到模块配置文件package.json中的依赖里（dependencies）。

> -save和save-dev可以省掉你手动修改package.json文件的步骤。
spm install module-name -save 自动把模块和版本号添加到dependencies部分
spm install module-name -save-dve 自动把模块和版本号添加到devdependencies部分

>至于配置文件区分这俩部分， 是用于区别开发依赖模块和产品依赖模块， 以我见过的情况来看 devDepandencies主要是配置测试框架， 例如jshint、mocha。

#### 帖子2
[npm 的 --save 和 --save-dev 有什么区别？](https://segmentfault.com/q/1010000009821306)



> --save-dev 是作为开发依赖保存到 packsge.json 中的 devDependencies 中，即在开发环境中用到的依赖，如 webpack、babel 等用于开发打包的依赖，只是在执行打包时才会用到，开发的代码中并不包含这些依赖

> --save 安装的则是需要在你开发的代码中用到的依赖，如 vue，你需要 import Vue from vue。