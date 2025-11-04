const express = require('express')
const router = express.Router()
const db = require('../db/index.js')

router.get('/category', (req, res) => {
    const sql = 'SELECT * FROM categories'
    db.query(sql,(err,results)=>{
        if(err){
            return res.send({
                status:1,
                msg:'操作分类失败'
            })
        }
        res.send({
            status:0,
            msg:'操作分类成功',
            data:results
        })
    })
})

module.exports = router