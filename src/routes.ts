import express, { response } from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'hdsuf'});
});

export default routes;