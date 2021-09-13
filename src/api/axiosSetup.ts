import axios from "axios";
const API_BASE_URL = "https://api.thecatapi.com/v1/";
const API_KEY = "ce21c853-8f68-4e8c-87bc-30083a30f1c9"; //should be in dev file for security reasons
axios.defaults.headers["x-api-key"] = API_KEY;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
export default axiosInstance;
