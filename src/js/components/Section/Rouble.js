import React from "react";

export default class Rouble extends React.Component {

    render() {

        const roubleSymbol = {
            fontSize: "10.0pt",
            display: "inline"
        };
        const roubleSymbolDel = {
            position: "relative",
            top: "2px",
            left: "-10px",
            display: "inline"
        };

        return (
            <div style={roubleSymbol}>{' '}
                <span >P<div style={roubleSymbolDel}>-</div>
                </span>

            </div>
        );
    }
}
