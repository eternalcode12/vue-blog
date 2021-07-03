import config from '../config/config'

// 测试
export function getTest() {
  return config({
    url: '/user/findAllUser',
    method: 'get'
  })
}

// 登录
export function login(data) {
  return config({
    url: '/user/login',
    method: 'post',
    data
  })
}
