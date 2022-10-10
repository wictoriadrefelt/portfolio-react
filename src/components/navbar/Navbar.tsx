import React from "react";
import NavBarItems from "./NavbarItems";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Navbar.css';


const NavBar : React.FC = () => {
    return (
        <Router>
            <NavBarItems/>
            <Routes>
               <Route path='/' />
            </Routes>
            <Routes>
               <Route path='/home' />
            </Routes>
        </Router>
    )

}


export default NavBar; 