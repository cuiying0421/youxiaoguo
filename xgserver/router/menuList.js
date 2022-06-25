// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入用户信息的处理函数模块
const menulist_handler = require('../router_handler/menulist')

// 获取用户的基本信息
router.get('/menulist', menulist_handler.getMenuList)

// 向外共享路由对象
module.exports = router
