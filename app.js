const Koa = require('koa')
//引入配置
const config = require('./config/index')

//引入中间件模块
const middleware = require('./middleware')

const app = new Koa()
const router = require('./router/router')

//应用中间件模块
middleware(app)

router(app)
app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`)
})
