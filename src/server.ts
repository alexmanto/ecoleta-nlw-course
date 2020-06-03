import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'sdad',
        'dfsa'
    ]);
});
app.listen(5000);