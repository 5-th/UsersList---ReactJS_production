import React, { Component } from 'react'

class Table extends Component {
    
    render() { //главный return компонента
        return (
            <table>
                <tbody>
                    <tr style = {{cursor: 'pointer'}}>
                        <th style = {{width: '80px'}} onClick = { this.props.sortByParam.bind(this, 'surname') }> Surname </th>
                        <th style = {{width: '50px'}} onClick = { this.props.sortByParam.bind(this, 'name') }> Name </th>
                        <th style = {{width: '50px'}} onClick = { this.props.sortByParam.bind(this, 'days') }> Days </th>
                        <th style = {{width: '50px'}} onClick = { this.props.sortByParam.bind(this, 'rate') }> Rate </th>
                        <th style = {{width: '80px'}} onClick = { this.props.sortByParam.bind(this, 'payment') }> Payment </th>
                    </tr>
                    { this.output() }
                    { this.summ() }
                </tbody>
			</table>
        );
    }

    output =()=> { //метод вывода таблицы на экран
		return (
			this.props.users.map((item, index) => {
					return (
                        <tr key={ index } style = {{cursor: 'pointer'}} onDoubleClick = { this.props.removeUser.bind(this, index) } >
                            <td> { item.surname } </td>
                            <td> { item.name } </td>
                            <td> { item.days } </td>
                            <td> { item.rate } </td>
                            <td> { item.days * item.rate } </td>
                        </tr>
					)
			})
		)
	}

	summ =()=> { //метод рассчета суммы по последнему полю
		let summ = 0
		this.props.users.map((item, index) => {
			summ += item.days * item.rate
		})
		return (
			<tr className="footer">
                <td> <b> PAYMENT </b> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> <b> { summ } </b> </td>
			</tr>
		)
	}
}

export default Table;