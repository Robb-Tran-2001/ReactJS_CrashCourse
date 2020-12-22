import React from "react"
import TodoItem from "./TodoItem"

function App() {
    return (
        <div className = "todo-list"> {/*className instead of class*/}
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}

export default App