## API de BLogs

Rotas desenvolvidas pensando em um blog de post onde usuários podem públicar textos, fazer login e visualizar o post de outros usuários.

Desenvolvida utilizando ORM, Sequelize, Modelando Banco de Dados MySQL.
Node.Js com a biblioteca Express.

Rotas desenvolvidas:
1 - Requisição do tipo GET '/user/:id' = Retorna um usuário baseado em um id passado pelos parâmetros da rota. Nescessário token recebido no login para autenticação.

2 - Requisição do tipo GET '/user' = Retorna os usuários cadastrados no banco. Nescessário token recebido no login para autenticação.

3 - Requisição do tipo POST '/user' = Cria um novo usuário no banco com os parâmetros recebidos no body(corpo) da requisição. Sendo eles no formato objeto { displayName, email, password, image }. Retorna um token JWT que será utilizado para autenticar o acesso.

4 - Requisição do tipo POST '/login' = Valida o login do usuário com base nos parãmetros passados no body da requisição. Sendo eles no formato objeto { email, password }. Retorna um token JWT que será utilizado para autenticar o acesso.

5 - Requisição do tipo GET '/categories' = Retorna todas as categorias salvas no banco de dados. Nescessário token recebido no login para autenticação.

6 - Requisição do tipo POST '/categories' = Cria um nova categoria no banco de dados com base nos parâmetros recebidos no body da requisição. Sendo eles no formato objeto { name }. Nescessário token recebido no login para autenticação.

7 - Requisição do tipo POST '/post' = Cria um post no banco de dados com base no parâmetros recebidos no body da requisição. Sendo eles no formato objeto { title, categoryIds, content }. Nescessário token recebido no login para autenticação.

8 - Requisição do tipo GET '/post' = Retorna os dados dos posts, juntamente com informações do usuário que o publicou e informações de sua categoria. Nescessário token recebido no login para autenticação.

Em contínuo desenvolvimento...