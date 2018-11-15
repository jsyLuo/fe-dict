[参考](http://yijiebuyi.com/blog/5b55eb51ad49ce41e2de9c85dd4513ca.html)

报错
```
error: You have not concluded your merge (MERGE_HEAD exists).  
hint: Please, commit your changes before merging.  
fatal: Exiting because of unfinished merge.  
```

### 解决方法如下：

保留你本地的修改
```
git merge --abort

git reset --merge
```

合并后记得一定要提交这个本地的合并

然后再获取线上仓库

`git pull`