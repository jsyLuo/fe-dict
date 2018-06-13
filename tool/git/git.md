

### 阮一峰git
[git工作流程](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html) &nbsp; 
[git规范流程](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)  &nbsp;
[git常用命令](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)  
[git远程操作](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)  &nbsp;
[git分支管理策略](http://www.ruanyifeng.com/blog/2012/07/git.html)  


#### git命令

$ git clone https://github.com/pangniur/sth-little

git remote -v
$ git add helo.html
$ git commit -m "first use"
git push origin master //提交

git pull  //拉取最新

 git rm -rf extracts
 git commit -m 'delete'
 git push -f origin master  //如果有冲突 加上-f选项


//other
git remote -help
git remote remove fanfan


### 0330
`
git pull  
git add .  
git commit -m 'well'  
git push origin   

`


### 本地建好仓库后，，关联远程的
### remote origin already exists 错误解决办法

1、先删除远程 Git 仓库

$ git remote rm origin

2、再添加远程 Git 仓库

$ git remote add origin git@github.com:FBing/java-code-generator

 git remote add origin https://github.com/pangniur/test-rep.git


 git add -A：将文件的修改，文件的删除，文件的新建，添加到暂存区。
git commit -a

