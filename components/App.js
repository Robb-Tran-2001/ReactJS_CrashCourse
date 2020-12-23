import React from "react"

//life cycle methods
class App extends React.Component { //class component has states, not functional components
    constructor () {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => { 
            //function, not parameter as we need prevstate
            return {isLoggedIn: !prevSstate.isLoggedIn}
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} > 
                    {isLoggedIn ? "Log Out" : "Log In"} 
                </button>      
                <h1> {isLoggedIn ? "Logged In" : "Logged Out"} </h1>  
            </div>
        )
    }
}

export default App