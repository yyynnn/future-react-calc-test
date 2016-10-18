import React from "react";

export default class Footer extends React.Component {
    render() {
        const footerStyles = {
            backgroundColor: "#fff",
            borderTop: "1px solid #d4d8df"
        };

        return (

            <footer class="footer" style={footerStyles}>
                <div class="container">

                    <div class="columns level ">
                        <div class="column is-9-desktop">
                            <p>© 2016 Ипотечный калькулятор. Любое копирование информации запрещено.<a href="#">Privacy</a>
                            </p>
                        </div>
                        <div class="column has-text-right">

                            <a href="#0" class="expand-link">
                                <img class="icon-expand" src={'images/vk.svg'}/>
                                <img class="icon-contract" src={'images/vk_hover.svg'}/>
                            </a>

                            <a href="#0" class="expand-link">
                                <img class="icon-expand" src={'images/od.svg'}/>
                                <img class="icon-contract" src={'images/od_hover.svg'}/>
                            </a>

                            <a href="#0" class="expand-link">
                                <img class="icon-expand" src={'images/facebook.svg'}/>
                                <img class="icon-contract" src={'images/facebook_hover.svg'}/>
                            </a>

                        </div>
                    </div>

                </div>
            </footer>

        );
    }
}
