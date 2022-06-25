// 基于 axios 封装的请求模块
import ajax from 'axios'

const axios = ajax.create({
  // baseURL: 'http://127.0.0.1:4523/mock/884122',
  baseURL: 'http://localhost:8898',
  timeout: 2000
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
