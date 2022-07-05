// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入用户信息的处理函数模块
const login_handler = require('../router_handler/user')

// 注册
router.post('/reguser', login_handler.reguser)
// 登录
router.post('/login', login_handler.login)

// 向外共享路由对象
module.exports = router
