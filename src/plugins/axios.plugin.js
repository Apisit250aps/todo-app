import axios from 'axios';

const apiClient = axios.create({
  // Add any default configuration here
  baseURL: 'http://localhost:3000/', // Example base URL for your Express.js backend
  timeout: 5000, // Example timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally, you can add interceptors for request/response handling
apiClient.interceptors.request.use(
  (config) => {
    // Add any request interceptors here
    // For example, you can add a CSRF token to every request
    config.headers['X-CSRF-TOKEN'] = localStorage.getItem('csrfToken');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;