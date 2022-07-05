// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入用户信息的处理函数模块
const jokesfac_handler = require('../router_handler/jokesfac')

// 获取 段子工厂 的基本信息
router.get('/jockes/factorys', jokesfac_handler.getJokesfacList)
// 增加 段子工厂 的基本信息
router.post('/jockes/addfactorys', jokesfac_handler.addJokesfac)
// 修改 段子工厂 的基本信息
router.put('/jockes/editfactorys', jokesfac_handler.editJokesfac)
// 删除 段子工厂 的基本信息
router.delete('/jockes/delfactorys/:id', jokesfac_handler.delJokesfac)

// 向外共享路由对象
module.exports = router
