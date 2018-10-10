[js中toFixed精度问题的解决办法](https://www.jianshu.com/p/849b0ae36b36)
四舍五入并不是真正的四舍五入  
计算机二进制编码导致的精度问题
```
console.log(2.115 * 100) // 211.50000000000003
console.log(2.0115 * 1000) // 2011.4999999999998
0.29* 100  // 28.999999999999996
```

[为什么(2.55).toFixed(1)等于2.5？从v8角度技术分析](https://www.cnblogs.com/zhangycun/p/7880580.html)
