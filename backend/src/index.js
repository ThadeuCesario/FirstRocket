const express = require('express');

const app = express();

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
 */

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.put('/projects/:id', (request, response) => {
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