const { Router } = require ('express')
const { auth }= require ('../middleware/auth')
const { CreateOneMedication, updateMedication, listMedicationType, listMedicationId, deleteOneMedication } = require('../controllers/medication.controllers')

class MedicationRouter {
    routesFromMedication() {
        const medicationRoutes = Router()
        medicationRoutes.post('/medicamentos', auth, CreateOneMedication),
        medicationRoutes.put('/medicamentos/:id', auth, updateMedication),
        medicationRoutes.get('/medicamentos', auth, listMedicationType),
        medicationRoutes.get('/medicamentos/:id', auth, listMedicationId),
        medicationRoutes.delete('/medicamentos/:id', auth, deleteOneMedication)

        return medicationRoutes
    }
}

module.exports = new MedicationRouter()
