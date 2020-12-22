import React from "react"

function TodoItem() {
    let styles = {
        display: "flex",
        justifyContent: "flex-start",
        alignItem: "center",
        padding: "30px 20px 0",
        width: "70%",
        borderBottom: "1px solid #cecece",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 100
    }
    return (
        <div className = "todo-item" style = {styles}>
            <input type = "checkbox"/>
            <p> Watch NBA </p>
        </div>
    )
}

export default TodoItem