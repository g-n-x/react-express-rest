import { Sequelize, Options } from 'sequelize';
import config from './config/config';
const db = new Sequelize(config.production as Options);

export default db;
