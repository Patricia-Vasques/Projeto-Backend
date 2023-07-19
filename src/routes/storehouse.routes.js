const { Router } = require ('express')
const { auth } = require ('../middleware/auth')
const { createOneStoreHouse, updateStoreHouse, upstatusOneStoreHouse} = require('../controllers/storehouses.controllers')

class StoreHouseRouter {
    routesFromStoreHouse () {
        const storeHouseRoutes = Router()
            storeHouseRoutes.post('/depositos', auth, createOneStoreHouse),
            storeHouseRoutes.patch('/depositos/:id', auth, updateStoreHouse),
            storeHouseRoutes.patch('/depositos/:id/status', auth, upstatusOneStoreHouse)

            return storeHouseRoutes
    }
}

module.exports = new StoreHouseRouter