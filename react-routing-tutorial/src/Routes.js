import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/profile" component={Profile}></Route>
                    <Route exact path="/" component={App}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
