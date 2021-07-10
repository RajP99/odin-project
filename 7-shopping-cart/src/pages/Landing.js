import React from 'react'
import { Link } from 'react-router-dom'; 

const Landing = () => {
    return (
        <div>
            <h1>PLANETARIUM</h1>
            <h2>The Sky is NOT the limit. Beyond the universe is.</h2>
            <Link to="/shop">
                <button>See Inventory</button>
            </Link>
        </div>
    )
}

export default Landing
