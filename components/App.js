import React from "react"

class App extends React.Component
{
    constructor() {
        super()
        this.state = {
            name: "RoobyBooby",
            age: "19",
            isLoggedIn: true
        }
    }
    render() {
        let display
        if(this.state.isLoggedIn) display = "in"
        else display = "out"
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} years old</h1>
                <h1>You are logged {display}</h1>
            </div>
        )
    }
}

export default App