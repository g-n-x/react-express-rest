import { Router } from 'express';

const routes = Router();

routes.post('/', (_req, res) => {
    res.status(200).json({
        status: 'ok'
    });
});

export default routes;
