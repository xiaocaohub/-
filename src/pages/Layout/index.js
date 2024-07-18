import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Layout extends React.Component {
    constructor (props) {

        super(props)
    }
    render () {

        return (
            <div>
                


                <Header></Header>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}


export default Layout;