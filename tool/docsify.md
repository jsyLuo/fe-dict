> 一个神奇的文档网站生成工具

使用 [官网](https://docsify.js.org/#/zh-cn/)
```
npm i docsify-cli -g
docsify init ./docs   // 必须加路径，初始化当前路径  docsify init ./
docsify serve docs  

After the init is complete, you can see the file list in the ./docs subdirectory.

index.html as the entry file
README.md as the home page
.nojekyll prevents GitHub Pages from ignoring files that begin with an underscore
You can easily update the documentation in ./docs/README.md
```



假设你的目录结构如下：
```
-| docs/
  -| README.md
  -| guide.md
  -| zh-cn/
    -| README.md
    -| guide.md
```
那么对应的访问页面将是  
```
docs/README.md        => http://domain.com
docs/guide.md         => http://domain.com/guide
docs/zh-cn/README.md  => http://domain.com/zh-cn/
docs/zh-cn/guide.md   => http://domain.com/zh-cn/guide
```
_sidebar.md 文件，内容如下
```
* [Home](/)
* [Guide](guide.md)

* [首页](zh-cn/)
* [指南](zh-cn/guide)
```
访问 http://localhost:3000


### tips

```
* 链接
  * [常用链接](link/link1.md)

* [熟人链接](link/they.md)   // link1.md包含同级目录
                            // 这样写才能docsify识别路由
```