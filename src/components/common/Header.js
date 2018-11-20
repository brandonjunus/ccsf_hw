import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <h1>
            <Link to="/" className="Header">ABC Seminar</Link>
        </h1>

    );
}

export default Header;