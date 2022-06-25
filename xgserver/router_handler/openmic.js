// 导入数据库操作模块
const db = require('../db/index')

// 获取 开放麦 的处理函数
exports.getOpenmicList = (req, res) => {
    let current_page = 1 //默认为1
    let num = 2 //一页条数
    if(req.query.pagenum){
        current_page = parseInt(req.query.pagenum)
    }

    let last_page = current_page - 1
    if(current_page <= 1){
        last_page = 1
    }

    let next_page = current_page + 1

    // var str = 'SELECT left(paragraph,50) as paragraph,date,id FROM notice limit ' + num + ' offset ' + num * (current_page - 1);

    


    if(req.query.query === ''){
        const sql = `SELECT * FROM open_mic WHERE is_delete=0 order by id asc`
        db.query(sql, (err, results) => {
            if (err) return res.cc(err)
            res.send({
                data: results,
                meta: {
                    msg: "获取开放麦数据成功！",
                    status: 200
                }
            })
        })
    }else if(req.query.query !== ''){
        const first = req.query.query.slice(0,1)
        const last = req.query.query.slice(req.query.query.length-1,1)
        const sql2 = `SELECT * FROM open_mic WHERE name like "${first}%${last}" and is_delete=0 order by id asc`
        // console.log(req.query);
        // console.log(req.query.query);
        db.query(sql2, (err, results) => {
            if (err) return res.cc(err)
            // console.log(req.query.query);
            // console.log(results, 'results');
            res.send({
                data: results,
                meta: {
                    msg: "查询开放麦数据成功！",
                    status: 200
                }
            })
        })
    }
    
    if(req.query.pagenum !== ''){
        const sql3 = `SELECT * FROM open_mic WHERE is_delete=0 order by id asc LIMIT ${num} OFFSET ${num*(current_page - 1)}`
        // const sql3 = 'SELECT * FROM open_mic WHERE is_delete=0' + 'LIMIT ' + 10
        console.log(num*(current_page - 1), 'nummmmm');
        db.query(sql3, (err, results) => {
            if (err) return res.cc(err)
            /* if(!results[0]){
                req.flash('error', '已到最后一页,请返回');
            } */
            res.send({
                last_page: last_page,
                next_page: next_page,
                current_page: current_page,
                data: results,
                meta: {
                    msg: "测试数据！！获取开放麦数据成功！",
                    status: 200
                }
            })
        })
    }
    
}

// 增加 开放麦 的处理函数
exports.addOpenmic = (req, res) => {
    const sql = `INSERT INTO open_mic SET ?`
    db.query(sql, req.body, (err, results) => {
        /* console.log(req.body);
        console.log(results); */
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('新增开放麦数据失败！')
        res.cc('新增开放麦数据成功！', 0)
    })
}

// 修改 开放麦 的处理函数
exports.editOpenmic = (req, res) => {
    const sql = `UPDATE open_mic SET ? WHERE id=?`
    db.query(sql,[req.body, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('修改开放麦数据失败！')
        res.cc('修改开放麦数据成功！', 0)
    })
}

// 删除 开放麦 的处理函数
exports.delOpenmic = (req, res) => {
    const sql = `UPDATE open_mic SET is_delete=1 WHERE id=?`
    db.query(sql,req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('修改开放麦数据失败！')
        res.cc('删除开放麦数据成功！', 0)
    })
}
