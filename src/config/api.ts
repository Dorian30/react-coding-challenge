import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_COVID_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export default api;
