import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://stem-server.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
