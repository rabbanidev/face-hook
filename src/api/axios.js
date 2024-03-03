import axios from "axios";
import config from "../config";

const api = axios.create({
  baseURL: config.baseUrl,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // console.log(error.response);

    if (error.response && error.response) {
      error = { ...error.response };
    }

    return Promise.reject(error);
  }
);

export default api;
