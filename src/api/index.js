import axios from "axios";
import { clearToken } from "./auth";

//  Axiose secure with base url and credentials
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// interceptor response and checked for unAuthorized response middleWrae
axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("Interceptor Error", error);

    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      await clearToken();
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export default axiosSecure;
