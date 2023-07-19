const { Router } = require ('express')
const { auth } = require ('../middleware/auth')
const { createOneStoreHouse, updateStoreHouse} = require('../controllers/storehouses.controllers')

class StoreHouseRouter {
    routesFromStoreHouse () {
        const storeHouseRoutes = Router()
            storeHouseRoutes.post('/depositos', auth, createOneStoreHouse)
            storeHouseRoutes.patch('/depositos/:id', auth, updateStoreHouse)

            return storeHouseRoutes
    }
}

module.exports = new StoreHouseRouter