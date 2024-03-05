import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import Navbar from "../Pages/shared/navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;