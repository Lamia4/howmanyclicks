import React from 'react';
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
    return (
        <div className="container">
            <div className="logo">
                <img
                    src="https://www.logaster.ru/blog/wp-content/uploads/2018/11/logo-animation3.gif"
                    alt="bcycle"
                />
            </div>
            
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact" >Contact</Link></li>

            </ul>

            <div className="login">
                <Link to="/login" ><button > Login </button></Link>
            </div>
        </div>

    )
}

export default Header
