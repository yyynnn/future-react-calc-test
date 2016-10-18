import React from "react";

import Table from "./Section/Table";

export default class Section extends React.Component {
    render() {
        const sectionStyles = {

            backgroundColor: "#fcfcfd"
        };

        return (
            <section class="section" style={sectionStyles}>
                <div class="container">
                    <div class="content has-text-centered">
                        <div class="content">
                            <p>Оптимизация кредита: по сумме</p>
                            <h1 class="is-large ">РАСЧЕТ ПЛАТЕЖЕЙ</h1>
                        </div>
                        <Table/>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <a class="button-future-margin button-future button is-medium">Сохранить расчеты</a>
                            <a class=" button is-medium button-future-inactive">Распечатать</a>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
