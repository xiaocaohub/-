import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import Login from "./pages/Login";
import RecommendeGood from "./pages/RecommendeGood";
import ProductRoom from "./pages/ProductRoom";
import SeriesSet from "./pages/SeriesSet";

import Artist from "./pages/Artist";
class IndexRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/recommendegood" component={RecommendeGood}></Route>
                        <Route path="/productroom" component={ProductRoom}></Route>

                        <Route path="/series" component={SeriesSet}></Route>
                        <Route path="/artist" component={Artist}></Route>
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}

export default IndexRouter;