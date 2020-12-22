const Users = require("../entity/user");
const Essay = require("../entity/essay");

const listUsers = async (ctx,next)=>{
    try {
        let result = await Users.findAll();
        if (result != null) {
            ctx.body = {
                code: 0,
                data:result
            }
        } else {
            ctx.body = {
                code: 500,
                message: '表中没有数据!',
            };
        }
    } catch (error) {
        ctx.body = {
            code: 500,
            message: '错误',
            data: err
        };
    }
}

const showUserDetail = async (ctx,nexy)=>{

    let result = await User.findAndCountAll({
        where: ctx.require.body.id,
        offset: start,
        include: [{
            model:Essay,
            attributes:['essay_id','title']
        }],
        raw:true
    })

    if(result != null){
        ctx.body = {
            code: 0,
            data:result
        }
    }else{
        ctx.body = {
            code: 3,
            message: '错误',
            data: err
        };
    }
}

const updateUser = async (ctx,next)=>{
    const newuser = {};
    newuser.name = ctx.request.body.name
    newuser.password = await argon2.hash(ctx.request.body.password)
    newuser.email = ctx.request.body.email
    newuser.active = ctx.request.body.active

    result = await Users.update(newuser,{
        'where':{'id':ctx.request.body.id}
    })

    if(result != null){
        ctx.body = {
            code: 0,
            data:result
        }
    }else{
        ctx.body = {
            code: 3,
            message: '错误',
            data: err
        };
    }
}

const deleteUser = async(ctx,next)=>{
    Users.destroy({
        'where': {
            'id': ctx.request.body.id
        }
    })
    ctx.status = 0;
    ctx.body = "删除成功"
}

module.exports = {
    listUsers,
    showUserDetail,
    updateUser,
    deleteUser
}