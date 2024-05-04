import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8888/api',
  withCredentials: true
});

apiClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      console.error('User chua login');
    }
    return Promise.reject(error);
  }
);

export const AuthService = {
  getAuth: async () => {
    try {
      const response = await apiClient.get('/get-auth');
      return response.data.user;
    } catch (error) {
      console.error('Failed to get authentication', error);
      throw error;
    }
  }
};


export default apiClient;
