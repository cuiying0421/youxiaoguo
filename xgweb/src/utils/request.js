// 基于 axios 封装的请求模块
import ajax from 'axios'
import { getToken } from '@/utils/token.js'

const axios = ajax.create({
  // baseURL: 'http://127.0.0.1:4523/mock/884122',
  baseURL: 'http://localhost:8898',
  timeout: 2000
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // ?. 可选链操作符, 如果前面对象里没有length, 整个表达式原地返回undefined
  // 如果getToken()在原地有值token字符串, 才能调用length获取长度
  if (getToken()?.length > 0 && config.headers.Authorization === undefined) {
    config.headers.Authorization = `${getToken('token')}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 导出自定义函数, 参数对象解构赋值
export default ({ url, method = 'GET', params, data, headers }) => {
  return axios({
    url: url,
    method: method,
    params: params,
    data: data,
    headers: headers
  })
}
