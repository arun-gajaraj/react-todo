import React from 'react'

function ToDoCard(props) {

	const {
		children,
		index,
		actions: {
			handleEditTodo,
			handleDeleteTodo,
		} } = props

	return (

		<li className='todoItem' >

			{children}
			<div className='actionsContainer'>
				<button onClick={()=>{handleEditTodo(index)}}>
					<i className="fa-regular fa-pen-to-square"></i>

				</button>
				<button onClick={() => { handleDeleteTodo(index) }}>
					<i className="fa-solid fa-trash" ></i>
				</button>
			</div>
		</li>

	)
}

export default ToDoCard
