const { User } = require('../models/user')

class UserController {

    //Cadastrar um novo usuário
    async createOneUser(req, res){
        try{
            const{
                name, 
                surname,
                gender, 
                dt_birth, 
                cpf, 
                telephone, 
                email, 
                password, 
                status
            } = req.body

            if(!name || !surname ||  !dt_birth || !cpf || !email || !password ) {
                return res.status(400).json({error: "Prencha os campos obrigatórios"})
            }

            //validação de senha 
            const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]+$/;
            if (!strongPasswordRegex.test(password)) {
                return res.status(400).json({ error: "A senha deve conter pelo menos 1 letra maiúscula, 1 número e 1 caractere especial." });
            }

            const cpfExistente = await User.findOne({ where: { cpf }});
            if (cpfExistente) {
                return res.status(409).json({ error: "CPF já cadastrado!"})
            }

            const emailExistente = await User.findOne({ where: { email }});
            if (emailExistente) {
                return res.status(409).json({ error: "E-mail já cadastrado!"})
            }
            const newUser = await User.create({
                name,
                surname,
                gender,
                dt_birth,
                cpf,
                telephone,
                email,
                password,
                status: "Ativo",
            });

            return res.status(201).json({
                id: newUser.id,
                name: newUser.name,
                surname: newUser.surname,
                gender: newUser.gender,
                dt_birth: newUser.dt_birth,
                cpf: newUser.cpf,
                telephone: newUser.telephone,
                email: newUser.email,
                password: newUser.password,
                status: newUser.status
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new UserController()