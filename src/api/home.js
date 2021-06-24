import config from '../config/config'

export function getTest() {
  return config({
    url: '/user/findAllUser',
    method: 'get'
  })
}
