import React from "react"

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            count: 0
        } 
        this.handleClick = this.handleClick.bind(this) 
        //binds method to the current class' context
    }
    
    handleClick() {
        console.log("Incremented")
        //passes in another function to use previous version of state instead of object literal
        this.setState((prevState) => { 
            return (
                count: prevState.count + 1
            )
        }) //changing state method
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.handleClick}> Add! </button>
                {/*<ChildComponent count = {this.state.count}/>*/}
                {/*ChildComponent is rerendered every time state is changed as new prop is passed*/}
            </div>
        )
    }
}

//App inits with state.count = 0, binds handleClicl
//increments one in the function using setState, which takes in a function as a parameter
//which itself takes the previous state and returns new state

export default App