import config from '../config/config'

export function sendMsg(data) {
  return config({
    url: '/email/sendMsg',
    method: 'post',
    data
  })
}
