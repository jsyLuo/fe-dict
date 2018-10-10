import axios from '@/plugins/axios'

const fetch = axios()

// 获取节点组
export function getRecordResult (params) {
  return fetch({
    url: '/record/result',
    method: 'get',
    params: params
  })
}
