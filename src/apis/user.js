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

// 根据ID来获取用户数据
export const userInfo = (id) => {
  return axios({
    method: 'get',
    url: `/user/${id}`
  })
}
