import React from "react";

export default class Header extends React.Component {

    render() {
        const headerStyles = {
            backgroundColor: "#fff",
            borderBottom: "1px solid #d4d8df"
        };
        const navToggleStyles = {
            top: "15px"
        };
        const headerImg = {
            margin: "0px 10px"
        };
        const headerHomeIcon = {
            top: "-2px",
            position: "relative"
        };
        const headerUserIcon = {
            width: "48px"
        };

        return (
            <header class="nav" style={headerStyles}>
                <div class="container level has-text-centered">

                    <div class="hero-body has-text-centered level-left">
                        <img style={headerImg} src={'images/logo_icon.svg'}/>
                        <a class="level-item logo-link" href="/#">Ипотечный калькулятор</a>
                    </div>
                    <div></div>
                    <div class="has-text-centered nav-right nav-menu">
                        <img style={headerImg,
                        headerHomeIcon} src={'images/home_icon.svg'}/>
                        <a href="#" class="nav-item is-active">Главная</a>
                        <img style={headerImg} src={'images/chat_icon.svg'}/>
                        <a href="#" class="nav-item">Вопрос-ответ</a>
                        <img style={headerUserIcon} src={'images/user_icon.svg'}/>
                        <a href="#" class="nav-item">Логин ⯆</a>
                    </div>
                    <span id="nav-toggle" class="has-text-centered nav-toggle" style={navToggleStyles}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
            </header>
        );
    }
}
