const user = require("../entity/user");

const login = (ctx,next)=>{
    const jane = user.build({ name: "Jane" });
    jane.save();
    console.log("保存成功")
    // (async ()=>{
    //     await 
    //     console.log("保存成功")
    // })
   
    ctx.body="登录成功"
}

const register = async (ctx,next) => {
    console.log(ctx.request.body.name)

    const newuser = {};
    newuser.name = ctx.request.body.name
    newuser.password = ctx.request.body.password
    newuser.email = ctx.request.body.email
    newuser.active = ctx.request.body.active

    // console.log(newuser)
    // await user.create({newuser});
    
    ctx.state = 0
    ctx.body = "注册成功"
}

module.exports={
    login,
    register
}