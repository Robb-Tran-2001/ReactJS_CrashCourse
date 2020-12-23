import React from "react"

function handleOver() {
    console.log("hovering")
}

function App() {
    return (
        <div>
            <img onMouseOver={handleOver} //call another function
            src="https://i.pinimg.com/564x/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg"/>
            <br/>
            <br/>
            <button onClick={() => console.log("I was clicked")} 
            //anonymous function
            > </button>
        </div>
    )
}

export default App