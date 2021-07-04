import { Router } from 'express';
import Login from './modules/Login';
import Home from './modules/Home';

const routes = Router();

routes.use('/login', Login);
routes.use('/home', Home);

export default routes;
