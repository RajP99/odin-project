import React from 'react'
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <div>
            <Link to="/">PLANETARIUM</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/checkout">Cart</Link>
        </div>
    )
}

export default Navbar
    