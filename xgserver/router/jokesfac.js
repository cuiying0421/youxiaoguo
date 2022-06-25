// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入用户信息的处理函数模块
const jokesfac_handler = require('../router_handler/jokesfac')

// 获取用户的基本信息
router.get('/jockes/factorys', jokesfac_handler.getJokesfacList)

// 向外共享路由对象
module.exports = router
