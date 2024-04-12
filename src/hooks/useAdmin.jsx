import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth/useAuth";
import useAxios from "./useAxios";


const useAdmin = () => {
    const secureAxios = useAxios()
    const {user}= useAuth()
    const {data: isAdmin, isPending: isAdminLoading}= useQuery({
        queryKey: [user?.email,],
        queryFn: async()=>{
            const res = await secureAxios.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
