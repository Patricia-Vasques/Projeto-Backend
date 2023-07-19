const { User } = require('../models/user')
const { sign } = require('jsonwebtoken')

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

    //Login do usuário retornando um token
    async loginUser(req, res){
        try{
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email }});
        if(!user) {
            return res.status(404).json({error: "E-mail do usuário não encontrado!"});
        }

        if (user.password !== password){
            return res.status(400).json({error: "Email ou senha inválidos!"})
        }
        else {
        //Token para autenticação
        const payload = {"email": user.email, "senha":user.password}

        const token = sign(payload, process.env.SECRET_JWT)
        return res.status(200).json({ token });
        }
    
        } catch (error) {
        return res.status(400).json({ error: "Ocorreu um erro no servidor." });
        }
    }

    //Atualização de dados do usuário pelo Id
    async updateOneUser(req, res){
        try{
            const { id } = req.params;
            const {
                name,
                surname,
                gender,
                telephone
            } = req.body

            
            const user = await User.findByPk(id);
            if(!user) {
                return res.status(404).json({ error: "Usuário não encontrado!"})
            }

            user.name = name || user.name;
            user.surname = surname || user.surname;
            user.gender = gender || user.gender;
            user.telephone = telephone || user.telephone;

            await user.update({name, surname, gender, telephone }, {where: {user}});

            return res.status(204).json();
        }catch (error) {
            console.error(error);
            return res.status(400).json({error: "Não foi possível atualizar os dados"})
        }
    }

    //Atualizando o status do usuário no sistema
    async upstatusOneUser (req, res) {

        try {
            const { id } = req.params;

          const user = await User.findByPk(id);
          if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado!" });
          }
      
          const newStatus = user.status === "Ativo" ? "Inativo" : "Ativo";
          await user.update({ status: newStatus });
      
          return res.status(200).json(user);
        } catch (error) {
          console.error(error);
          return res.status(400).json({ error: "Erro ao atualizar status do usuário!" });
        }
      }
}

module.exports = new UserController()