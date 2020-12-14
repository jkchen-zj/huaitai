const logger = require('koa-logger');
const koaBody = require('koa-body');
const serve = require('koa-static');
const path = require('path')

const Koa = require('koa');
const app = module.exports = new Koa();

const routers= require('./router')



app.use(logger());
app.use(koaBody({ multipart: true }));
app.use(serve(path.join(__dirname, '/public')));

app.use(routers.routes()).use(routers.allowedMethods());

console.log("服务器启动 8888")

app.listen(8888)