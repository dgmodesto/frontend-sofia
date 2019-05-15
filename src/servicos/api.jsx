import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sofia-api.herokuapp.com'
});

export default api;