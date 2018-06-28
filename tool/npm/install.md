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