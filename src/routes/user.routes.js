const { Router } = require('express')
const { createOneUser, loginUser, updateOneUser } = require ('../controllers/user.controllers')
const { auth } = require('../middleware/auth')

class UserRouter {
    routesFromUser () {
        const userRoutes = Router()
        userRoutes.post('/usuarios', createOneUser),
        userRoutes.post('/usuarios/login',loginUser),
        userRoutes.patch('/usuarios/:id', auth, updateOneUser)

        return userRoutes
    }
}

module.exports = new UserRouter()