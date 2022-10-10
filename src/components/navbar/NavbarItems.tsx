import React from "react";
import { Link } from "react-router-dom";




const NavBarItems : React.FC = () => {
    return (
       <div> 
        <ol>
            <li>
                <Link to="/about"></Link>
            </li>
            <li>
                <Link to="/contact"></Link>
            </li>
            <li>
                <Link to="/about"></Link>
            </li>
            <li>
                <Link to="/about"></Link>
            </li>
        </ol>

       </div>
    )

}


export default NavBarItems; 