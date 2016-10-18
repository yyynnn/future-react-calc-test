import React from "react";

import Footer from "./Footer";
import Section from "./Section";
import Header from "./Header";

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}
