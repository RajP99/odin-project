import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/Navbar'
import Landing from './pages/Landing'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
