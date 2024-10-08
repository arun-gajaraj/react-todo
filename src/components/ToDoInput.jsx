import React from 'react'

export default function ToDoInput(props) {

	const {
		todoInputValue,
		setTodoInputValue,
		actions: {
			handleAddTodo,
		} } = props


	return (
		<header>
			<input value={todoInputValue}
				onChange={(e) => {
					setTodoInputValue(e.target.value)
				}}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleAddTodo(todoInputValue)
						setTodoInputValue('')
					}
				}}
				placeholder='Enter todo...' />

			<button onClick={() => {
				handleAddTodo(todoInputValue)
				setTodoInputValue('')
			}} >Add</button>
		</header>
	)
}

