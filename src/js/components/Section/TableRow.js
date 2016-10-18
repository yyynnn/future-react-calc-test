import React from "react";

import TableButton from "../Section/TableButton";
import Modal from "../Section/Modal";
import Cell from "../Section/Cell";
import Rouble from "../Section/Rouble";

export default class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isCellActive: false,
            Comment: 1
        };
    }
    openModal() {
        this.setState({isModalOpen: true, originalBodyOverflow: document.body.style.overflowY});
        document.body.style.overflowY = 'hidden';
    }

    closeModal() {
        this.setState({isModalOpen: false, });
        document.body.style.overflowY = this.state.originalBodyOverflowY;
    }

    openCell() {
        this.setState({isCellActive: true});
    }

    closeCell() {
        this.setState({isCellActive: false});
    }

    save() {
        var sum = this.refs.newsum.value;
        console.log(sum);
        this.openCell();
        this.closeModal();
        this.setState({comment: sum});
    }

    sum() {
        var a = +(this.props.rate);
        var b = +(this.props.debtmonth);
        return Math.floor(a + b);
    }

    sub() {
        var a = this.props.debt;
        var b = this.props.debtmonth;
        return Math.floor(+a - +b);
    }

    monthyear() {
        var a = this.props.date;
        var d = new Date(a);

        var mm = d.getMonth() + 1;
        if (mm < 10)
            mm = '0' + (+ mm + 1);

        var yy = d.getFullYear() % 100;
        if (yy < 10)
            yy = '0' + yy;
        var checkout = mm + '.' + yy;
        return checkout;

    }

    rownumb() {
        var a = this.props.num;
        return Math.floor(+ a + 1);

    }

    renderNormal() {
        return (<TableButton open={() => this.openModal()}/>);
    }

    renderCell() {

        const closeModalStyle = {
            position: "relative",
            top: "-60px",
            pointerEvents: "none"
        };

        const roubleInputIconStyle = {
            fontSize: "14pt!important",
            display: "inline",
            position: "relative",
            left: "-45px",
            bottom: " -48px",
            color: "#4097dc"
        };

        return (

            <div>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <img style={closeModalStyle} src={'images/close_modal.svg'}/>
                    <div class="panel-heading">
                        <span>Сумма платежа</span>
                    </div>
                    <div>
                        <span class="currencyinput">
                            <input ref="newsum" class="input is-medium" type="number" placeholder="Введите сумму"></input>
                            <div style={roubleInputIconStyle}>
                                <del>
                                    <span >P
                                    </span>
                                </del>
                            </div>
                        </span>
                    </div>
                    <p>
                        <a class="button is-medium button-future" onClick={() => this.save()}>Сохранить
                        </a>
                    </p>
                </Modal>
                <Cell onClose={() => this.closeCell()} newsum={this.state.comment}></Cell>
            </div>
        );
}
        render() {



            if ((this.state.isModalOpen) || (this.state.isCellActive)) {
                var cell = this.renderCell();

            } else {
                var cell = this.renderNormal();

            }

            const roubleSymbol = {
                fontSize: "10.0pt"
            };

            return (

                <tr tabIndex="-1">
                    <td class="has-text-centered" data-label="#">{this.rownumb()}</td>
                    <td class="table-divider has-text-left" data-label="Дата">
                        <span>{this.monthyear()}</span>
                    </td>
                    <td data-label="Сумма переплат">{this.props.rate}<Rouble/></td>
                    <td data-label="Остаток задожности">{this.sub()}<Rouble/></td>
                    <td data-label="Основной долг">{this.props.debtmonth}<Rouble/></td>
                    <td data-label="Начисленные проценты">{this.props.rate}<Rouble/></td>
                    <td data-label="Платеж">{this.sum()}<Rouble/></td>
                    <td data-label="">{cell}</td>
                </tr>

            );
        }
    }
