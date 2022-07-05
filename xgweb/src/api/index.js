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
  /* headers: {
    'Content-Type': 'multipart/form-data'
  }, */
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
export const getJokesfacAPI = ({ query, pagenum, pagesize }) => request({
  url: '/my/jockes/factorys',
  method: 'GET',
  params: {
    query,
    pagenum,
    pagesize
  }
})

// 段子工厂 - 增加数据
export const addJokesfacAPI = (data) => request({
  url: '/my/jockes/addfactorys',
  method: 'POST',
  data
})

// 段子工厂 - 修改数据
export const editJokesfacAPI = (data) => request({
  url: '/my/jockes/editfactorys',
  method: 'PUT',
  data
})

// 段子工厂 - 删除数据
export const delJokesfacAPI = (id) => request({
  url: `/my/jockes/delfactorys/${id}`,
  method: 'DELETE'
})

// 段子日历 - 获取列表
export const getJokescalAPI = ({ query, pagenum, pagesize }) => request({
  url: '/my/jockes/dzcalendar',
  method: 'GET',
  params: {
    query,
    pagenum,
    pagesize
  }
})

// 段子日历 - 增加
export const addJokescalAPI = (data) => request({
  url: '/my/jockes/adddzcalendar',
  method: 'POST',
  data
})

// 段子日历 - 编辑
export const editJokescalAPI = (data) => request({
  url: '/my/jockes/editdzcalendar',
  method: 'PUT',
  data
})

// 段子日历 - 删除
export const delJokescalAPI = (id) => request({
  url: `/my/jockes/deldzcalendar/${id}`,
  method: 'DELETE'
})

// 训练营 - 获取列表
export const getTraincampAPI = ({ query, pagenum, pagesize }) => request({
  url: '/my/camps',
  method: 'GET',
  params: {
    query,
    pagenum,
    pagesize
  }
})

// 训练营 - 增加
export const addTraincampAPI = (data) => request({
  url: '/my/camp/addcamp',
  method: 'POST',
  data
})

// 训练营 - 编辑
export const editTraincampAPI = (data) => request({
  url: '/my/camp/editcamp',
  method: 'PUT',
  data
})

// 训练营 - 删除
export const delTraincampAPI = (id) => request({
  url: `/my/camp/delcamp/${id}`,
  method: 'DELETE'
})
