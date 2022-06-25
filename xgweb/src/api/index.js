import request from '@/utils/request'
// import Qs from 'qs'

export const loginAPI = ({ username, password }) => request({
  url: '/api/login',
  method: 'POST',
  data: {
    username,
    password
  }

})

//  测试
/* export const testAPI = () => request({
  url: '/jokebasecamp/club/data',
  method: 'get'
}) */

//  左侧菜单
export const menuListAPI = () => request({
  url: '/api/menulist',
  method: 'GET'
})

// 开放麦 - 获取列表
export const getClubAPI = ({ query, pagenum, pagesize }) => request({
  /* headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }, */
  url: '/my/jockes/clubs',
  method: 'GET',
  // data: Qs.stringify(data)
  params: {
    query,
    pagenum,
    pagesize
  }
})

// 开放麦 - 增加数据
export const addClubAPI = (data) => request({
  url: '/my/jockes/addclub',
  method: 'POST',
  data
})

// 开放麦 - 修改数据
export const editClubAPI = (data) => request({
  url: '/my/jockes/editclub',
  method: 'PUT',
  data
})

// 开放麦 - 删除数据
export const delClubAPI = (id) => request({
  url: `/my/jockes/delclub/${id}`,
  method: 'DELETE'
})

export const AddRolesAPI = ({ roleName, roleDesc }) => request({
  url: '/roles',
  method: 'POST',
  data: {
    roleName,
    roleDesc
  }
})

// 段子工厂 - 获取列表
export const getJokesfacAPI = () => request({
  url: '/my/jockes/factorys',
  method: 'GET'
})

// 段子日历 - 获取列表
export const getJokescalAPI = () => request({
  url: '/my/jockes/dzcalendar',
  method: 'GET'
})

// 训练营 - 获取列表
export const getTraincampAPI = () => request({
  url: '/my/camps',
  method: 'GET'
})
