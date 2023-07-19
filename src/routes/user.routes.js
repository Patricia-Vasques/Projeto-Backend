const { Router } = require('express')
const { createOneUser } = require ('../controllers/user.controllers')

class UserRouter {
    routesFromUser () {
        const userRoutes = Router()
        userRoutes.post('/usuarios', createOneUser)

        return userRoutes
    }
}

module.exports = new UserRouter()