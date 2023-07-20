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

    //Atualizar dados do medicamentos
    async updateMedication (req, res){
        try{
            const{ id } = req.params
            const{
                description,
                unit_price,
                quantity
            } = req.body

            if (
                req.body.users_id ||
                req.body.storehouses_id ||
                req.body.name_med ||
                req.body.name_lab ||
                req.body.dosage ||
                req.body.dosage_unit ||
                req.body.type
              ) {
                return res.status(400).json({
                  error : "Este campo não pode ser atualizado!",
                });
              }

            const medication = await Medication.findByPk(id);
            if(!medication){
                return res.status(404).json({message: "Medicamento não encontado!"})
            }

            medication.description = description || medication.description;
            medication.unit_price = unit_price || medication.unit_price;
            medication.quantity = quantity || medication.quantity;

            await medication.update(
                {description, unit_price, quantity},
                {where: {medication}});
            return res.status(200).json(medication)

        }catch (error) {
            console.error(error);
            return res.status(400).json({message: "Não foi possível atualizar os dados do medicamento "})
        }
        }

        //Listando medicamentos pelo tipo(controlado / não controlado)
        async listMedicationType (req, res) {
            try{
                const {type} = req.query
                let medications

                if(type === 'controlado' || type ==='não controlado') { 
                    medications = await Medication.findAll({ where: {type: type}});
                    return res.status(200).json(medications)
                } else {
                    return res.status(400).json({error: "tipo do remédio tem que ser: controlado ou não controlado"})
                }
                
            }catch (error) {
                console.error(error)
                return res.status(400).json ({ error: "Erro ao listar medicamentos!"})
            }
        }

        //Listando medicamentos pelo identificador 
        async listMedicationId (req, res) {
            try{
                const {id} = req.params

                const medication = await Medication.findOne({ where: {id}})
                if(!medication){
                    return res.status(404).json({error: "Medicamento não encontrado!"})
                }

                return res.status(200).json(medication)
            }catch (error) {
                console.error(error)
                return res.status(400).json({error: "Não foi possível listar o medicamento!"})
            }
        }

        //Deletar um medicamento
        async deleteOneMedication(req, res) {
            try{
            const { id } = req.params

            const medication = await Medication.findByPk(id)
            if(!medication) {
                return res.status(404).json({error: "Medicamento não encontrado!"})
            }

            await Medication.destroy({
                where: {id}
            })
            return res.status(204).json()
        }catch (error){
            console.error(error)
            return res.status(400).json({error: "Não foi possivel excluir o medicamento!"})
        }
    }   
}


module.exports = new MedicationControllers()