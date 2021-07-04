import express, { Router } from 'express';

const routes = Router();

routes.use(express.json());

routes.post('/', (req, res) => {
    let { username, email, password } = req.body;

    if(username == 'admin'
    && email == 'admin@domain.com'
    && password == 'admin') {
        console.log('admin account');
        res.status(200).json({
            status: 'ok'
        });
    } else {
        res.status(200).json({
            status: 'error'
        });
    }
});


export default routes;
