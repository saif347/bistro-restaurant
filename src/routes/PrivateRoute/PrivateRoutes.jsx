import { useContext } from "react";
import { GlobalContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {
    const {user, loading}= useContext(GlobalContext)
    const location = useLocation()
    if (loading){
        return <span className="loading loading-dots loading-md"></span>
    }

    if(user?.email){
        return children
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};
PrivateRoutes.propTypes= {
    children:PropTypes.node.isRequired
}


export default PrivateRoutes;