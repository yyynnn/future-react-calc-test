import React from "react";

import TableRow from "../Section/TableRow";

export default class Table extends React.Component {

    render() {

        return (
            <div>

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
                    <tbody>
                        <TableRow num="0" date="05/05/2016" rate="30000" debt="3500000" debtmonth="10000"/>
                        <TableRow num="1" date="06/05/2016" rate="30000" debt="3490000" debtmonth="10000"/>
                        <TableRow num="2" date="07/06/2016" rate="30000" debt="3480000" debtmonth="10000"/>
                        <TableRow num="3" date="08/07/2016" rate="30000" debt="3470000" debtmonth="10000"/>
                    </tbody>
                </table>

            </div>
        );
    }
}
