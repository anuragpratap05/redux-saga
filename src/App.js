import "./App.css"
import TodoInput from "./Component/TodoInput"
import TodoList from "./Component/TodoList"

function App() {
	return (
		<div className="App">
			<h3>Todo list</h3>
			<TodoInput></TodoInput>
			<TodoList></TodoList>
		</div>
	)
}

export default App
