// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入 开放麦 的处理函数模块
const openmic_handler = require('../router_handler/openmic')

// 获取 开放麦的基本信息
router.get('/jockes/clubs', openmic_handler.getOpenmicList)
// 增加 开放麦的基本信息
router.post('/jockes/addclub', openmic_handler.addOpenmic)
// 修改 开放麦的基本信息
router.put('/jockes/editclub', openmic_handler.editOpenmic)
// 删除 开放麦的基本信息
router.delete('/jockes/delclub/:id', openmic_handler.delOpenmic)

// 向外共享路由对象
module.exports = router
