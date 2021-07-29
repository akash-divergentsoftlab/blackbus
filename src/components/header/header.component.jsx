import React from 'react';
import './header.styles.scss';



// components imports 

function Header() {
    return (
        <div className='header'>
            <div className="topnav" id="myTopnav">
                <a href="#home" className="active">Home</a>
                <a href="#news">Login</a>
                <a href="#contact">SignUp</a>
            </div>
        </div>
    )
}

export default Header;

