# API de BLogs  
  
  ## Contexto  
  
	Rotas desenvolvidas pensando em um blog de post onde usuários podem públicar textos, fazer login e visualizar o post de outros usuários.

  ## Tecnologias utilizadas:
  
1. ORM => Sequelize;
2. Banco de Dados MySQL;
3. Node.Js;
4. Express;
5. Mocha;
6. Chai;
7. Sinon.

Rotas desenvolvidas:
1. Requisição do tipo GET:  
* '/user/:id' = Retorna um usuário baseado em um id __passado pelos parâmetros da rota__. 
> Nescessário token recebido no login para autenticação.

2 - Requisição do tipo GET:  
* '/user' = Retorna os usuários cadastrados no banco.
> Nescessário token recebido no login para autenticação.

3 - Requisição do tipo POST:  
* '/user' = Cria um novo usuário no banco com os parâmetros __recebidos no body(corpo) da requisição__.  
Sendo eles no formato:  

```javascript
{
	"displayName": "Henrique",
	"email": "henrique123@email.com",
	"password": 1234567,
	"image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheconversation.com%2Fphysics-and-psychology-of-cats-an-improbable-conversation-176020&psig=AOvVaw3XcWd92ooaY8a_Ef6gCh7m&ust=1650433624563000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMiZrsK2n_cCFQAAAAAdAAAAABAD"
}
```
> Retorna um token JWT que será utilizado para autenticar o acesso.

4. Requisição do tipo POST:  
* '/login' = Valida o login do usuário com base nos __parãmetros passados no body da requisição__.  
Sendo eles no formato:  

```javascript
{
	email: 'henrique123@email.com',
	password: 1234567 // Password deve conter mais que 6 caracteres;
}
```
> Retorna um token JWT que será utilizado para autenticar o acesso.

5. Requisição do tipo GET:  
* '/categories' = Retorna todas as categorias salvas no banco de dados.
> Nescessário token recebido no login para autenticação.

6 . Requisição do tipo POST:  
* '/categories' = Cria um nova categoria no banco de dados com base nos __parâmetros recebidos no body da requisição__.  
Sendo eles no formato:  

```javascript
{
	name: 'Henrique',
}
```
> Nescessário token recebido no login para autenticação.

7. Requisição do tipo POST:  
* '/post' = Cria um post no banco de dados com base no __parâmetros recebidos no body da requisição__.  
Sendo eles no formato:  

```javascript
{
	title: 'Brasil busca o hexa em 2022',
	categoryId: 1,
	content: 'O Brasil entrara em campo na copa de 2022 para buscar o tao sonhado hexa',
}
```
> Nescessário token recebido no login para autenticação.

8. Requisição do tipo GET:  
* '/post' = Retorna os dados dos posts, juntamente com informações do usuário que o publicou e informações de sua categoria.
> Nescessário token recebido no login para autenticação.

Em contínuo desenvolvimento...
