import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/ourShop/OurShop";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
// import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import MyCart from "../Pages/myCart/MyCart";


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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path:'cart',
                element: <MyCart></MyCart>
            },
        ]
    }
]);