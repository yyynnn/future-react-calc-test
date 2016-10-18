import React from "react";

export default class TableButton extends React.Component {

    render() {

        const buttonTableStyle = {
            textAlign: "center"
        };

        return (
            <div style={buttonTableStyle}>

                <a class="button-future button is-medium" onClick={this.props.open}>Добавить платеж
                </a>

            </div>
        );
    }
}
