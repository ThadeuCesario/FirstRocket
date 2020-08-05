const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET -> Buscar informações do back-end.
 * POST -> Criar alguma informação no back-end.
 * PUT/PATCH -> Alterar alguma informação no back-end.
 * DELETE -> Deletar alguma informação no back-end.
 */

app.get('/', (request, response) => {
    return response.json({message: 'Hello world!'});
});

app.listen(3333, () => {
    console.log('Back-end started! 🚀');
});