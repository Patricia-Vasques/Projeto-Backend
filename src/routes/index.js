const { Router } = require('express')
const { routesFromUser } = require('./user.routes')
const { routesFromStoreHouse } = require('./storehouse.routes')

const routes = new Router()
routes.use('/api', [
    routesFromUser(),
    routesFromStoreHouse ()
])

module.exports = routes