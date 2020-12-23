import React from "react"

class App extends React.Component { //class component has states, not functional components
    constructor () {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event) { //always passing in a predetermined parameter when event fires
        const {name, value} = event.target
        this.setState({
                [name]: value
                //grabs string from event.target.name with actual square bracket
                //THIS IS WHY THEY NEED TO BE IDENTICAL
            }) 
        //event.target.value indicates new value
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeHolder="First name" 
                    onChange={this.handleChange}/>
                <input 
                    type="text" 
                    value={this.state.lastName}
                    name="lastName" 
                    placeHolder="Last name" 
                    onChange={this.handleChange}/>
                {/*property name needs to match state's property syntax*/}
            </form>
        )
    }
}

//Control forms: state directs what input box should show, not the other way around
export default App