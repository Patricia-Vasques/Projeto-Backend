const { Router } = require ('express')
const { auth }= require ('../middleware/auth')
const { CreateOneMedication, updateMedication } = require('../controllers/medication.controllers')

class MedicationRouter {
    routesFromMedication() {
        const medicationRoutes = Router()
        medicationRoutes.post('/medicamentos', auth, CreateOneMedication),
        medicationRoutes.put('/medicamentos/:id', auth, updateMedication)

        return medicationRoutes
    }
}

module.exports = new MedicationRouter()
