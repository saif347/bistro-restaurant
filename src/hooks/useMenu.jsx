import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading]= useState(true)
    const axiosPublic = useAxiosPublic()

    axiosPublic.get('/menu')
    .then(res =>{
        setMenu(res.data)
        setLoading(false)
    })
    return [menu, loading]    
};

export default useMenu;