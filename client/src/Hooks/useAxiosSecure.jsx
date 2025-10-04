import axios from "axios";

export const axiosSecur = axios.create({
  baseURL: `https://farflix-16cs.vercel.app`,
});
const useAxiosSecur = () => {
  axiosSecur.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosSecur;
};

export default useAxiosSecur;
