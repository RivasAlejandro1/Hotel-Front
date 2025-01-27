import axios from 'axios';


const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  config => {
    const loggedTokenUserJSON = localStorage.getItem('loggedTokenAppUser')
    const token = JSON.parse(loggedTokenUserJSON);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
