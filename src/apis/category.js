// 引入axios
import axios from '@/utils/myaxios.js'

export const getPostList = (params) => {
  return axios({
    method: 'get',
    url: '/post',
    params
  })
}
