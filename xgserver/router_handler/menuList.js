// 导入数据库操作模块
const db = require('../db/index')

// 获取菜单基本信息的处理函数
exports.getMenuList = (req, res) => {
    const sql = `SELECT * FROM menu_list`
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)

        let jockes_fac = []
        let other = []
        results.map(obj => {
            if (obj.class === 'jockes') {
                jockes_fac.push(obj)
            } else if (obj.class === ''){
                let query = {
                    id: obj.id,
                    authName: obj.authName,
                    path: obj.path,
                }
                other.push(query)
            }
        })
        let other_query = []
        other.map(othobj => {
            let newArr = othobj
            newArr.children = []
            other_query.push(newArr)
        })

        /* console.log(jockes_fac, '有children，根据class分出的数据');
        console.log(other, '没有children，根据class分出的数据'); */
        let parent = null
        let children = []
        jockes_fac.map(jocObj => {
            if (jocObj.node_id === 2) {
                let newjocObj = {
                    id: jocObj.id,
                    authName: jocObj.authName,
                    path: jocObj.path,
                }
                children.push(newjocObj)
            } else if (jocObj.node_id === 1) {
                parent = jocObj
            }
        })
        let jockes = {
            ...parent,
            children
        }

        res.send({
            data: [
                jockes,
                ...other_query
            ],
            meta: {
                msg: "获取菜单列表成功",
                status: 200
            }
        })
    })
}
