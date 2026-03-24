import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-backend-url.com/api', // Replace with your backend URL
  timeout: 1000,
  headers: {'Content-Type': 'application/json'},
});

export default apiClient;