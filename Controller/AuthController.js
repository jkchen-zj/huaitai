const login = (ctx,next)=>{
    ctx.body="登录成功"
}

const register = (ctx,next)=>{
    ctx.body = "注册成功"
}

module.exports={
    login,
    register
}