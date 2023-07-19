const { Router } = require('express')
const { createOneUser, loginUser, updateOneUser, upstatusOneUser, uppasswordOneUser } = require ('../controllers/user.controllers')
const { auth } = require('../middleware/auth')

class UserRouter {
    routesFromUser () {
        const userRoutes = Router()
        userRoutes.post('/usuarios', createOneUser),
        userRoutes.post('/usuarios/login',loginUser),
        userRoutes.patch('/usuarios/:id', auth, updateOneUser),
        userRoutes.patch('/usuarios/:id/status', auth, upstatusOneUser),
        userRoutes.patch('/usuarios/:id/senha', auth, uppasswordOneUser)

        return userRoutes
    }
}

module.exports = new UserRouter()