import React from "react"

function Joke(props) {
    return (
        <div>
            <h1 style = {{display: props.question ? "block": "none"} }> 
            {/* if there is no question, display nada
                condition ? exprIfTre : exprIfFalse
            */}
                Question: {props.question} 
            </h1>
            <h3 style = {{color: props.question ? "red": "yellow"} }>
                 Answer: {props.punchline} 
            </h3>
        </div>
    )
}

export default Joke