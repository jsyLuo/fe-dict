### 方式一

> storage.js

```
export default {
  useSessionStorage: [
    'settings'
  ]
}
```

> 使用

```
import { global as globalConfig, storage as storageConfig } from '@/config'
sessionKeys: storageConfig.useSessionStorage || [],
```

### 方式二
>option.js
```
export var alarmLine = {
  color: ['rgb(120, 106, 255)', 'rgb(120, 189, 240)'],
  grid: {
    left: '50px',
    right: '50px'
  }
}
```

```
import { alarmLine } from './chart-options'
this.options = alarmLine
```

