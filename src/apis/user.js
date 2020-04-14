// 引入axios
import axios from '@/utils/myaxios.js'

// 用户登录
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
