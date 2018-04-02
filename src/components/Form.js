import React, { Component } from 'react'

class Form extends Component {
    render() {
        return ( // вывод на экран формы с полями input
            <div>
                <b>Enter New User:</b>
                <table style = {{width: '310px', marginTop: '10px'}}>
                    <tbody>
                        <tr className="form">
                            <td> Name: </td>
                            <td> <input id='name' type='text' style = {{width: '175px'}} /> </td>
                        </tr>
                        <tr className="form">
                            <td> Surname: </td>
                            <td> <input id='surname' type='text' style = {{width: '175px'}} /> </td>
                        </tr>
                        <tr className="form">
                            <td> Days: </td>
                            <td> <input id='days' type='text' style = {{width: '175px'}} /> </td>
                        </tr>
                        <tr className="form">
                            <td> Rate: </td>
                            <td> <input id='rate' type='text' style = {{width: '175px'}} /> </td>
                        </tr>
                        <tr className="form">
                            <td> Submit >> </td>
                            <td> <button onClick = { this.props.sortByParam.bind(this, 'surname') } onMouseDown = { this.props.addUser }> Submit </button> </td>
                        </tr>														
                    </tbody>
                </table>
                <br/>
            </div>
        );
    }
}

export default Form;