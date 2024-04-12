import axios from "axios";
import useAuth from "./useAuth/useAuth";
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxios = () => {
    const {logOut}= useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('jwt-token');
        // console.log('req stopped by interceptor', token)
        config.headers.authorization = `Bearer ${token}`;  // eslint-disable-line
        return config;
      }, function(err){
        return Promise.reject(err);
      });

    //   res
    axiosSecure.interceptors.response.use(function(response){
        return response
    }, function(err){
        const  status = err.response?.status;
        if (status === 401 || status === 403 ) {
            logOut()
            navigate("/login")
        }
        console.log('error in the interceptor',err, err.response.status)
        return Promise.reject(err)
    })

    return axiosSecure
};

export default useAxios;