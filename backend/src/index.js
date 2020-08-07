const express = require('express');
const {uuid} = require('uuidv4');

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
   * 
   * Estamos utilizando o uuidv4 para criarmos id de forma dinâmica para nosso projeto.
   */

   /**
    * Middlewares:
    * Interceptador de requisições, podendo interromper totalmente a requisicão ou pode alterar dados da requisição.
    */

const projects = []; //Vamos armazenar nossos dados na memória. Claro que isso não deve ser feito em produção.

app.get('/projects', (request, response) => {
    const {title} = request.query;

    const results = title ? projects.filter(project => project.title.includes(title)) : projects;

    return response.json(results);
});

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;

    let project = {
        id: uuid(),
        title,
        owner,
    }

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({error: 'Project not found.'});
    }

    const project = {
        id,
        title,
        owner,
    }

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({error: 'Project not found.'});
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});


app.listen(3333, () => {
    console.log('Back-end started! 🚀');
});