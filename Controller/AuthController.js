const sss = require("../entity/test");

const login = (ctx,next)=>{
    const jane = sss.build({ name: "Jane" });
    jane.save();
    console.log("保存成功")
    // (async ()=>{
    //     await 
    //     console.log("保存成功")
    // })
   
    ctx.body="登录成功"
}

const register = (ctx,next)=>{
    ctx.body = "注册成功"
}

module.exports={
    login,
    register
}