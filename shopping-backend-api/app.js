const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
//配置解析application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: true }));

const layoutRouter = require('./router/layout.js')
app.use('/layout', layoutRouter)

const HomeRouter = require('./router/Home.js')
app.use('/home', HomeRouter)


app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})
