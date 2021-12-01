import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gama-store.herokuapp.com/',
});

export default api;
