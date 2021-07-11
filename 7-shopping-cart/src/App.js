import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/Navbar'
import Landing from './pages/Landing'
import Shop from './pages/Shop'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/shop" component={Shop}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
