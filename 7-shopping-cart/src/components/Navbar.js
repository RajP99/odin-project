import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

const Navbar = ({ cartSize }) => {
    return (
        <div className="container-navbar">
            <Link to="/" className="text-nav left-nav">PLANETARIUM</Link>
            <Link to="/checkout" className="text-nav right-nav">Cart ({cartSize})</Link>
            <Link to="/shop" className="text-nav right-nav">Shop</Link>
        </div>
    )
}

export default Navbar
    