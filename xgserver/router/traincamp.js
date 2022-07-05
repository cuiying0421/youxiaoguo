// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入用户信息的处理函数模块
const traincamp_handler = require('../router_handler/traincamp')

// 获取用户的基本信息
router.get('/camps', traincamp_handler.getTrainList)
router.post('/camp/addcamp', traincamp_handler.addTrain)
router.put('/camp/editcamp', traincamp_handler.editTrain)
router.delete('/camp/delcamp/:id', traincamp_handler.delTrain)

// 向外共享路由对象
module.exports = router
