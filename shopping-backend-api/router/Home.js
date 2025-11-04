const express = require('express')
const router = express.Router()
const db = require('../db/index.js')

router.get('/banner', (req, res) => {
    const sql = 'SELECT * FROM banner_images'
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                code: 500,
                msg: '查询banner数据失败'
            })
        }
        res.status(200).json({
            code: 200,
            msg: '查询banner数据成功',
            data: results
        })
    })
})

router.get('/new', (req, res) => {
    const sql = 'SELECT * FROM new_goods'
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                code: 500,
                msg: '查询新商品数据失败'
            })
        }
        res.status(200).json({
            code: 200,
            msg: '查询新商品数据成功',
            data: results
        })
    })
})

router.get('/hot', (req, res) => {
    const sql = 'SELECT * FROM hot_goods'
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                code: 500,
                msg: '查询热门商品数据失败'
            })
        }
        res.status(200).json({
            code: 200,
            msg: '查询热门商品数据成功',
            data: results
        })
    })
})

router.get('/goods', (req, res) => {
    const sql = 'SELECT * FROM home_categories'
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                code: 500,
                msg: '查询商品数据失败'
            })
        }
        res.status(200).json({
            code: 200,
            msg: '查询商品数据成功',
            data: results
        })
    })
})


module.exports = router
