import axios from "axios";

const BACKEND_URL= import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('alfretyuiopwerqazxcnosrew');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        delete config.headers.Authorization; // Limpia si no hay token
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
export default axiosInstance;