const { Medication } = require('../models/medication')

class MedicationControllers {
    //Cadastro de medicamento
    async CreateOneMedication (req, res){
        try{

        const {
        users_id,
        storehouses_id,
        name_med,
        name_lab,
        description,
        dosage,
        dosage_unit,
        type,
        unit_price,
        quantity

        } = req.body;


        //Verificar os campos obrigatórios
        if(!users_id || !storehouses_id || !name_med || 
            !name_lab || !dosage ||  !dosage_unit || !type|| !unit_price || !quantity) {
            return res.status(400).json({message: "Preencha os campos obrigatórios!"})
        }

        const nameMedExistente = await Medication.findOne({ where: {storehouses_id, name_med, name_lab, dosage}});
        if(nameMedExistente){
            return res.status(409).json({messagem: "Medicamento já cadastrado"})
        }

        const newMedication = await Medication.create({
            users_id,
            storehouses_id,
            name_med,
            name_lab,
            description,
            dosage,
            dosage_unit,
            type,
            unit_price,
            quantity
        });

        return res.status(201).send({
            id: newMedication.id,
            users_id: newMedication.users_id,
            storehouses_id: newMedication.storehouses_id,
            name_med: newMedication.name_med,
            name_lab: newMedication.name_lab,
            description: newMedication.description,
            dosage: newMedication.dosage,
            dosage_unit: newMedication.dosage_unit,
            type: newMedication.type,
            unit_price: newMedication.unit_price,
            quantity: newMedication.quantity
        })
        
        } catch (error) {
            console.error(error)
            return res.status(400).json({error: "Erro ao fazer o cadastro do medicamento!"})
        }
    }
}

module.exports = new MedicationControllers()