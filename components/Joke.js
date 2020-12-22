import React from "react"

function Joke(props) {
    return (
        <div>
            <h1 style = {{display: props.setup.question ? "block": "none"} }> 
            {/* if there is no question, display nada
                condition ? exprIfTre : exprIfFalse
            */}
                Question: {props.setup.question} 
            </h1>
            <h3 style = {{color: props.setup.question ? "red": "yellow"} }>
                 Answer: {props.setup.punchline} 
            </h3>
        </div>
    )
}

export default Joke