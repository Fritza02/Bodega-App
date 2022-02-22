import React from 'react';
import imgLogo from '../img/L.png'
import '../Components/css/Navbar.css'

const Navbar = () => {
    return ( 
        <nav className=''>
            <div className='container'>
            <div className='logo'>
                    <img src={imgLogo} alt="" className='imgLogo'/>
                </div>
            </div>
        </nav>
);
}

export default Navbar;