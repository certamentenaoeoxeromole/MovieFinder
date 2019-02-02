import axios from "axios";
const __api__ =
  "https://api.themoviedb.org/3/search/movie?api_key=614a724250c9cc81548917d720ba1994&language=pt-br&query=";

var axiosInstance = axios.create({
  baseURL: __api__
});

export default axiosInstance;
