import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-color-1 ptb-10">
            <ul className="fix">
                <li className="floatleft"><Link to="/">Home</Link></li>
                <li className="floatleft"><Link to="/about">About Us</Link></li>
                <li className="floatright"><Link to="/add">Add Jewelry</Link></li>
            </ul>
            <div className="clear"></div>
        </nav>
    );
}

export default Navbar;
