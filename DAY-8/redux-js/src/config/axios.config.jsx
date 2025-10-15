import axios from "axios";

const api = axios.create({
  timeout: 10000,
  baseURL: "https://fakestoreapi.com",
});
export default api;
