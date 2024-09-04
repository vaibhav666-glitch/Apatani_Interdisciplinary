import Footer from "./components/footer.jsx";
import Nav from "./components/navbar.jsx";
import { Outlet } from "react-router-dom";
import './index.css'
function Layout(){
    return (
        <>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;