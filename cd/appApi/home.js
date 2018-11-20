const Router = require ('koa-router')
let router = new Router()
router.get('/',async(ctx)=>{
    ctx.body="这是首页接口"
})
router.get('/register',async(ctx)=>{
    ctx.body="用户首页注册接口"
})
module.exports=router;