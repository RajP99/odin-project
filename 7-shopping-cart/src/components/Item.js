import React from 'react'
import { Link } from 'react-router-dom'; 
import Catalog from "../assets/catalog.json"
import "../styles/Shop.css"

const Item = ( {itemId, addItemToCart} ) => {
    
    const item = Catalog.find((i) => i.id == itemId);
    const images = require.context("../assets/images", true);
    let img = images("./" + item.imgs[0]).default;

    return (
        <div>
            <img className="item" src={img} alt={item.name}></img>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>Velit deserunt consequat aliqua sit incididunt minim. Quis excepteur Lorem enim incididunt ullamco fugiat nostrud laborum irure laborum amet. Et reprehenderit consequat nostrud elit nostrud culpa non excepteur laborum officia. Veniam commodo enim laborum voluptate quis dolore sunt enim anim quis. Ea laboris irure adipisicing cupidatat aliquip elit aute do duis eu irure.</p>
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
            <Link to="/shop">
                <button>Back to Shop</button>
            </Link>
            <Link to="/checkout">
                <button>Proceed to Checkout</button>
            </Link>
        </div>
    )
}

export default Item
