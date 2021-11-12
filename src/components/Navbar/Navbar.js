import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
            <div className="navbar">
                <div className="navbar-heading">
                    <h1>Vennela <span>App</span></h1>
                </div>
                <div>
                    <ul>
                      <Link to="/"> {" "}<li>Home</li></Link>
                       <Link to="/categories"> {" "} <li>Categories</li></Link>
                      
                    </ul>
                </div>
            </div>
    )
}

export default Navbar
