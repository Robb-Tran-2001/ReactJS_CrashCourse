import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            todos: todosData //set this.state.todos = imported todosData
        } 
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState((prevState) => { //change previous state
            const updatedTodos = prevState.todos.map(todo => { 
                //map prev state array to modified array
                if(todo.id === id) todo.completed = !todo.completed
                return todo
            })
            return {
                todo: updatedTodos //update todo to new state
            }
        })
    }

    render() {
        let todoItemComponents = this.state.todos.map(item => {
            return <TodoItem key = {item.id} item = {item} handleChange = {this.handleChange}/>
        }) //passes into prop the handleChange method
        return (
            <div className = "todo-list"> {/*className instead of class*/}
                {todoItemComponents}
            </div>
        )
    }
}

export default App