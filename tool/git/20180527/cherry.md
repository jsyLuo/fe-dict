[参考](https://www.cnblogs.com/DreamDrive/p/4157421.html)

> $ git cherrypick 

实际问题 
在本地 master 分支上做了一个commit ( 38361a68138140827b31b72f8bbfd88b3705d77a ) ， 如何把它放到 本地 old_cc 分支上？ 
办法之一： 使用 cherry-pick.  根据git 文档：
Apply the changes introduced by some existing commits 
就是对已经存在的commit 进行apply (可以理解为再次提交）
简单用法：  

`git cherry-pick <commit id>`  

例如：  
```
$ git checkout old_cc
$ git cherry-pick 38361a68
```
如果顺利，就会正常提交。结果：
```
Finished one cherry-pick.
# On branch old_cc
# Your branch is ahead of 'origin/old_cc' by 3 commits.
```

