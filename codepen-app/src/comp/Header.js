import React from 'react';
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
    return (
        <div>
            <Link to="/" >  <h1 className="mainHeader" >CodePen Fun Club</h1> </Link>

            <ul>
                <Link to="/" > <li>Home</li></Link>
                <Link to="/login" > <li>Login</li></Link>
                <Link to="/errors" > <li>Errors</li></Link>

            </ul>
        </div>
    )
}

export default Header
