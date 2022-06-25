// 导入数据库操作模块
const db = require('../db/index')

// 获取菜单基本信息的处理函数
exports.getTrainList = (req, res) => {
    const sql = `SELECT * FROM training_camp`
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)

        // console.log(results);

        res.send({
            data: results,
            meta: {
                msg: "获取训练营数据成功",
                status: 200
            }
        })
    })
}
