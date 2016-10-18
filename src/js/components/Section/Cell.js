import React from "react";
import Rouble from "../Section/Rouble";

export default class Cell extends React.Component {

    render() {
        const cellStyle = {
            textAlign: "left"
        };

        const roubleSymbol = {
            fontSize: "16px",
            display: "inline"
        };
        const roubleSymbolDel = {
            position: "relative",
            top: "2px",
            left: "-10px",
            display: "inline"
        };

        return (
            <div class="tg-wrap">
                <table style={cellStyle}>
                    <tbody>
                        <tr class="cellTable">
                            <th class="cellTable" rowSpan="2"><img class="ImgCell" src={'images/close.svg'} onClick={this.props.onClose}/></th>
                            <th class="cellTable">
                                <span id="p1Cell">{this.props.newsum}
                                    <div style={roubleSymbol}>{' '}
                                        <span >P<div style={roubleSymbolDel}>-</div>
                                        </span>
                                    </div>
                                </span>
                            </th>
                        </tr>
                        <tr class="cellTable">
                            <th class="cellTable">
                                <span id="p2Cell">Экономия {Math.floor(this.props.newsum / 0.4)}
                                    <Rouble/></span>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}
