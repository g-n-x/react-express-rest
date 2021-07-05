import { Sequelize } from 'sequelize';
const db = new Sequelize('mydb', 'postgres', 'postgres', {
    host: '172.26.80.1',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export default db;
