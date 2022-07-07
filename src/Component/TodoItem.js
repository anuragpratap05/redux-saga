import React, { useState } from "react"
import { Button } from "antd"
import { useDispatch } from "react-redux"
import { deleteTodo } from "../redux/app.actions"
const TodoItem = ({ todo }) => {
	console.log("todo=>", todo)
	const dispatch = useDispatch()
	return (
		<>
			<div className=".row mx-2 align-items-center">
				<div>#{Math.trunc(todo.id * 10)}</div>
				<div className="col-8">
					<h4>{todo.name}</h4>
				</div>
				<Button
					type="primary"
					onClick={() => dispatch(deleteTodo({ id: todo.id }))}
					danger
				>
					Delete
				</Button>
			</div>
		</>
	)
}

export default TodoItem
