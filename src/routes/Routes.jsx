import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/ourShop/OurShop";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import MyCart from "../Pages/myCart/MyCart";
import AllUser from "../Pages/dashboard/allUser/AllUser";
import AdminRoute from "./adminRoute/AdminRoute";
import AddItems from "../Pages/dashboard/addItems/AddItems";
import ManageItem from "../Pages/dashboard/manageItem/ManageItem";
import UpdateItem from "../Pages/dashboard/updateItem/UpdateItem";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>,
            },
            {
                path: '/shop/:category',
                element: <OurShop></OurShop>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path:'cart',
                element: <MyCart></MyCart>
            },

            // admin dashboard
            {
                path: 'addItem',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'allUser',
                element:<AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                // loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
                loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
]);