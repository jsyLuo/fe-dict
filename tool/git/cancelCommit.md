[csdn blog](https://www.cnblogs.com/lyy-2016/p/6509707.html)


> git log  查看git提交记录，包括commit的hashid

1.第一种情况：还没有push，只是在本地commit
git reset --soft  commit_id

* 举例说明  

  依次commit了  a 和 b  
  只提交了本地，想取消commit b，  
  git reset --soft  commit_b_id
 
2.第二种情况commit push 代码已经更新到远程仓库
git revert commit_id



