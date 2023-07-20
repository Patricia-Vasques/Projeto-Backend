const { Router } = require ('express')
const { auth }= require ('../middleware/auth')
const { CreateOneMedication } = require('../controllers/medication.controllers')

class MedicationRouter {
    routesFromMedication() {
        const medicationRoutes = Router()
        medicationRoutes.post('/medicamentos', auth, CreateOneMedication)

        return medicationRoutes
    }
}

module.exports = new MedicationRouter()
