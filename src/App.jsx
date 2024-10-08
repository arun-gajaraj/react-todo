import React, { useEffect, useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
// import _ from 'lodash'

function App() {

	const todos = []
	const [todoList, setTodoList] = useState(todos)

	const [todoInputValue, setTodoInputValue] = useState('')

	const actions = {
		handleAddTodo,
		handleEditTodo,
		handleDeleteTodo,
	}

	function persistData(newList) {
		localStorage.setItem('todos', JSON.stringify({ todos: newList }))
	}


	function handleAddTodo(newTodo) {
		const newList = [newTodo, ...todoList]
		persistData(newList)
		setTodoList(newList)
	}

	function handleEditTodo(index) {
		const valueToEdit = todoList[index]
		handleDeleteTodo(index)
		setTodoInputValue(valueToEdit)
	}

	function handleDeleteTodo(index) {
		const newList = todoList.filter((_, todoIndex) => {
			return todoIndex !== index
		})
		setTodoList(newList)
		persistData(newList)
	}

	useEffect(() => {
		if (!localStorage) {
			return
		}

		let localTodos = localStorage.getItem('todos')
		if (!localTodos) {
			return
		}

		localTodos = JSON.parse(localTodos).todos
		setTodoList(localTodos)
	}, [])

	return (
		<>
			<ToDoInput actions={actions} todoInputValue={todoInputValue} setTodoInputValue={setTodoInputValue} />
			<ToDoList actions={actions} todos={todoList} />
		</>
	)
}

export default App
