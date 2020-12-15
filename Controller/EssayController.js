const fs = require('fs')
const path = require('path')
const os = require('os')

const essayWrite = async (ctx,next) =>{
    // if(ctx.method != "POST") return await next();

    let files = ctx.request.files
    let title = ctx.request.body.title

    let result = await new Promise((resolve,reject)=>{
        if(Object.keys(files).length > 0){
            let imgarr = [];
            Object.keys(files).forEach(key=>{
                let file = files[key]
                const reader = fs.createReadStream(file.path)
                let newName = Date.now() + file.name.split('.').shift() + '.' + file.name.split('.').pop();
                const newPath = path.join(__dirname,'../public/images/'+newName)
                const stream = fs.createWriteStream(newPath)
                reader.pipe(stream);
                imgarr.push(newPath)
            })
            resolve(imgarr)
        }else{
            console.log("异步catch")
            reject(Object.keys(files).length)

        }
    }).then(res=>{
        let data = [title,res];
        ctx.body = data
    })
}

const essayedit = async ctx =>{
    ctx.body = "编辑成功"
}

module.exports = {
    essayWrite,
    essayedit
}