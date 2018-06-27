
##### 0627
误删除后
[参考连接1](https://www.cnblogs.com/exmyth/p/6213129.html)  

> 过程  

git apply的时候错运行了git drop  
此时命令行会提示 删了的id  
执行git show id可以查看id详情  
执行git merge 可以恢复误删的stash  
但是好像默认恢复+commit了。。。  

/////////////////  

[Git 储藏](https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E5%82%A8%E8%97%8F%EF%BC%88Stashing%EF%BC%89)

```
git status

git stash

git stash list

git stash apply

git stash drop

git stash clear  //清除所有
git stash drop <stash@{id}>  // 如果不加stash编号，默认的就是删除最新的

```
> 你也可以运行 git stash pop 来重新应用储藏，同时立刻将其从堆栈中移走。