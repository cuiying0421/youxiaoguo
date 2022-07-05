// 导入处理路径的 path 核心模块
const path = require('path')
// 导入数据库操作模块
const db = require('../db/index')
const fs=require('fs');

// 获取 开放麦 的处理函数
exports.getOpenmicList = (req, res) => {
    let current_page = 1 //当前页码，默认为1
    let num = 5 //一页条数默认为5条
    if(req.query.pagenum){
        current_page = parseInt(req.query.pagenum)
    }
    if(req.query.pagesize){
        num = parseInt(req.query.pagesize)
    }

    /* let last_page = current_page - 1
    if(current_page <= 1){
        last_page = 1
    }
    let next_page = current_page + 1 */

    if(req.query.query === ''){
        const sql = `SELECT * FROM open_mic WHERE is_delete=0 order by id asc LIMIT ${num} OFFSET ${num*(current_page - 1)}`
        const sql2=`SELECT COUNT(*) as total FROM open_mic WHERE is_delete=0`
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
            /* fs.readFile('uploads/a.txt', (err, data) => {
                if(err){
                    console.log(err);
                }else{
                    result[0][0].video = data.toString()
                    // 原始代码
                    
                }
            })   */
            res.send({
                pagenum:current_page,
                total:result[1][0].total,
                data: result[0],
                meta: {
                    msg: "查询开放麦数据成功！1",
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

        let sqltxt=`SELECT * FROM open_mic WHERE name like "${sqlque}" and is_delete=0 order by id asc LIMIT ${num} OFFSET ${num*(current_page - 1)}`
        let sqltxt2=`SELECT COUNT(*) as total FROM open_mic WHERE name like "${sqlque}" and is_delete=0`
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
        let sqltxt333=`SELECT SQL_CALC_FOUND_ROWS * FROM open_mic WHERE name like "${sqlque}" and is_delete=0 order by id asc LIMIT ${num}`
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
                            msg: "查询开放麦数据成功!2",
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
                            msg: "查询开放麦数据成功！3",
                            status: 200
                        }
                    })
                })
            }        
        }
        hh()
    }  
}



// 增加 开放麦 的处理函数
exports.addOpenmic = (req, res) => {
    /* let rs=fs.createReadStream(path.resolve(`${req.file.path}`));
    let newPath = `uploads/${req.file.originalname}`
    let ws=fs.createWriteStream(path.resolve(newPath));

    rs.pipe(ws);
    rs.on('error', err=>{
        console.log(err,'读取失败');
    });
    ws.on('finish', ()=>{
        console.log('写入完成');
    });

    const params = {
        date:req.body.date,
        name:req.body.name,
        viewersvote:req.body.viewersvote,
        club:req.body.club,
        remark:req.body.remark,
        video:newPath
    } */
    /* 原始代码*/
    const sql = `INSERT INTO open_mic SET ?`
    db.query(sql, req.body, (err, results) => {
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
