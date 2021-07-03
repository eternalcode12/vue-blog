import axios from 'axios'

// 基本的配置信息
const service = axios.create({
  timeout: 5000,
  baseURL: 'http://10.10.10.172:3000/api' // 接口地址
  // baseURL: 'http://192.168.31.36:3000/api'
  // baseURL: 'http://localhost:3000/api'
})

service.interceptors.request.use(
  config => {
    const Authorization = sessionStorage.getItem('Authorization')
    // 设置默认请求头
    config.headers = {
      'Content-Type': 'application/json'
    }
    // 判断是否存在 token
    if (Authorization) {
      config.headers.Authorization = 'Bearer ' + Authorization
    }

    return config
  },
  err => {
    console.log(err)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // debugger
    if (error && error.response) {

    }
    return Promise.reject(error)
  }
)

export default service
