import axios from "axios";

const API_STUDENT = axios.create({
  baseURL: "http://10.10.157.155:8084"
});

API_STUDENT.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API_STUDENT;
