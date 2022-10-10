import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';




const NavBarItems : React.FC = () => {
    const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};
    return (
       <div> 
        <ul className={open ? 'nav-links-active' : 'nav-links'}>
            <li className='nav-item'>
                <Link to="/" className='nav-link' onClick={() => setOpen(false)}>
                    Start
                </Link>
            </li>
            <li>
                <Link to="/contact" className='nav-link' onClick={() => setOpen(false)}>
                    Hello
                </Link>
            </li>
        </ul>

       </div>
    )

}


export default NavBarItems; 