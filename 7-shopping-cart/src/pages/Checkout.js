import React from 'react'
import "../styles/Checkout.css"

const Checkout = ({ cart, addItemToCart, removeItemFromCart }) => {
    const images = require.context("../assets/images", true);

    const changeQuantity = (e, item) => {
        if (e.target.value > item.quantity) {
            addItemToCart(item);
        } else {
            removeItemFromCart(item);
        }
    }

    return (
        <div>
            {cart.length > 0 ?
                (<ul>
                    {cart.map((item) => {
                        let img = images("./" + item.imgs[0]);
                        return (
                            <div className="item-container-checkout">
                                <img className="image-checkout" src={img.default} alt={item.name}></img>
                                <div className="item-details-checkout">
                                    <h1>{item.name}</h1>
                                    <h1>{item.price}</h1>
                                    <br></br><br></br><br></br>
                                    <button onClick={() => removeItemFromCart(item, "All")}>
                                        Remove item
                                    </button>
                                    <div className="quantity">
                                        <input type="number" id="quantity" name="quantity" min="1" value={item.quantity} 
                                        onChange={(e) => changeQuantity(e, item)}></input>
                                    </div>
                                </div>
                            </div>
                        )})
                    }

                    <p>
                    Total:{" "} {cart.reduce((total, item) => {
                        return total + item.price * item.quantity;
                        }, 0).toFixed(2)}
                    </p>
                </ul>)
            : (<h1>Your Cart is Empty</h1>)
            }
        </div>
    )
}

export default Checkout