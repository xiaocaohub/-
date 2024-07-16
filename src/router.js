import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import App from "./App";

import Login from "./pages/Login";
import LayoutCon from "./pages/LayoutCon";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
class IndexRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <App>
                    <Route path="/home" render={()=>{
                        return(<LayoutCon>
                            
                            <Route path="/home" component={Home} onEnter={()=>{document.title="首页"}}></Route>
                        </LayoutCon>)
                    }}>
                       </Route>
                   
                
                    <Route path="/login" component={Login} onEnter={()=>{document.title="登录"}}></Route>   
                    

                    <Route path="/demo" component={Demo}></Route>
                </App>
            </BrowserRouter>
        )
    }
}



export default IndexRouter;