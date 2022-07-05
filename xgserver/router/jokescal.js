// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入用户信息的处理函数模块
const jokescal_handler = require('../router_handler/jokescal')

// 获取用户的基本信息
router.get('/jockes/dzcalendar', jokescal_handler.getJokescalList)
router.post('/jockes/adddzcalendar', jokescal_handler.addJokescalList)
router.put('/jockes/editdzcalendar', jokescal_handler.editJokescalList)
router.delete('/jockes/deldzcalendar/:id', jokescal_handler.delJokescalList)

// 向外共享路由对象
module.exports = router
