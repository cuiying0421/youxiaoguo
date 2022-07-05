// 导入数据库操作模块
const db = require('../db/index')
// 导入 bcryptjs(加密)
const bcrypt = require('bcryptjs')
// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')

// 导入 token 配置文件
const config = require('../config')

// 注册
exports.reguser = (req, res) => {
    const userinfo = req.body
    // 检测用户名是否被占用
    const sql = `SELECT * FROM user_table WHERE username=?`
    db.query(sql, userinfo.username, (err, results) => {
        if (err) return res.cc(err)

        // 判断用户名是否占用
        if(results.length > 0){
            return res.cc('用户名被占用，请更换其他用户名！')
        }

        // 用户名可以用，调用 bcrypt.hashSync() 对密码进行加密
        // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        // 插入新用户
        const newSql = `INSERT INTO user_table SET ?`
        db.query(newSql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            if (err) return res.cc(err)
            // 判断影响行数是否为 1
            if (results.affectedRows !== 1) {
                // return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
                return res.cc('注册用户失败，请稍后再试！')
            }
            // 注册用户成功
            return res.cc('注册成功！', 0)
        })
    })
}


// 登录
exports.login = (req, res) => {
    const userinfo = req.body
    const sql = `SELECT * FROM user_table WHERE username=?`
    db.query(sql, userinfo.username, (err, results) => {
        if (err) return res.cc(err)

        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) return res.cc('登录失败！')

        // 拿着用户输入的密码,和数据库中存储的密码进行对比
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (!compareResult) {
            return res.cc('登录失败2！')
        }

        // 登录成功，生成 Token 字符串
        // 剔除密码完毕之后，user 中只保留了用户的 id 属性的值
        const user = { ...results[0], password: ''}
        // 生成 Token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn, })
        // 调用 res.send() 将 token 响应给客户端
        res.send({
            status:0,
            message:'登录成功！',
            token: 'Bearer ' + tokenStr
        })
    })
}
