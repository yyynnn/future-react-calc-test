import React from "react";

import TableRow from "../Section/TableRow";
import Rouble from "../Section/Rouble";
import TableButton from "../Section/TableButton";
import classnames from 'classnames';

export default class Table extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          isModalOpen: false,
          isCellActive: false,
          Comment: 1,
          disabled: false
      };
  }

  click() {
      if (this.state.disabled === true) {
        this.setState({disabled: false});
      } else {
        this.setState({disabled: true});
      }
  }


    render() {

let classes = classnames('specialbutton', {disabled: this.state.disabled});

        return (
            <div>
<img class="ImgCell test" src="images/close_modal.svg" onClick={this.click.bind(this)} title="отключить ряд"></img>
                <table class="table is-bordered">
                    <thead class="is-disabled">
                        <tr>
                            <th class="has-text-centered">#</th>
                            <th class="table-divider has-text-left">Дата</th>
                            <th>Сумма переплат</th>
                            <th>Остаток задолжности</th>
                            <th>Основной долг</th>
                            <th>Начисленные проценты</th>
                            <th>Платеж</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        <TableRow num="0" date="05/05/2016" rate="30000" debt="3500000" debtmonth="10000"/>
                        <TableRow num="1" date="06/05/2016" rate="30000" debt="3490000" debtmonth="10000"/>
                        <TableRow num="2" date="07/06/2016" rate="30000" debt="3480000" debtmonth="10000"/>
                        <TableRow num="3" date="08/07/2016" rate="30000" debt="3470000" debtmonth="10000"/>
                          <tr tabIndex="1" className={classes}>
                              <td class="has-text-centered" data-label="#">5</td>
                              <td class="table-divider has-text-left" data-label="Дата">test row</td>
                              <td data-label="Сумма переплат">1<Rouble/></td>
                              <td data-label="Остаток задожности">1<Rouble/></td>
                              <td data-label="Основной долг">1<Rouble/></td>
                              <td data-label="Начисленные проценты">1<Rouble/></td>
                              <td data-label="Платеж">1<Rouble/></td>
                              <td data-label=""><TableButton /></td>
                          </tr>
                    </tbody>
                </table>
                <div class="columns">
                    <div class="column is-2-tablet is-1-desktop">
                        <a class="button-future-margin button-future button is-medium">Сохранить расчеты</a>
                    </div>
                    <div class="column is-5">
                        <a class=" button is-medium button-future-inactive">Распечатать</a>
                    </div>
                </div>

            </div>
        );
    }
}
