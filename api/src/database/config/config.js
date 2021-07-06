require('dotenv').config();

export default {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "mydb",
    "host":   process.env.DB_HOST,
    "dialect": "sqlite3",
    "storage": "./mydb.sqlite3"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "mydb",
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}
