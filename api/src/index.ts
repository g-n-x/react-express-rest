import express from 'express';
var cors = require('cors');
import routes from './routes';

const app = express();

app.use(cors());

app.get('/', (_req, res) => {
    res.status(200).send('go away');
});

app.use('/', routes);

app.listen(5555);

console.log('listening on port 5555');
