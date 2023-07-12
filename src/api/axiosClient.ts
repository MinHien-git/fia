import axios from "axios";
import queryString from "query-string";
//https://fia-backend.vercel.app
//http://localhost:8080
const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
