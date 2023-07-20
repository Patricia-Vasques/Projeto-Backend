const { Router } = require('express')
const { routesFromUser } = require('./user.routes')
const { routesFromStoreHouse } = require('./storehouse.routes')
const { routesFromMedication } = require('./medication.routes')

const routes = new Router()
routes.use('/api', [
    routesFromUser(),
    routesFromStoreHouse (),
    routesFromMedication()
])

module.exports = routes