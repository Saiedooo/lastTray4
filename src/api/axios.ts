import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    // console.log("Token being used:", localStorage.getItem("token"));
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
