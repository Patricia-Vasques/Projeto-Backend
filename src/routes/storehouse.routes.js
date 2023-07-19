const { Router } = require ('express')
const { auth } = require ('../middleware/auth')
const { createOneStoreHouse } = require('../controllers/storehouses.controllers')

class StoreHouseRouter {
    routesFromStoreHouse () {
        const storeHouseRoutes = Router()
            storeHouseRoutes.post('/depositos', auth, createOneStoreHouse)

            return storeHouseRoutes
    }
}

module.exports = new StoreHouseRouter