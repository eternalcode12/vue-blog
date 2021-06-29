import config from '../config/config'

// 订阅
export function getSubscribe(data) {
  return config({
    url: '/email/subscribe',
    method: 'post',
    data
  })
}

// 获取博客信息
export function getBlogContent(username) {
  return config({
    url: `/blog/${username}`,
    method: 'get'
  })
}
