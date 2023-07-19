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

        //Atualizando os dados do depósito pelo identificador 
    async updateStoreHouse (req, res) {
        try{
            const { id } = req.params;

            const{
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
                longitude
            } = req.body
    
            
                const storeHouse = await StoreHouse.findByPk(id);
                if(!storeHouse){
                    return res.status(404).json({ error: "Depósito não encontrado!" })
                }
    
                storeHouse.trade_name = trade_name || storeHouse.trade_name;
                storeHouse.email = email || storeHouse.email;
                storeHouse.tel = tel || storeHouse.tel;
                storeHouse.cel= cel || storeHouse.cel;
                storeHouse.address = address ||storeHouse.address;
                storeHouse.number = number || storeHouse.number;
                storeHouse.neighborhood = neighborhood || storeHouse.neighborhood;
                storeHouse.city = city || storeHouse.city;
                storeHouse.state = state || storeHouse.state;
                storeHouse.complement = complement || storeHouse.complement;
                storeHouse.longitude = longitude || storeHouse.longitude;
                storeHouse.latitude = latitude || storeHouse.latitude;
                
    
                await storeHouse.update({
                    trade_name, email, tel, cel, address,
                    number, neighborhood, city, state,
                    complement, longitude, latitude}, 
                    {where: {storeHouse}});
    
                return res.status(204).json(storeHouse);
            } catch (error) {
                console.error(error);
                return res.status(400).json({ error: "Não foi possível atualizar os dados do depósito!"})
            }
        }

        ////Atualização do status do depósito no sistema 
        async upstatusOneStoreHouse(req, res) {
            const { id } = req.params;

            try {
                const storeHouse = await StoreHouse.findByPk(id);
                if (!storeHouse) {
                return res.status(404).json({ error: "Depósito não encontrado!" });
                }

                const newStatus = storeHouse.status === "Ativo" ? "Inativo" : "Ativo";
                await storeHouse.update({ status: newStatus });

                return res.status(204).json(storeHouse);
            } catch (error) {
                console.error(error);
                return res.status(400).json({ error: "Erro ao atualizar status do depósito!" });
            }
          }

}

module.exports = new StoreHouseControllers()