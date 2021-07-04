import axios from 'axios';

export const api = axios.create();
api.defaults.baseURL = 'http://localhost:5555';

// if something needs an interception
