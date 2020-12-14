const AuthController = require('./Controller/AuthController')
const protectedRouter = require('@koa/router')();

protectedRouter.post('/essay/Write',AuthController.essayWrite);
protectedRouter.post('/essay/Edit',AuthController.essayedit);


// const AuthController = require("./Controller/AuthController.js")


// unprotectedRouter.post("/essay/write",AuthController.essayWrite)

module.exports = protectedRouter;