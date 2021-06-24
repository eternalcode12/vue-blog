import config from '../config/config'

export function getSubscribe(data) {
  return config({
    url: '/email/subscribe',
    method: 'post',
    data
  })
}
