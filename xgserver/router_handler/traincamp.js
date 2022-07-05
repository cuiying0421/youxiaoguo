// 导入数据库操作模块
const db = require('../db/index')

// 获取 训练营 的处理函数
exports.getTrainList = (req, res) => {
    let current_page = 1 //当前页码，默认为1
    let num = 5 //一页条数默认为5条
    if(req.query.pagenum){
        current_page = parseInt(req.query.pagenum)
    }
    if(req.query.pagesize){
        num = parseInt(req.query.pagesize)
    }

    if(req.query.query === ''){
        const sql = `SELECT * FROM training_camp WHERE is_delete=0 order by id asc LIMIT ${num} OFFSET ${num*(current_page - 1)}`
        const sql2=`SELECT COUNT(*) as total FROM training_camp WHERE is_delete=0`
        const p1 = new Promise((resolve, reject)=>{
            db.query(sql, (err, data) => {
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
        const p2 = new Promise((resolve,reject)=>{
            db.query(sql2, (err, data) => {
              if(err){
                reject(err)
              }else{
                resolve(data)
              }
            })
          })
        Promise.all([p1, p2]).then(result => {
            res.send({
                pagenum:current_page,
                total:result[1][0].total,
                data: result[0],
                meta: {
                    msg: "查询训练营数据成功！1",
                    status: 200
                }
            }) 
        },err=>{
            console.log("err",err)
        })
    }else if(req.query.query !== '' || req.query.pagenum !== '' || req.query.pagesize !== ''){
        const first = req.query.query.slice(0,1)
        const last = req.query.query.slice(req.query.query.length-1,1)
        let sqlque = null
        if(req.query.query.length === 1){
            sqlque = `%${req.query.query}%`
        }else{
            sqlque = `${first}%${last}`
        }

        let sqltxt=`SELECT * FROM training_camp WHERE name like "${sqlque}" and is_delete=0 order by id asc LIMIT ${num} OFFSET ${num*(current_page - 1)}`
        let sqltxt2=`SELECT COUNT(*) as total FROM training_camp WHERE name like "${sqlque}" and is_delete=0`
        const p1 = new Promise((resolve, reject)=>{
            db.query(sqltxt, (err, data) => {
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                    
                }
            })
        })
        const p2 = new Promise((resolve,reject)=>{
            db.query(sqltxt2, (err, data) => {
                if(err){
                    reject(err)
                }else{
                    resolve(data) 
                }
            })
        })
        let sqltxt333=`SELECT SQL_CALC_FOUND_ROWS * FROM training_camp WHERE name like "${sqlque}" and is_delete=0 order by id asc LIMIT ${num}`
        async function hh(){
            const test = await Promise.all([p1, p2])
            if(test[1][0].total <= num){
                num = test[1][0].total
                console.log(num, 'num');
                db.query(sqltxt333, (err, result) => {
                    if (err) return res.cc(err)
                    res.send({
                        pagenum:current_page,
                        total:test[1][0].total,
                        data: result,
                        meta: {
                            msg: "查询训练营数据成功!2",
                            status: 200
                        }
                    })
                })
            }else{
                db.query(sqltxt, (err, result) => {
                    if (err) return res.cc(err)
                    res.send({
                        pagenum:current_page,
                        total:test[1][0].total,
                        data: result,
                        meta: {
                            msg: "查询训练营数据成功！3",
                            status: 200
                        }
                    })
                })
            }        
        }
        hh()
    }  
}

// 增加 训练营 的处理函数
exports.addTrain = (req, res) => {
    const sql = `INSERT INTO training_camp SET ?`
    db.query(sql, req.body, (err,results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('新增训练营数据失败！')
        res.cc('新增训练营数据成功！', 0)
    })
}

// 修改 训练营 的处理函数
exports.editTrain = (req, res) => {
    const sql = `UPDATE training_camp SET ? WHERE id=?`
    db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('修改训练营数据失败！')
        res.cc('修改训练营数据成功！', 0)
    })
}

// 删除 训练营 的处理函数
exports.delTrain = (req, res) => {
    const sql = `UPDATE training_camp SET is_delete=1 WHERE id=?`
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('修改训练营数据失败！')
        res.cc('删除训练营数据成功！', 0)
    })
}
