const EssayController = require('./Controller/EssayController')
const AuthController = require('./Controller/AuthController')
const UsersController = require('./Controller/UsersController')

const protectedRouter = require('@koa/router')();

protectedRouter.post('/essay/write',EssayController.essayWrite);
protectedRouter.post('/essay/edit:id',EssayController.essayedit);
protectedRouter.post('/essay/delete:id',EssayController.essaydelete);
protectedRouter.post("/users/update:id",UsersController.updateUser)
protectedRouter.post("/users/delete:id",UsersController.deleteUser)


const unprotectedRouter = require('@koa/router')();

unprotectedRouter.post("/auth/login",AuthController.login)
unprotectedRouter.post("/auth/register",AuthController.register)
unprotectedRouter.post("/users",UsersController.listUsers)
unprotectedRouter.post("/users/detail:id",UsersController.showUserDetail)



module.exports = {
    protectedRouter,
    unprotectedRouter
};