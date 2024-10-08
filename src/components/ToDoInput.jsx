import React, { useState } from 'react'

export default function ToDoInput(props) {

	const { 
		todoInputValue,
		setTodoInputValue,
		actions: {
		handleAddTodo,
		handleEditTodo,
	} } = props


	return (
		<header>
			<input value={todoInputValue} onChange={(e) => {
				setTodoInputValue(e.target.value)
			}} placeholder='Enter todo...' />
			<button onClick={() => {
				handleAddTodo(todoInputValue)
				setTodoInputValue('')
			}} >Add</button>
		</header>
	)
}

