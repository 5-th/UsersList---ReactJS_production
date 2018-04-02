import React, { Component } from 'react'
import users from '../users/users'
import '../index.css' 
import Form from './Form' 
import Table from './Table'

class App extends Component {
	state = { 
		usersList: users.slice()
	}

	render() {
			return (
			<div>
				<Form addUser = { this.addUser } sortByParam = { this.sortByParam } /> {/* вызов компонента Form */}
				<Table users = { this.state.usersList } removeUser = { this.removeUser } sortByParam = { this.sortByParam }  /> {/* вызов компонента Table */}
			</div>
		)
	}

	addUser =()=> {
		let id = Math.floor(Math.random()*999999999999),
					name = this.firstCharToUpperCase( document.getElementById('name').value ),
						surname = this.firstCharToUpperCase( document.getElementById('surname').value ),
							days = document.getElementById('days').value,
								rate = document.getElementById('rate').value,
									newUser = {'id': id, 'name': name, 'surname': surname, 'days': days, 'rate': rate}
		if (name !== '' && surname !== '' && days !== '' && rate !== '') { //валидность по заполненности полей
			if ( isNaN(name) && isNaN(surname) && !isNaN(days) && !isNaN(rate) ) { //валиднось по значениям полей
				this.setState({ usersList: [...this.state.usersList, newUser] }) //добавление пользователя
				this.clearForm() //очистка формы
			} else {
				alert('Ошибка ввода данных: имя и фамилия должны быть - строками, а дни и ставка - числами')
			}
		}
		
	}

	firstCharToUpperCase =(str)=> { //функция озаглавливания имени и фамилии
		return (
			str.charAt(0).toUpperCase() + str.substr(1)
		)
	}

	removeUser =(index)=> { //функция удаления пользователя
		document.getElementById('name').value = this.state.usersList[index].name
			document.getElementById('surname').value = this.state.usersList[index].surname
				document.getElementById('days').value = this.state.usersList[index].days
					document.getElementById('rate').value = this.state.usersList[index].rate
		
		let tempArr = this.state.usersList.slice()
		tempArr.splice(index, 1)
		this.setState({ usersList: tempArr })
	}
	
	clearForm =()=> { //функция отчистки формы
		document.getElementById('name').value = ''
			document.getElementById('surname').value = ''
				document.getElementById('days').value = ''
					document.getElementById('rate').value = ''
	}
	
	sortByParam =(param)=> { //автосортировка по имени
		const tempArr = this.state.usersList.slice();
		if (param !== 'payment') {
			tempArr.sort((user1, user2) => {
					return user1[param] > user2[param]
			})
		}	else {
			tempArr.sort((user1, user2) => {
				return user1.days*user1.rate > user2.days*user2.rate
			})
		}
		this.setState({ usersList: tempArr })
	}
}

export default App;