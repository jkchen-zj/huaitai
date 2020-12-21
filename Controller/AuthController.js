const Users = require("../entity/user");
const argon2 = require('argon2');

var jwt = require('jsonwebtoken');

const login = async (ctx,next)=>{
   const user = await Users.findOne({
        where: { name:ctx.require.body.name }
    })
    if(!user){
        ctx.state = 1;
        ctx.body = {
            message: '用户名不存在'
        }
    }else if(await argon2.verify(user.password, ctx.request.body.password)){
        ctx.state = 0;
        ctx.body = { token: jwt.sign({ id: user.id }, 'shared-secret') };
    }else{
        ctx.state = 1;
        ctx.body = {
            message: '密码错误'
        }
    }
}

const register = async (ctx,next) => {
    const newuser = {};
    newuser.name = ctx.request.body.name
    newuser.password = await argon2.hash(ctx.request.body.password)
    newuser.email = ctx.request.body.email
    newuser.active = ctx.request.body.active

    console.log(newuser)
    // await Users.create({newuser});
    ctx.state = 0
    ctx.body = newuser
    // ctx.body = "注册成功"
}

module.exports={
    login,
    register
}