const fs = require('fs')
const path = require('path')
const os = require('os')

const essayWrite = async (ctx,next) =>{
    if(ctx.method != "POST") return await next();
    
    // console.log(ctx.request.files.file)

    if(ctx.request.files.length > 0){
        let imgarr = []
        for(let file of ctx.request.files){
            const reader = fs.createReadStream(file.path)
            let newName = Date.now() + file.name.split('.').shift() + '.' + file.name.split('.').pop();
            const newPath = path.join(__dirname,'../public/images/'+newName)
            const stream = fs.createWriteStream(newPath)

            // console.log(stream.path)
            reader.pipe(stream);
            imgarr.push(newPath)
        }
    }
    ctx.body = '写入成功'
    // const file = ctx.request.files.file;
    // const reader = fs.createReadStream(file.path)
    // let newName = Date.now() + file.name.split('.').shift() + '.' + file.name.split('.').pop();
    // const newPath = path.join(__dirname,'../public/images/'+newName)
    // const stream = fs.createWriteStream(newPath)
    // console.log(stream.path)
    // reader.pipe(stream);
    // ctx.body = newPath
}
const essayedit = async ctx =>{
    ctx.body = "编辑成功"
}

module.exports = {
    essayWrite,
    essayedit
}