const fs = require('fs')
const path = require('path')
const os = require('os')

const Essay = require("../entity/essay");
// const sss  = require("../entity/test")

//转换图片
const imagePath = async function(files){
    return await new Promise((resolve,reject)=>{
        if(Object.keys(files).length > 0){
            let imgarr = '';
            Object.keys(files).forEach(key=>{
                let file = files[key]
                const reader = fs.createReadStream(file.path)
                let newName = Date.now() + file.name.split('.').shift() + '.' + file.name.split('.').pop();
                const newPath = path.join(__dirname,'../public/images/'+newName)
                const stream = fs.createWriteStream(newPath)
                reader.pipe(stream);
                imgarr += newPath+','
            })
            resolve(imgarr)
        }else{
            console.log("异步catch")
            reject(Object.keys(files).length)

        }
    })
}

const essayWrite = async (ctx,next) =>{
    // if(ctx.method != "POST") return await next();
    let files = ctx.request.files
    let newEssay = {}
    newEssay.title = ctx.request.body.title
    newEssay.id = ctx.request.body.id
    newEssay.content =  ctx.request.body.content

    let res = await Project.findOne({
        id:newEssay.id
    })
    if(res != null){
        imagePath(files).then(res=>{
            newEssay.images = res;
            ctx.body = newEssay
        })
    }else{
        ctx.body = {
            code: 3,
            message: '未知用户',
        };
    }
}

const essayedit = async ctx =>{
    let files = ctx.request.files
    let newEssay = {}
    newEssay.title = ctx.request.body.title
    newEssay.id = ctx.request.body.id
    newEssay.content =  ctx.request.body.content

    let res = await Project.findOne({
        id:newEssay.id
    })
    if(res != null){
        imagePath(files).then(res=>{
            newEssay.images = res;
            ctx.body = newEssay
        })
    }else{
        ctx.body = {
            code: 3,
            message: '未知用户',
        };
    }
}

const essaydelete = async ctx=>{
    Essay.destroy({
        'where': {
            'id': ctx.request.body.id
        }
    })
    ctx.status = 0;
    ctx.body = "删除成功"
}

const essaylist = async ctx =>{
    try {
        let result = await Essay.findAll();
        if (result != null) {
            ctx.body = {
                code: 0,
                data:result
            }
        } else {
            ctx.body = {
                code: 500,
                message: '暂无数据!',
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

module.exports = {
    essayWrite,
    essayedit,
    essaydelete,
    essaylist
}