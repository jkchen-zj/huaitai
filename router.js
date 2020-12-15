const EssayController = require('./Controller/EssayController')
const AuthController = require('./Controller/AuthController')

const protectedRouter = require('@koa/router')();

protectedRouter.post('/essay/write',EssayController.essayWrite);
protectedRouter.post('/essay/edit',EssayController.essayedit);


const unprotectedRouter = require('@koa/router')();

unprotectedRouter.post("/auth/login",AuthController.login)
unprotectedRouter.post("/auth/register",AuthController.register)

module.exports = {
    protectedRouter,
    unprotectedRouter
};