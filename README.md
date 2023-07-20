# Pharmacy Central System 
## Descrição do Projeto final do módulo 2 - Backend


Fui convidada pelo  LabPharmacy Inc, uma renomada empresa do ramo de tecnologia farmacêutica para desenvolver a parte do backend  do sistema chamado Pharmacy Central System, que é um sistema online criado para resolver problemas de gerenciamento de depósitos e medicamentos, proporcionando um ambiente digital eficiente e seguro para o controle e organização desses recursos.

Com esse sistema o time de gestão poderá cadastra e gerenciar depósitos farmacêuticos, registrando medicamento com informações detalhadas, contralar o estoque, além de garantir um acesso seguro aos usuários do sistema.



## Tenologias Utilizadas
 O backend do Pharmacy Central System foi desenvolvido utilizando as seguintes tecnologias:
 
- Node.js: É uma plataforma de desenvolvimento JavaScript para aplicações de rede e servidor.
- Express.js: Frameword web para Node.js, que facilita a criação de APIs.
- PostgreSQL: Banco de dados relacional, que será utilizado para armazenas os dados do sistema


## Como executar o sistema Pharmacy Central System

Para executar o Pharmacy Central System em uma máquina local, siga as seguites instruções:

1. Certifique-se de ter o Node.js instalado em sua máquina

2. Clone o repositório do Phamacy Central System em sua máquina local:

```sh
https://github.com/Patricia-Vasques/Projeto-Backend---Modulo-2.git
```

3. Acesse o diretorio do projeto :

```sh
cd Pharmacy Central System
```

4. Instale as dependências para rodas o projeto:

```sh
npm init -y
npm install
npm install express cors
npm install nodemon --save-dev
npm install sequelize 
npm install dotenv
npm install jsonwebtoken
```

5. Crie um banco de dados PostgreSQL e atualiza as configurações de conexão o arquivo .envexemple, com as informações do seu banco de dados.

6. Inicie o servidor

```sh
npm rum start:dev
```

Agora você já pode acessar o Pharmacy Central System em seu navegador através do endereço, usei o ThunderClient para os testes ` http://localhost:3000`

## Endpoint criados e suas funcionalidades
| Endpoint | Descrição |
| --- | --- |
| Cadastro de Usuário  | Para cadastrar um usuário, acesse HTTP POST no path /api/usuarios e no body preencha os campos obrigatórios. Caso esses campos não estejam corretos, retorna um erro 400 (Bad Request). Para cadastrar um usuário, o CPF e e-mail não podem estar cadastrados no banco de dados. Se já estiverem, retorna um erro 409 (Conflict) de usuário já cadastrado. Se o cadastro for feito corretamente, retorna um status 201 com os dados do usuário cadastrado.|
| Login Usuário | Para fazer o login, acesse HTTP POST /api/usuarios/login e coloque o e-mail e senha no body. Caso o login tenha e-mail ou senha incorretos, retorna um erro 400 (Bad Request). Caso o e-mail não exista no banco de dados, retorna um erro 404 (Not Found). Se todos os campos estiverem corretos, retorna o status 200 (OK) e um Token (importante!! Esse token será usado para acessar todos os outros endpoints, pois são privados!). |
| Atualização dos dados do Usuário | Para atualizar os dados do usuário, acesse HTTP PATCH no path /api/usuarios/{identificador}. Ao colocar um identificador válido, temos como retorno o status 204 (No Content). Caso o identificador não esteja cadastrado no banco de dados, teremos como retorno o erro 404 (Not Found). Se a requisição estiver com dados inválidos, teremos o erro 400 (Bad Request).
| Atualização do Status do Usuário |Acesse HTTP PATCH no path /api/usuarios/{identificador}/status. Se o identificador estiver cadastrado no banco de dados, teremos como retorno o status 200 (OK) e no campo de resposta teremos os dados atualizados com o status alterado. Caso o identificador não esteja cadastrado, teremos como retorno o erro 404 (Not Found). Se tivermos algum erro na requisição com os dados inválidos, teremos o erro 400 (Bad Request).
| Atualização da senha do Usuário | Acesse HTTP PATCH no path /api/usuarios/{identificador}/senha e no body passe a nova senha. Neste caso, se o identificador existir e a senha cumprir os requisitos, teremos como retorno o status 204 (No Content). Caso não seja encontrado o identificador no banco de dados, teremos um erro 404 (Not Found). Se tiver dados inválidos na requisição, teremos o erro 400 (Bad Request).
| Listagem de Usuário pelo Identificador | Acesse HTTP GET no path /api/usuarios/{identificador}. Aqui, caso o identificador esteja cadastrado no banco de dados, teremos como retorno o status 200 (OK), retornando os dados do usuário (sem a senha). Se o identificador não estiver cadastrado, retorna um erro 404 (Not Found).
| Cadastro de Depósito |Acesse HTTP POST no path /api/depositos. No body, preencha os campos obrigatórios para cadastrar um depósito. Ao verificar que está tudo certo, teremos um retorno de status 201 (Created), retornando no corpo de resposta os dados cadastrados. Caso a requisição esteja com dados inválidos, teremos o erro 400 (Bad Request). Se o CNPJ e Razão Social já estiverem cadastrados no banco de dados, teremos como retorno o erro 409 (Conflict).
| Atualização dos dados de Depósitos | Acesse HTTP PATCH no path /api/depositos/{identificador}. No body, coloque o item que queremos alterar (lembre que nem todos os campos são possíveis de alterar). Se ocorrer tudo certo, teremos o status 204 (No Content). Caso o identificador passado não exista no banco de dados, teremos como retorno o erro 404 (Not Found). Se tiver erro nos dados da requisição, teremos o erro 400 (Bad Request).
| Atualização do Status do Depósito no Sistema | Acesse HTTP PATCH no path /api/depositos/{identificador}/status. Ao passarmos um identificador válido, teremos como retorno o status 204 (No Content) e o status é alterado automaticamente no banco de dados. Caso o identificador não seja encontrado no banco de dados, teremos o erro 404 (Not Found). Se tiver erro nos dados informados na requisição, retorna um erro 400 (Bad Request).
| Listagem de Depósitos | Acesse HTTP GET no path /api/depositos. Aqui, vamos ter a listagem dos depósitos de acordo com o status. Podemos passar o query param, por exemplo, /api/depositos?status=ATIVO para buscar os depósitos ativos. Se estiver tudo certo, teremos o status 200 (OK) retornando a lista de depósitos.
| Listagem de Depósitos pelo Identificador | Acesse HTTP GET no path /api/depositos/{identificador}. Se o identificador estiver no banco de dados, teremos como retorno o status 200 (OK) com os dados do depósito. Caso o identificador não esteja no banco de dados, teremos o erro 404 (Not Found).
| Exclusão de Depósito | Acesse HTTP DELETE no path /api/depositos/{identificador}. Para esta exclusão ocorrer, não podem existir medicamentos cadastrados neste depósito e ele não pode estar Ativo. Se cumprir os requisitos, teremos como retorno o status
|  Cadastro de Medicamento | Acessamos HTTP POST no path /api/medicamentos. Preenchemos os campos obrigatórios e, se tudo estiver certo, temos como retorno o status 201 (Created), retornando no corpo da resposta os dados do medicamento cadastrado. Caso tente cadastrar um medicamento com o mesmo laboratório, mesmo nome e mesma dosagem em um mesmo depósito, temos como retorno o erro 409 (Conflict), medicamento já cadastrado. Se passar dados inválidos, temos como retorno o status 400 (Bad Request).
|  Atualização dos dados de Medicamentos | Acessamos HTTP PUT no path /api/medicamentos/{identificador}. No body, passamos os campos a serem alterados. Se estiver tudo certo, temos como retorno o status 200 (OK) e no campo de resposta retorna os dados do medicamento atualizado. Se o identificador não estiver no banco de dados, temos um erro 404 (Not Found). Se passar algum dado que não pode ser alterado ou inválido, temos como retorno o status 400 (Bad Request).
| Listagem de Medicamentos pelo Tipo | Acessamos HTTP GET no path /api/medicamentos. Aqui, vamos listar os medicamentos de acordo com o seu tipo (controlado, não controlado). Por exemplo, para buscar medicamentos controlados, podemos acessar /api/medicamentos?tipo=CONTROLADO. Se estiver tudo certo, temos o status 200 (OK) com a lista de medicamentos.
|  Listagem de Medicamentos pelo identificador | Acessamos HTTP GET no path /api/medicamentos/{identificador}. Se o identificador estiver no banco de dados, temos como retorno o status 200 (OK), retornando os dados do medicamento. Caso não esteja no banco de dados, retorna um erro 404 (Not Found).
| Exclusão de Medicamentos | Acessamos HTTP DELETE no path /api/medicamentos/{identificador}. Neste caso, se o identificador estiver no banco de dados, temos como retorno o status 204 (No Content). Se não estiver no banco de dados, temos como retorno o erro 404 (Not Found).

## Organização do projeto
Para realizar este projeto usei o método Kamban, onde montei os cards para cada endpoint dentro do trello.

## Melhorias Futuras 
Como melhorias futuras eu acrescentaria:
* Criar um enpoint para excluir um usuário;
