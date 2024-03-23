import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import Navbar from "../Pages/shared/navbar/Navbar";


const MainLayout = () => {
    const location  = useLocation();
    const noHeaderFooter = location.pathname.includes("/login") || location.pathname.includes("/register");
    return (
        <div>
            { noHeaderFooter ||<Navbar></Navbar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;