const db = require('./db')
const logger = require('koa-logger');
const koaBody = require('koa-body');
const serve = require('koa-static');
const path = require('path')
var jwt = require('koa-jwt');

const Users = require("./entity/user")
const Essay = require("./entity/essay")

const Koa = require('koa');
const app = module.exports = new Koa();
const routers= require('./router')

app.use(logger());
app.use(koaBody({ multipart: true,
    json:true
}));

app.use(serve(path.join(__dirname, '/public')));

//关联
Users.hasMany(Essay,{
    foreignKey:'id',
    sourceKey:'id'
})
Essay.belongsTo(Users,{
    foreignKey:'id',
    targetKey:'id',
})


app.use(routers.unprotectedRouter.routes()).use(routers.unprotectedRouter.allowedMethods());
//jwt签发
// app.use(jwt({ secret: 'shared-secret' }));

app.use(routers.protectedRouter.routes()).use(routers.protectedRouter.allowedMethods());


console.log("服务器启动 8888")

app.listen(8888)