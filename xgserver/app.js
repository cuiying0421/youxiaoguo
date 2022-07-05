// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())
// 配置解析表单数据的中间件，只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }))
// 解析json
app.use(express.json())

// 封装 res.cc 函数
app.use((req, res, next) => {
  // status 默认值为 1，表示失败
  // err 可能是一个错误对象，也可能是一个错误的描述字符串
  res.cc = function (err, status = 1) {
      res.send({
          status,
          message: err instanceof Error ? err.message : err
      })
  }

  next()
})

// 一定要在路由之前配置解析 token 的中间件
// 用于将 JWT 字符串解析还原成 JSON 对象
const { expressjwt } = require("express-jwt");
// 导入配置文件
const config = require('./config')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressjwt({secret: config.jwtSecretKey, algorithms: ["HS256"]}).unless({ path: [/^\/api\//] }))

// 导入并注册 登录 路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)
// 导入并注册 用户 路由模块
const menulist = require('./router/menulist')
app.use('/api', menulist)
// 导入并注册 开放麦 路由模块
const openmic = require('./router/openmic')
app.use('/my/jockes', openmic)
// 导入并注册 段子工厂 路由模块
const jokesfac = require('./router/jokesfac')
app.use('/my', jokesfac)
// 导入并注册 段子日历 路由模块
const jokescal = require('./router/jokescal')
app.use('/my', jokescal)
// 导入并注册 训练营 路由模块
const traincamp = require('./router/traincamp')
app.use('/my', traincamp)
// 托管静态资源文件
app.use('/uploads', express.static('./uploads'))

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 数据验证失败
  // if (err instanceof joi.ValidationError) return res.cc(err)
  // 身份认证失败后的错误
  if(err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  // 未知错误
  res.cc(err)
})


// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8898, function () {
  console.log('api server running at http://127.0.0.1:8898')
})
