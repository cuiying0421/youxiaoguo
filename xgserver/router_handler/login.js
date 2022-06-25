// 导入数据库操作模块
const db = require('../db/index')

// 获取菜单基本信息的处理函数
exports.getUserList = (req, res) => {
    const sql = `SELECT * FROM user_table`
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)

        res.send({
            data: results,
            meta: {
                msg: "获取用户列表成功",
                status: 200
            }
        })
    })
}
