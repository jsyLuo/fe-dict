> vue的模版中没有根节点  

```
<template />
error  The template root requires exactly one element  vue/valid-template-root
```

> prop属性没有默认类型和默认值  

```
  props: {
    type: [String],
    sourceId: [Number, String],
    error_code: {
      type: Number
    }
  }

error  Prop 'type' requires default value to be set      vue/require-default-prop
error  Prop 'sourceId' requires default value to be set  vue/require-default-prop
```
