import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
function App() {
    let todoItemComponents = todosData.map(item => {
        return <TodoItem key = {item.id} item = {item}/>
    })
    return (
        <div className = "todo-list"> {/*className instead of class*/}
            {todoItemComponents}
        </div>
    )
}

export default App