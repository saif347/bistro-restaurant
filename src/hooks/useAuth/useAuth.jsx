import { useContext } from "react";
import { GlobalContext } from "../../Provider/AuthProvider";


const useAuth = () => {
    const auth = useContext(GlobalContext)
    return auth
};

export default useAuth;