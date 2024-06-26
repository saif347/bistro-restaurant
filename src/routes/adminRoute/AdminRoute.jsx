import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth/useAuth";
import PropTypes from 'prop-types';


const AdminRoute = ({children}) => {
    const {user, loading}= useAuth()
    const [isAdmin, isAdminLoading]= useAdmin()

    const location = useLocation()
    if (loading || isAdminLoading){
        return <span className="loading loading-dots loading-md"></span>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to={'/'} state={{from: location}} replace></Navigate>

};

AdminRoute.propTypes ={
    children:PropTypes.node.isRequired
}
export default AdminRoute;