import React from "react"

function TodoItem(props) {
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
            <input type = "checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)} 
            //call the handleChange method that is passed down to Prop
            />
            <p> {props.item.text}  </p>
        </div>
    )
}

export default TodoItem