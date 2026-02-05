import axios from "axios";

const API = axios.create({
  baseURL: "http://10.10.157.155:8083"
});

API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
