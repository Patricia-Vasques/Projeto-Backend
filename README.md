# Pharmacy Central System 


## Descrição do Projeto final do módulo 2 - Backend

Fui convidada pelo  LabPharmacy Inc, uma renomada empresa do ramo de tecnologia farmacêutica para desenvolver a parte do backend do sistema chamado Pharmacy Central System, que é um sistema online criado para resolver problemas de gerenciamento de depósitos e medicamentos, proporcionando um ambiente digital eficiente e seguro para o controle e organização desses recursos.
Fui convidada pelo  LabPharmacy Inc, uma renomada empresa do ramo de tecnologia farmacêutica para desenvolver a parte do backend do sistema chamado Pharmacy Central System, que é um sistema online criado para resolver problemas de gerenciamento de depósitos e medicamentos, proporcionando um ambiente digital eficiente e seguro para o controle e organização desses recursos.

Com esse sistema o time de gestão poderá cadastra e gerenciar depósitos farmacêuticos, registrando medicamento com informações detalhadas, contralar o estoque, além de garantir um acesso seguro aos usuários do sistema.

## Tenologias Utilizadas
 O backend do Pharmacy Central System foi desenvolvido utilizando as seguintes tecnologias:
 
- Node.js: É uma plataforma de desenvolvimento JavaScript para aplicações de rede e servidor.
- Express.js: Frameword web para Node.js, que facilita a criação de APIs.
- Sequelize: Biblioteca que interege com o banco de dados relacional como o PostgreSQL.
- PostgreSQL: Banco de dados relacional, que será utilizado para armazenar os dados do sistema.
- DBeaver: Gerenciador de banco de dados SQL.


## Como executar o sistema Pharmacy Central System

Para executar o Pharmacy Central System em uma máquina local, siga as seguites instruções:

1. Certifique-se de ter o Node.js instalado em sua máquina

2. Clone o repositório do Phamacy Central System em sua máquina local:

```sh
https://github.com/Patricia-Vasques/Porjeto-Backend.git
```

3. Acesse o diretorio do projeto :

```sh
cd Projeto Backend
```

4. Instale as dependências para rodar o projeto:

```sh
npm install
```

5. Inicie o servidor

```sh
npm rum start:dev
```

6. Crie um banco de dados PostgreSQL e atualiza as configurações de conexão do arquivo .envexemple, com as informações do seu banco de dados.
Aqui você precisará ter um gerenciador database configurado. Neste projeto usei o DBeaver.


7. Para rodar as migrations para que as tabelas sejam inseridas em seu banco de dados fazer o comando:

```sh
npx sequelize db:migrate
```

8. Agora você já pode acessar o Pharmacy Central System em seu navegador através do endereço, usei o ThunderClient para os testes ` http://localhost:3000`

![image](https://github.com/Patricia-Vasques/Porjeto-Backend/assets/115937834/f58e62f2-bdea-44b5-a73d-e0ea57b38806)

## Endpoint criados e suas funcionalidades
| Endpoint | Funcionalidade |
| --- | --- |
| Cadastro de Usuário  | Para cadastrar um usuário acesse HTTP POST no path /api/usuarios e no body preencha os campos obrigatórios, caso esses campos não estajam corretos retorna um erro 400(Bad Request). Para cadastrar um usuário o cpf e email não podem estar contidos no banco de dados, se já estiver retorna um erro 404(Not Found) de usuário cadastrado. Se o cadastro for feito corretamente retorna um status 201 com os dados do usuário.|
| Login Uusário | Para fazer o login acessamos HTTP POST /api/usuarios/login e  colocamos o email e senha no body, caso esse login esteja com email ou senha incorretos vai retornar um erro 400(Bad Request), caso o email não exista no banco de dados retorna um erro 404(Not Found). Se todos os campos estiverem corretos retorna o status 200(OK) e um Token(importante!! Esse token será usado para acessar todos os outros endpoinsts, pois são privados!). |
| Atualização dos dados do usuário | Para atualizar os dados do usuário acessamos HTTP PATCH no path /api/usuarios/{identificador}, ao colocarmos um identificador válido temos como retorno o status 204 (No Content), caso o identificador não esteja no cadastrado no banco de dados teremos como retorno o erro 404(Not Found) e se a requisição estiver com dados inválidos teremos o erro 400(Bad Request).
| Atualização do Status do Usuário | Acessamos HTTP PATCH no path /api/usuarios/{identificador}/status se o identificador estiver cadastrado no banco de dados termeos como retorno o status 200(OK) e no campo de resposta teremos os dados atualizados com o status alterado, caso o identificador não esteja cadastrado teremos como retorno o erro 404(Not Found) e se tivemos algum erro na requisição com os dados nválido teremos o erro 400(Bad Request).
| Atualização da senha do Usuário | Acessamos HTTP PATCH no path /api/usuarios/{identificador}/senha e no body passamos a nova senha, neste caso se o identificador existir e a senha cumprir os requisitos teremos como retorno o status 204(No Content), caso não seja encontrado o identidicador no banco de dados temos um erro 404(Not Found) e se tiver dados inválidos na requisição teremos o erro 400 (Bas Request).
| Listagem de Usuário pelo Identificador | Acessamos HTTP GET no path /api/usuarios/{identificador}, aqui caso o identificador estava cadastrado no banco de dados temos como retorno o status 200 (OK), retornando os dados do usuário, sem a senha e se o identificador não estiver cadastrado retorna um erro 404(Not Found).
| Cadastro de Depósito | Acessamos HTTP POST no path /api/depositos, no body preenchemos os campos obrigatório para cadastrar um depósito e ao verificar que está tudo certo temos um retorno de status 201 (Created), retornando no corpo de resposta dos dados cadastrado, caso a requisição esteja com dados inválidos temos o erro 400 (Bas Request). Se o CNPJ e Razão Social já estiverem cadastrados no banco de dados temos como retorno o erro 409(Conflict).
| Atualização dos dados de Depósitos | Acessamos HTTP PATCH no path /api/depositos/{identificador}, no body colocamos o item que queremos alterar(lembre que nem todos são possíveis alterar), se ocorrer tudo certo temos o status 204(No Content), caso o identificador passado não exista no banco de dados temos como retorno o erro 404(Not Found), se tiver erro nos dados da requisição temos o erro 400(Bad Request).
| Atualização do Status do Depósito no Sistema | Acessamos HTTP PATCH no path /api/depositos/{identificador}/status neste caso ao passamos um identificador válido temos como retorno o status 204 (No Content) e o status é alterado automático no banco de dados, caso o identificador não seja encontrado no banco de dados temos o erro 404(Not Found) e se tiver erro nos dados informados na requisição retorna um erro 400(Bas Request).
| Listagem de Depósitos | Acessamos HTTP GET no path /api/depositos neste caso vamos ter a listagem dos depósitos de acordo com o status onde podemos passar no query param /api/depositos?status=ATIVO por exemplo para buscar os depósitos ativos, se estiver tudo certo temos o status 200(OK) retornando a lista de depósitos.
| Listagem de Depósitos pelo Identificador | Acessamos HTTP GET no path /api/depositos/{identificador} se o identificador estiver no banco de dados temos como retorno 200(OK) com os dados do depósito, caso o identificador não esteja no banco de dados temos o erro 400(Nop Found).
| Exclusão de Depósito | Acessamos HTTP DELETE no path /api/depositos/{identificador}, para esta exclusão ocorrer não podemos ter medicamentos cadastrados neste depósito e não pode estar Ativo, se cumprir os requisitos temos como retorno 204(Content), caso não seja encontrado o identificador no banco de dados, ou tenha medicamentos, ou esteja ativo,  temos o erro 404(Not Found)
|  Cadastro de Medicamento | Acessamos HTTP POST no path /api/medicamentos, preenchemos os campos obrigatórios e se tudo estiver certo temos como retorno 201(Created), retornando no corpo da resposta os dados do medicamento cadastrado. Caso tente cadastrar um medicamento com o mesmo laboratório, mesmo nome, mesma dosagem em um memso depósito temos como retorno o erro 409(Conflict), medicamento já cadastrado. Se passar dados inválidos temos como retorno 400 (Bad Request).
|  Atualização dos dados de Medicamentos | Acessamos HTTP PUT no path /api/medicamentos/{identificador}. No body passamos os campos a serem alterados se estiver tudo certo temos como retorno 200(OK) e no campo de resposta nos retorna os dados do medicamento atualizado. Se o identificador não estiver no campo de dados, temos um erro 404(Not Foun). Se passar algum dado que não pode ser alterado ou inválido temos como retorno o erro 400(Bad Request)
| Listagem de Depósitos | Acessamos HTTP GET no path /api/medicamentos. Aqui vamos listar os medicamento de acordo com o seu tipo(controlado, não controlado), exemplo de como acessar /api/medicamentos?tipo=CONTROLADO, neste caso se estiver tudo certo temos como retorno o status 200(OK) com a lista de medicamentos.
|  Listagem de Medicamentos pelo identificador | Acessamos HTTP GET no path /api/medicamentos/{identificador}, se o identificador estiver no bando de dados temos como retorno 200(OK), retornando com os dados do medicamento, caso não esteja no bando de dados retorna um erro 404(Nto Found).
| Exclusão de Medicamentos | Acessamos HTTP DELETE no path /api/medicamentos/{identificador}. Neste caso se o identificador estiver no banco de dados temos como retorno 204(No Content), se não estiver no banco de dados temos como retorno o erro 404(Not Found)

## Relação entre as tabelas
Para este projeto fiz a seguinte relação:


![RelacaoTabelas](https://github.com/Patricia-Vasques/Porjeto-Backend/assets/115937834/bc3f55d5-c039-415d-93fb-6b49dd02f9f1)

## Organização do projeto
Para realizar este projeto usei o método Kanban, onde montei os cards para cada endpoint dentro do trello.

![trello](https://github.com/Patricia-Vasques/Porjeto-Backend/assets/115937834/66569bf1-eb33-4aeb-81d3-cf16928da7d4)


## Melhorias Futuras 
Como melhorias futuras eu acrescentaria:
* Criar um enpoint para excluir um usuário.
* Melhorar a segurança implementando o RBAC(Role-Based Access Control), fazendo um controle de acessos as funcionalidades.

