const { Router } = require('express')
const { createOneUser, loginUser } = require ('../controllers/user.controllers')

class UserRouter {
    routesFromUser () {
        const userRoutes = Router()
        userRoutes.post('/usuarios', createOneUser),
        userRoutes.post('/usuarios/login',loginUser)

        return userRoutes
    }
}

module.exports = new UserRouter()