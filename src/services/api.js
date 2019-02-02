import axios from "axios";
const __api__ = "https://api.themoviedb.org/3/";

var axiosInstance = axios.create({
  baseURL: __api__
});

export default axiosInstance;
