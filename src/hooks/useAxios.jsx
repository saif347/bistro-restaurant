import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth/useAuth";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxios = () => {
    const navigate = useNavigate()
    const {logOut}= useAuth()
    axiosSecure.interceptors.request.use(config=>{
        const token = localStorage.getItem('jwt-token');
        console.log('req stopped by interceptor', token)
        config.headers.authorization = `Bearer ${token}`;  // eslint-disable-line
        return config;
      }, error => Promise.reject(error));

    //    Add a response interceptor to handle responses
    axiosSecure.interceptors.response.use(function(response){
        return response
    },async (error)=>{
        const status = error.response.status;
        console.log(error);
        if(status === 401 ||  status === 403 ||  status === 500 ) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error) 
    })

    return axiosSecure
};

export default useAxios;