```
import axios from '@/plugins/axios'
const _fetch = axios()
const fetch = (data) => {
  return _fetch(data).then(() => {
    if (data.url !== '/rec/getRectemplate') {
      realRecord(data)
    }
  })
}


```