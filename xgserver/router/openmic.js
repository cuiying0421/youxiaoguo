// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()
// 导入 开放麦 的处理函数模块
const openmic_handler = require('../router_handler/openmic')

// 导入解析 formdata 格式表单数据的包
const multer = require('multer')
// 导入处理路径的核心模块
const path = require('path')

// 创建 multer 的实例对象，通过 dest 属性指定文件的存放路径
const upload = multer({ dest: path.join(__dirname, '../uploads') })

// 获取 开放麦 的基本信息
router.get('/clubs', openmic_handler.getOpenmicList)
// 增加 开放麦 的基本信息
router.post('/addclub', openmic_handler.addOpenmic)
// 修改 开放麦 的基本信息
router.put('/editclub', openmic_handler.editOpenmic)
// 删除 开放麦 的基本信息
router.delete('/delclub/:id', openmic_handler.delOpenmic)

// 向外共享路由对象
module.exports = router
