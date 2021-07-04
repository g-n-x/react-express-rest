import express from 'express';
import cors from 'cors';
import routes from './routes';
import db from './database';

db.authenticate()
    .then(() => console.log('db connected'))
    .catch(err => console.log('error: ' + err));

const app = express();

app.use(cors());

app.get('/', (_req, res) => {
    res.status(200).send('go away');
});

app.use('/', routes);

app.listen(5555);

console.log('listening on port 5555');
