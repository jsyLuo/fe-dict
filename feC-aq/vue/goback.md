```
/permissions

/permissions/:page_id	
```


```

handleBackBtnClick () {
      let _routeName = this.$route.name
      let _index = this.$route.matched.findIndex((item) => item.name === _routeName)
      if (_index > 0) {
        let _next = this.$route.matched[_index - 1]
        this.$router.push(_next)
      }

```