import express, { Router, Request, Response } from 'express';

const routes = Router();

routes.use(express.json());

routes.post('/', (req: Request, res: Response) => {
    let { username, email, password } = req.body;

    if(username == 'admin'
    && email == 'admin@domain.com'
    && password == 'admin') {
        console.log('admin account');
        
        res.statusCode = 200;
        res.json({
            status: 'ok'
        });
    } else {
        res.statusCode = 403;
        res.json({
            status: 'error'
        });
    }
});


export default routes;
