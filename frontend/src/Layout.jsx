import Footer from "./components/footer.jsx";
import Nav from "./components/navbar.jsx";
import { Outlet } from "react-router-dom";
import './index.css'

function Layout({users}){

    

    return (
        <>
        <Nav users={users}/>
        <Outlet context={{users}}/>
        <Footer/>
        </>
    )
}
export default Layout;