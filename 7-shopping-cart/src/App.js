import React from 'react'
import { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/Navbar'
import Item from './components/Item'
import Landing from './pages/Landing'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'

const App = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index < 0) {
      item["quantity"] = 1;
      setCart([...cart, item])
    } else {
      const newCart = cart.slice();
      newCart[index].quantity++;
      setCart(newCart);
    }
  }

  const removeItemFromCart = (item, removeAll) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index > -1) {
      const newCart = cart.slice();
      removeAll ?  newCart.splice(index, 1) : newCart[index].quantity--;
      setCart(newCart);
    } else {
      console.error(
        "Couldn't remove item from shopping cart: There's no such item in the shopping cart."
      );
    }
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/shop/:id" render={(routeProps) => (
            <Item
              itemId={routeProps.match.params.id} addItemToCart={addItemToCart}>
            </Item>
          )}></Route>
          <Route exact path="/checkout" render={() => (
            <Checkout
              cart={cart} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart}>
            </Checkout>
            )}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App


