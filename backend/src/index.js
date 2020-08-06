const express = require('express');
const { json } = require('express');

const app = express();
app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET -> Buscar informações do back-end.
 * POST -> Criar alguma informação no back-end.
 * PUT/PATCH -> Alterar alguma informação no back-end.
 * DELETE -> Deletar alguma informação no back-end.
 * 
 * Não há problema de utilizar rotas com o mesmo recurso porém com o métodos variando.
 * Veja abaixo que tenho duas rotas com o recurso de projects. Porém os métodos são diferentes.
 * 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Filtros e paginação
  * Route Params: Identificar recursos na hora de atualizar ou deletar
  * Request Params: Conteúdo na hora de criar ou editar um recurso. (JSON)
  * 
  * 
  * Para acessarmos os query params, basta utilizarmos o "request.query".
  */

  /**
   * Precisamos utilizar o "app.use(express.json());". Antes de nossas rotas porque no Node o funcionamento é feito
   * de formar linear. 
   * Caso contrário vamos ter sempre um request.body retornando undefined.
   * 
   */

app.get('/projects', (request, response) => {
    const {title} = request.query;
    console.log(title);

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response) => {
    const body = request.body;

    console.log("verificando o body", body);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
});


app.listen(3333, () => {
    console.log('Back-end started! 🚀');
});