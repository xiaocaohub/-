import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./pages/Layout";

import RecommendeGood from "./pages/RecommendeGood";
import ProductRoom from "./pages/ProductRoom";
import ProductRoomDetail from "./pages/ProductRoomDetail";
import SeriesSet from "./pages/SeriesSet";
import SeriesSetList from "./pages/SeriesSetList";
import Artist from "./pages/Artist";
import ArtistDetail from "./pages/ArtistDetail";

import Cart from "./pages/Cart";

import CheckCart from "./pages/CheckCart";
import Us from "./pages/Us";
import InfoAgreement from "./pages/InfoAgreement";

import LuoKeAgreement from "./pages/LuoKeAgreement";
import Pay from "./pages/Pay";
import Register from "./pages/Register";

import PeopleHome from "./pages/PeopleHome";
import PayOver from "./pages/PayOver";
class IndexRouter extends React.Component {
    render () {
        return (
            <BrowserRouter basename="/build">
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/luoke/agreement" component={LuoKeAgreement}></Route>
                        <Route path="/info/agreement" component={InfoAgreement}></Route>
                 
                        <Route path="/people" component={PeopleHome}></Route>
                        <Route path="/" render={
                            ()=><Layout>
                                    <Route path="/" exact component={Home}></Route>
                                    <Route path="/recommendegood" component={RecommendeGood}></Route>                   
                                    <Route path="/productroom" exact component={ProductRoom}></Route>       
                                    <Route path="/productroom/detail/:id" component={ ProductRoomDetail }></Route>
                                    <Route path="/series" exact component={SeriesSet}></Route>
                                    <Route path="/series/list/:id" component={SeriesSetList}></Route> 
                                    <Route path="/artist" exact component={Artist}></Route>
                                    <Route path="/artist/detail/:id" component={ArtistDetail}></Route
                                    >
                                    <Route path="/cart" component={Cart}></Route>
                                    <Route path="/checkcart" component={CheckCart}></Route>
                                    <Route path="/pay" exact component={Pay}></Route>
                                    <Route path="/us" component={Us}></Route>

                                    <Route path="/pay/over" component={PayOver}></Route>
                            </Layout>

                        }></Route>
                      
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}

export default IndexRouter;