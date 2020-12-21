const EssayController = require('./Controller/EssayController')
const AuthController = require('./Controller/AuthController')
const UsersController = require('./Controller/UsersController')

const protectedRouter = require('@koa/router')();

protectedRouter.post('/essay/write',EssayController.essayWrite);
protectedRouter.post('/essay/edit',EssayController.essayedit);


const unprotectedRouter = require('@koa/router')();

unprotectedRouter.post("/auth/login",AuthController.login)
unprotectedRouter.post("/auth/register",AuthController.register)
unprotectedRouter.post("/users",UsersController.listUsers)
unprotectedRouter.post("/users:id",UsersController.showUserDetail)
unprotectedRouter.post("/users/update:id",UsersController.updateUser)
unprotectedRouter.post("/users/delete:id",UsersController.updateUser)

module.exports = {
    protectedRouter,
    unprotectedRouter
};