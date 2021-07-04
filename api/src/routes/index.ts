import { Router } from 'express';
import Login from './modules/Login';

const routes = Router();

routes.use('/login', Login);

export default routes;
