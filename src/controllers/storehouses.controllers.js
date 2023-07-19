const { StoreHouse } = require('../models/storehouse')

class StoreHouseControllers {
    //Cadastrando um novo depósito
    async createOneStoreHouse (req, res) {
        try{
            const {
                users_id,
                company_name,
                cnpj,
                trade_name,
                email,
                tel,
                cel,
                address,
                number,
                neighborhood,
                city,
                state,
                complement,
                latitude,
                longitude,
                status
        } = req.body;
    
    
        if(!users_id || !company_name || !cnpj || !trade_name || !email || !cel || !address || !number ||
            !neighborhood || !city || !state) {
                return res.status(400).json({error: "Preencha os campos obrigatórios!"})
            }
    
            const cnpjExistente = await StoreHouse.findOne({ where: { cnpj }});
            if(cnpjExistente) {
                return res.status(409).json({ error: "cnpj já cadastrado"})
            }
    
            const companyNameExistente = await StoreHouse.findOne ({ where: {company_name}});
            if(companyNameExistente) {
                return res.status(409).json({ error: "Razão Social já cadastrada"})
            }
    
            const newStoreHouse = await StoreHouse.create({
                users_id,
                company_name,
                cnpj,
                trade_name,
                email,
                tel,
                cel,
                address,
                number,
                neighborhood,
                city,
                state,
                complement,
                latitude,
                longitude,
                status: "Ativo"
            });
    
            return res.status(201).json({
                id: newStoreHouse.id,
                users_id: newStoreHouse.users_id,
                company_namel: newStoreHouse.company_name,
                cnpj: newStoreHouse.cnpj,
                trade_name: newStoreHouse.trade_name,
                email: newStoreHouse.email,
                tel: newStoreHouse.tel,
                cel: newStoreHouse.cel,
                address: newStoreHouse.address,
                number: newStoreHouse.number,
                neighborhood: newStoreHouse.neighborhood,
                city: newStoreHouse.city,
                state: newStoreHouse.state,
                complement: newStoreHouse.complement,
                latitude: newStoreHouse.latitude,
                longitude: newStoreHouse.longitude,
                status: newStoreHouse.status
            })
    
            }catch (error) {
            console.error(error)
            return res.status(400).json({ error: "Não foi possível cadastrar o depósito" })
            }
        }
}

module.exports = new StoreHouseControllers()