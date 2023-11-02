import axios from "axios";
import { useEffect } from "react";
import useAuthState from "./useAuthState";


const instance = axios.create({
  baseURL:'https://car-doctor-2023.vercel.app',
  withCredentials: true

});


const useAxiosintercaptor = () => {
  const { logOut } = useAuthState() || {}
  // request incaptor
  useEffect(() => {
    instance.interceptors.request.use(function (config) {
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    //   response incaptor
    instance.interceptors.response.use(function (response) {
      return response;
    }, async function (error) {
      if(error.response.status === 401 || error.response.status === 403){
        await logOut()
        console.log('log out')
      }
      return Promise.reject(error);
    });
  }, [])

  return instance
};

export default useAxiosintercaptor;