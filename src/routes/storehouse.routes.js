const { Router } = require ('express')
const { auth } = require ('../middleware/auth')
const { createOneStoreHouse, updateStoreHouse, upstatusOneStoreHouse, listStoreHouseStatus} = require('../controllers/storehouses.controllers')

class StoreHouseRouter {
    routesFromStoreHouse () {
        const storeHouseRoutes = Router()
            storeHouseRoutes.post('/depositos', auth, createOneStoreHouse),
            storeHouseRoutes.patch('/depositos/:id', auth, updateStoreHouse),
            storeHouseRoutes.patch('/depositos/:id/status', auth, upstatusOneStoreHouse),
            storeHouseRoutes.get('/depositos', auth, listStoreHouseStatus)

            return storeHouseRoutes
    }
}

module.exports = new StoreHouseRouter